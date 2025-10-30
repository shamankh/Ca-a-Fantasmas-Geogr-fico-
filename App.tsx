import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mystery } from './types';
import { ALL_MYSTERIES } from './data/mysteries';

type Message = {
    text: React.ReactNode;
    type: 'success' | 'error' | '';
};

type GameState = 'menu' | 'playing' | 'revealed' | 'finished';

// Helper para embaralhar o array
const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const App: React.FC = () => {
    // --- STATE ---
    const [mysteries, setMysteries] = useState<Mystery[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playerGuess, setPlayerGuess] = useState<{ lat: number; lon: number } | null>(null);
    const [gameState, setGameState] = useState<GameState>('menu');
    const [message, setMessage] = useState<Message>({ text: '', type: '' });
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // --- GAME LOGIC ---
    const startGame = () => {
        const shuffledMysteries = shuffleArray(ALL_MYSTERIES);
        setMysteries(shuffledMysteries.slice(0, 10));
        setCurrentIndex(0);
        setPlayerGuess(null);
        setMessage({ text: '', type: '' });
        setGameState('playing');
    };

    const handleNextMystery = () => {
        if (currentIndex < mysteries.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setGameState('playing');
            setPlayerGuess(null);
            setMessage({ text: '', type: '' });
        } else {
            setGameState('finished');
        }
    };

    const checkAnswer = (guess: { lat: number, lon: number }) => {
        const correct = mysteries[currentIndex];
        const correctLatText = `${Math.abs(correct.lat)}°${correct.lat >= 0 ? 'N' : 'S'}`;
        const correctLonText = `${Math.abs(correct.lon)}°${correct.lon >= 0 ? 'L' : 'O'}`;

        if (guess.lat === correct.lat && guess.lon === correct.lon) {
            setMessage({ text: <><strong className="font-bold">Em cheio!</strong> Você encontrou a assombração em {correct.name}!</>, type: 'success' });
        } else {
            setMessage({ text: <><strong className="font-bold">Você errou...</strong> A assombração de {correct.name} estava em <strong>{correctLatText}, {correctLonText}</strong>.</>, type: 'error' });
        }
    };

    // --- CANVAS DRAWING LOGIC ---
    const drawMap = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const currentMystery = mysteries[currentIndex];

        const padding = { top: 34, right: 32, bottom: 44, left: 52 };
        const baseDrawingWidth = 720;
        const baseDrawingHeight = 360;
        canvas.width = baseDrawingWidth + padding.left + padding.right;
        canvas.height = baseDrawingHeight + padding.top + padding.bottom;
        
        const mapDisplayWidth = baseDrawingWidth;
        const mapDisplayHeight = baseDrawingHeight;
        const mapOriginX = padding.left;
        const mapOriginY = padding.top;
        const pointRadius = 8;
        const gridColor = '#cbd5e1';
        const labelColor = '#3730a3';

        const mapLatLonToCanvas = (lat: number, lon: number) => {
            const x = mapOriginX + ((lon + 180) / 360) * mapDisplayWidth;
            const y = mapOriginY + ((90 - lat) / 180) * mapDisplayHeight;
            return { x, y };
        };

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = gridColor;
        ctx.fillStyle = labelColor;
        ctx.lineWidth = 1.2;
        ctx.font = '11px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (let lat = -90; lat <= 90; lat += 15) {
            const { y } = mapLatLonToCanvas(lat, 0);
            ctx.beginPath();
            ctx.moveTo(mapOriginX, y);
            ctx.lineTo(mapOriginX + mapDisplayWidth, y);
            ctx.stroke();
            ctx.fillText(`${Math.abs(lat)}°${lat > 0 ? 'N' : lat < 0 ? 'S' : ''}`, mapOriginX - 28, y);
        }
        for (let lon = -180; lon <= 180; lon += 15) {
            const { x } = mapLatLonToCanvas(0, lon);
            ctx.beginPath();
            ctx.moveTo(x, mapOriginY);
            ctx.lineTo(x, mapOriginY + mapDisplayHeight);
            ctx.stroke();
            ctx.fillText(`${Math.abs(lon)}°${lon > 0 ? 'L' : lon < 0 ? 'O' : ''}`, x, mapOriginY + mapDisplayHeight + 17);
        }

        ctx.fillStyle = '#312e81';
        ctx.font = 'bold 12px Inter';
        ctx.fillText("Equador", mapOriginX - 28, mapLatLonToCanvas(0, 0).y);
        ctx.fillText("Greenwich", mapLatLonToCanvas(0, 0).x, mapOriginY + mapDisplayHeight + 31);
        
        if (gameState === 'revealed' && currentMystery) {
            const correctCoords = mapLatLonToCanvas(currentMystery.lat, currentMystery.lon);
            ctx.beginPath();
            ctx.arc(correctCoords.x, correctCoords.y, pointRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#e11d48';
            ctx.shadowColor = '#fff0f6';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#7f1d1d';
            ctx.lineWidth = 2;
            ctx.stroke();

            if(playerGuess) {
                const guessCoords = mapLatLonToCanvas(playerGuess.lat, playerGuess.lon);
                ctx.beginPath();
                ctx.arc(guessCoords.x, guessCoords.y, pointRadius, 0, Math.PI * 2);
                ctx.fillStyle = '#2563eb';
                ctx.shadowColor = '#eff6ff';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.strokeStyle = '#1e3a8a';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    }, [mysteries, currentIndex, gameState, playerGuess]);

    const handleMapClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (gameState !== 'playing' || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const canvasX = (event.clientX - rect.left) * scaleX;
        const canvasY = (event.clientY - rect.top) * scaleY;

        const padding = { top: 34, right: 32, bottom: 44, left: 52 };
        const mapDisplayWidth = canvas.width - padding.left - padding.right;
        const mapDisplayHeight = canvas.height - padding.top - padding.bottom;
        
        const lon = ((canvasX - padding.left) / mapDisplayWidth) * 360 - 180;
        const lat = 90 - ((canvasY - padding.top) / mapDisplayHeight) * 180;

        const snappedLat = Math.round(lat / 15) * 15;
        const snappedLon = Math.round(lon / 15) * 15;

        setPlayerGuess({ lat: snappedLat, lon: snappedLon });
        checkAnswer({ lat: snappedLat, lon: snappedLon });
        setGameState('revealed');
    };

    useEffect(() => {
        drawMap();
        window.addEventListener('resize', drawMap);
        return () => window.removeEventListener('resize', drawMap);
    }, [drawMap]);

    const messageClasses = {
        '': 'min-h-[60px]',
        'success': 'bg-green-100 text-green-700 border border-green-300 min-h-[60px]',
        'error': 'bg-red-100 text-red-700 border border-red-300 min-h-[60px]',
    };

    const currentMystery = mysteries[currentIndex];

    return (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col items-center justify-center min-h-screen p-2 md:p-6 text-gray-200">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-2xl w-full max-w-4xl border border-purple-700/50">
                <h1 className="text-2xl md:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-300 mb-2">Caça-Fantasmas Geográfico</h1>
                <p className="text-center text-purple-200 mb-6 text-lg">Leia a história, clique no mapa e encontre o mistério!</p>

                <div className="bg-slate-900/70 border border-purple-800/60 rounded-lg p-4 mb-6 min-h-[100px] flex flex-col items-center justify-center text-center">
                    {gameState === 'menu' && (
                        <p>Prepare-se para uma jornada assustadora ao redor do mundo. Você está pronto para encontrar 10 fantasmas?</p>
                    )}
                    {gameState === 'finished' && (
                        <div>
                            <h2 className="font-bold text-sky-300 mb-2">Fim de Jogo!</h2>
                            <p className="text-gray-300">Você desvendou todos os 10 mistérios desta rodada. Jogue novamente para encontrar novos fantasmas!</p>
                        </div>
                    )}
                    {(gameState === 'playing' || gameState === 'revealed') && currentMystery && (
                        <div>
                            <h2 className="font-bold text-sky-300 mb-2">{`Mistério ${currentIndex + 1} de ${mysteries.length}: ${currentMystery.name}`}</h2>
                            <p className="text-gray-300">{currentMystery.story}</p>
                        </div>
                    )}
                </div>

                <div className="aspect-[2/1] w-full">
                    <canvas ref={canvasRef} onClick={handleMapClick} className={`w-full h-auto border border-purple-700/50 rounded-lg shadow-md bg-slate-900 ${gameState === 'playing' ? 'cursor-crosshair' : 'cursor-not-allowed'}`}></canvas>
                </div>
                
                {gameState === 'menu' && (
                     <button onClick={startGame} className="mt-8 w-full bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-700 hover:to-sky-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5">
                        Iniciar Jogo
                    </button>
                )}

                {(gameState === 'revealed' || gameState === 'finished') && (
                    <button onClick={gameState === 'finished' ? startGame : handleNextMystery} className="mt-8 w-full bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-700 hover:to-sky-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5">
                        {gameState === 'finished' ? 'Jogar Novamente' : 'Próximo Mistério'}
                    </button>
                )}
                
                <div role="alert" className={`mt-6 p-4 text-center rounded-lg transition-all duration-300 ease-in-out ${messageClasses[message.type]}`}>
                    {message.text}
                </div>
            </div>
        </div>
    );
};

export default App;

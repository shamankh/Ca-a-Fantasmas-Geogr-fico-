import { Mystery } from '../types';

export const ALL_MYSTERIES: Mystery[] = [
    // América do Norte
    { name: "La Llorona (México)", story: "Nos rios e lagos do México, o espírito de uma mulher que afogou seus filhos vaga, chorando '¡Ay, mis hijos!'. Ouvir seu lamento é um presságio de desgraça.", lat: 15, lon: -105 },
    { name: "O Wendigo (Canadá)", story: "Nas vastas e geladas florestas do norte do Canadá, o Wendigo é um espírito canibal associado à fome e ao inverno. Lendas dizem que ele caça os que se perdem na neve.", lat: 60, lon: -90 },
    { name: "Hotel Stanley (EUA)", story: "Este hotel no Colorado, EUA, inspirou 'O Iluminado' de Stephen King. Hóspedes relatam ouvir festas fantasmas no salão de festas e ver os antigos proprietários vagando pelos corredores.", lat: 45, lon: -105 },
    { name: "Ilha das Bonecas (México)", story: "Ao sul da Cidade do México, uma ilha é decorada com centenas de bonecas em decomposição. Um homem as pendurou para apaziguar o espírito de uma menina afogada nas proximidades.", lat: 15, lon: -90 },
    { name: "O Farol de St. Augustine (EUA)", story: "Na costa da Flórida, EUA, as filhas de um construtor de faróis se afogaram no mar. Dizem que seus espíritos ainda são ouvidos brincando e rindo na torre durante a noite.", lat: 30, lon: -75 },
    { name: "La Ciguapa (República Dominicana)", story: "Nas florestas da República Dominicana, criaturas míticas com pés virados para trás atraem homens para a perdição com sua beleza, fazendo-os se perderem para sempre.", lat: 15, lon: -75 },
    { name: "A Prisão de Alcatraz (EUA)", story: "Na baía de São Francisco, EUA, a infame prisão de Alcatraz é assombrada pelos espíritos de seus prisioneiros mais notórios. Celas frias e sussurros são relatados por visitantes.", lat: 30, lon: -120 },

    // América do Sul
    { name: "A Loira do Bonfim (Brasil)", story: "Em Salvador, Brasil, o fantasma de uma jovem loira assombra o Cemitério do Bonfim, aparecendo para motoristas de táxi antes de desaparecer misteriosamente no portão.", lat: -15, lon: -45 },
    { name: "El Silbón (Venezuela/Colômbia)", story: "Nas planícies da Venezuela e Colômbia, um espectro assobia uma melodia sinistra enquanto carrega os ossos do pai em um saco. Seu assobio engana, soando perto quando está longe.", lat: 0, lon: -75 },
    { name: "A Casa Matusita (Peru)", story: "No coração de Lima, Peru, esta casa é famosa por sua energia maligna. Dizem que ninguém consegue passar mais de alguns minutos no segundo andar sem enlouquecer.", lat: -15, lon: -75 },
    { name: "A Viúva (Chile)", story: "Nas estradas rurais do Chile, uma figura de luto seduz homens que viajam sozinhos à noite, antes de revelar sua face esquelética, levando-os à loucura ou à morte.", lat: -30, lon: -75 },
    { name: "Cemitério da Recoleta (Argentina)", story: "Em Buenos Aires, Argentina, uma jovem enterrada viva em 1902 ainda assombra seu mausoléu. Guardas noturnos relatam ouvir gritos vindos de seu túmulo.", lat: -30, lon: -60 },

    // Europa
    { name: "Monstro do Lago Ness (Escócia)", story: "'Nessie' é uma criatura lendária que habita o Lago Ness, nas Terras Altas da Escócia. Avistamentos descrevem um animal grande com um longo pescoço emergindo das águas escuras.", lat: 60, lon: 0 },
    { name: "Castelo de Bran (Romênia)", story: "Conhecido como o Castelo de Drácula, esta fortaleza na Transilvânia, Romênia, é ligada a Vlad, o Empalador. Visitantes sentem pontos frios e ouvem sussurros inexplicáveis.", lat: 45, lon: 30 },
    { name: "Torre de Londres (Inglaterra)", story: "Assombrada pelo fantasma de Ana Bolena, a rainha executada. Seu espírito sem cabeça é visto vagando perto da Torre Verde, na Inglaterra, onde encontrou seu fim trágico.", lat: 45, lon: 0 },
    { name: "Catacumbas de Paris (França)", story: "Sob as ruas de Paris, França, um ossuário abriga os restos de seis milhões de pessoas. Visitantes relatam ser tocados por mãos invisíveis na escuridão dos túneis.", lat: 45, lon: 0 },
    { name: "Ilha de Poveglia (Itália)", story: "Perto de Veneza, Itália, esta ilha serviu de quarentena para vítimas da Peste Negra. Dizem que os gritos torturados dos mortos ainda ecoam na ilha abandonada.", lat: 45, lon: 15 },
    { name: "Castelo de Edimburgo (Escócia)", story: "Um fantasma de um tocador de gaita de foles assombra os túneis sob o castelo na Escócia. Ele foi enviado para explorar os túneis e nunca mais voltou, mas sua música ainda é ouvida.", lat: 60, lon: 0 },
    { name: "Floresta Hoia Baciu (Romênia)", story: "Conhecida como o 'Triângulo das Bermudas da Transilvânia' na Romênia, visitantes desta floresta relatam náuseas, avistamentos de OVNIs e a sensação de estarem sendo observados.", lat: 45, lon: 30 },
    { name: "Castelo de Leap (Irlanda)", story: "Considerado um dos castelos mais assombrados da Irlanda, é o lar de um espírito elemental. Uma masmorra cheia de espinhos foi encontrada, onde inúmeras pessoas encontraram seu fim.", lat: 45, lon: -15 },
    { name: "A Dama de Branco de Berlim (Alemanha)", story: "Na Cidadela de Spandau, em Berlim, Alemanha, o fantasma de Anna Sydow, amante de um governante do século XVI, aparece para anunciar a morte de membros da nobreza.", lat: 45, lon: 15 },

    // África
    { name: "Castelo da Boa Esperança (África do Sul)", story: "Na Cidade do Cabo, África do Sul, o fantasma de Lady Anne Barnard é visto em bailes, e um cão preto fantasma se lança sobre os visitantes antes de desaparecer.", lat: -30, lon: 15 },
    { name: "Ruínas de Gedi (Quênia)", story: "Esta cidade suaíli na costa do Quênia foi misteriosamente abandonada. Espíritos guardiões protegem as ruínas, e uma mulher fantasmagórica é vista entre as árvores.", lat: 0, lon: 45 },
    { name: "Pirâmides de Gizé (Egito)", story: "Os antigos túmulos dos faraós no Egito são protegidos por maldições. Dizem que o espírito do Faraó Khufu assombra a Grande Pirâmide, guardando seu descanso eterno.", lat: 30, lon: 30 },
    { name: "Obelisco de Aksum (Etiópia)", story: "Na antiga cidade de Aksum, na Etiópia, lendas falam de espíritos guardiões que protegem os tesouros enterrados nos túmulos reais, assombrando quem perturba seu sono.", lat: 15, lon: 45 },
    { name: "Ilha Gorée (Senegal)", story: "Na 'Casa dos Escravos' no Senegal, a 'Porta Sem Retorno' se abre para o Atlântico. Dizem que os espíritos dos escravos que por ali passaram ainda lamentam sua liberdade perdida.", lat: 15, lon: -15 },
    { name: "Grande Zimbabwe (Zimbábue)", story: "As ruínas de pedra desta antiga cidade no Zimbábue são consideradas sagradas. À noite, sons de tambores e vozes são ouvidos, atribuídos aos espíritos dos antigos habitantes.", lat: -15, lon: 30 },

    // Ásia
    { name: "Forte de Bhangarh (Índia)", story: "No Rajastão, Índia, este forte é tão assombrado que a entrada é proibida à noite. Uma maldição de um mago condenou a cidade, e os espíritos dos moradores ainda vagam por lá.", lat: 30, lon: 75 },
    { name: "Aokigahara (Japão)", story: "Na base do Monte Fuji, no Japão, a 'Floresta do Suicídio' é assombrada pelos 'yūrei' (fantasmas) daqueles que ali morreram. Eles sussurram para os visitantes, tentando-os a se perderem.", lat: 30, lon: 135 },
    { name: "Grande Muralha (China)", story: "Milhões de trabalhadores morreram durante a construção da Grande Muralha da China, e muitos foram enterrados dentro dela. Seus espíritos ainda são vistos marchando sobre a estrutura à noite.", lat: 45, lon: 120 },
    { name: "Praia de Changi (Singapura)", story: "Durante a Segunda Guerra Mundial, esta praia em Singapura foi um local de execução. Os fantasmas sem cabeça de soldados são vistos vagando pela areia, e gritos inexplicáveis são ouvidos.", lat: 0, lon: 105 },
    { name: "Lawang Sewu (Indonésia)", story: "Em Semarang, Indonésia, este antigo edifício colonial foi uma prisão japonesa. É famoso por suas aparições, incluindo o fantasma de uma jovem holandesa e um vampiro conhecido como 'kuntilanak'.", lat: 0, lon: 105 },
    { name: "Cidade Proibida (China)", story: "Este palácio em Pequim, China, foi palco de inúmeras traições. Visitantes relatam ver o fantasma de uma mulher de branco chorando, deslizando pelos pátios do palácio à noite.", lat: 45, lon: 120 },
    { name: "Monte Everest (Nepal/China)", story: "Alpinistas no Himalaia, na fronteira do Nepal com a China, relataram ver o fantasma de Andrew Irvine, que desapareceu perto do cume em 1924, oferecendo conforto antes de desaparecer na neve.", lat: 30, lon: 90 },
    { name: "O Fantasma de Mae Nak (Tailândia)", story: "Em Bangkok, Tailândia, a história de uma mulher que morreu no parto e cujo fantasma esperou pelo marido é famosa. Seu santuário é visitado por muitos que buscam boa sorte.", lat: 15, lon: 105 },
    { name: "Poço de Himeji (Japão)", story: "No Castelo de Himeji, Japão, o fantasma de Okiku, uma serva falsamente acusada de perder um prato valioso, emerge de um poço à noite, contando pratos de um a nove antes de soltar um grito terrível.", lat: 30, lon: 135 },
    
    // Oceania
    { name: "Port Arthur (Austrália)", story: "Nesta antiga colônia penal na Tasmânia, Austrália, os espíritos de mais de mil condenados que morreram em condições brutais ainda assombram os edifícios de pedra.", lat: -45, lon: 150 },
    { name: "Hospital Psiquiátrico de Beechworth (Austrália)", story: "Um antigo asilo em Victoria, Austrália, com um passado sombrio. O fantasma de uma paciente chamada Matron Sharpe é frequentemente visto nos corredores abandonados.", lat: -30, lon: 150 },
    { name: "Hotel Waitomo Caves (Nova Zelândia)", story: "Construído sobre uma caverna funerária Maori na Ilha Norte da Nova Zelândia, hóspedes relatam ver uma princesa Maori e ouvir crianças rindo em quartos vazios.", lat: -45, lon: 180 },
    { name: "Monte Cristo Homestead (Austrália)", story: "Considerada a casa mais assombrada da Austrália, em Nova Gales do Sul, o fantasma da Sra. Crawley, que se tornou reclusa após a morte do marido, é a aparição mais famosa.", lat: -30, lon: 150 },
    { name: "Triângulo do Estreito de Bass (Austrália)", story: "Esta área de mar entre a Austrália e a Tasmânia é palco de desaparecimentos de navios e aviões, como o famoso caso de Frederick Valentich, que relatou um OVNI antes de sumir.", lat: -45, lon: 150 },

    // Global / Antártica
    { name: "O Holandês Voador (Cabo da Boa Esperança)", story: "Um lendário navio fantasma condenado a navegar perto do Cabo da Boa Esperança, na África do Sul, para sempre. Avistá-lo é um presságio de desastre para os marinheiros.", lat: -30, lon: 15 },
    { name: "Estação de Pesquisa (Antártica)", story: "Em estações isoladas na Antártica, cientistas relatam a 'sensação do terceiro homem', sentindo uma presença invisível que os acompanha. Acredita-se ser o espírito de um pesquisador perdido.", lat: -75, lon: 0 },
    { name: "Navios Fantasmas (Antártica)", story: "Marinheiros relatam avistar navios antigos, como escunas do século XIX, navegando silenciosamente entre os icebergs da Antártica, apenas para desaparecerem na névoa gelada.", lat: -75, lon: -45 }
];

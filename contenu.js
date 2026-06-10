// Les données de votre cours
export const CW = '#f2ede4', CY = '#f5e441', CG = '#7af0a0', CB = '#8dd0f0';

const S0_Events = [
    { text: `Bienvenue {{name}} !`, x: 0.5, y: 0.5, sz: 0.07, bold: true, color: '#f5e441', align: 'center' },
   
];
const S00_Events = [
    { text: "Durant cette notion, tu seras avec une camarade.", x: 0.5, y: 0.15, sz: 0.035, color: CW , align : 'center'},
    { text : "Tu comprends plus vite qu'elle alors tu es appelé à répondre à ses questions de compréhension.",x: 0.5, y: 0.25, sz: 0.035, color: CW, align: 'center' },
    { text : "Sa compréhension définit ta réussite ! ",x: 0.5, y: 0.35, sz: 0.035, color: CW, align: 'center' },
    { 
        type: 'question', 
        isIntro: true, 
        text: "Bonjour ! Je suis Camélia. On m'a dit que je serai avec toi. Pret ?" 
    }, 
];


const S1_Events = [
    { text: 'Notion : Les diviseurs d’un nombre', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },
    { text: "Imagine que vous êtes 12 dans ta classe ; le professeur te demande alors de vous diviser en groupes de 3.", y: 0.25, sz: 0.035, color: CW },
    { text:"Combien de groupes de 3 pourra-t-on former ?", y: 0.30, sz: 0.035, color: CW },


    {
        type: 'question',
        text: "Tu as une idée de comment faire ?",
        options: [
            { 
                text: "Oui", 
                value: { 
                    triggerNext: {
                        text: "Génial ! Comment as-tu fait ?",
                        
                        choices: [
                            { label: "J'ai fait une division", value: { isCorrect: true } },
                            { label: "J'ai compté dans ma tête", value: { isCorrect: false } },
                            { label: "Au hasard !", value: { isCorrect: false } }
                        ]
                    }   
            
                } 
            },
            { 
                text: "Non", 
                value: { isCorrect: false } 
            }
        ],
        closeOnFail: true,
        closeOnSuccess: true,
    },
    
    
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 3, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'clear', target: 'traits_groupes' }, 
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '3', result: '4', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 12 },
    { type: 'clear', target: 'vibrating_fraction' }, 
    {
        type: 'question',
        isVerification: true,
        text: "C'est maintenant claire je crois, on fera 4 groupe de 3 ! c'est bien ça non?",
        options: [
            { text: "Oui, 3 ", isCorrect: false },
            { text: "Oui, 4 .", isCorrect: true },
            { text: "Oui, 12.", isCorrect: false }
        ],
        nextQuestion: {
            text: "Dis moi ! Et si c'était des groupes de 2 personnes, combien en auront nous ? ",
            options: [
                { text: " 2", isCorrect: false },
                { text: " 6 ", isCorrect: true },
                { text: "12", isCorrect: false }
            ]
        },
        retryStart: 4
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 2, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,       
        x0: 0.05
    },
    { type: 'clear', target: 'traits_groupes' }, 
    {
        type: 'question',
        text: "Et pour des groupes de 1 ? (12 ÷ 1)",
        options: [
            { text: "1 groupe.", isCorrect: false },
            { text: "12 groupes.", isCorrect: true }
        ],
        retryStart: 50,
        closeOnFail: true,
        closeOnSuccess: true,
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 1, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'clear', target: 'traits_groupes' }, 
    {
        type: 'question',
        text: "Et pour des groupes de 4 ? (12 ÷ 4)",
        options: [
            { text: "4 groupes.", isCorrect: false },
            { text: "3 groupes.", isCorrect: true }
        ],
        retryStart: 75,
        closeOnFail: true,
        closeOnSuccess: true
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 4, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'clear', target: 'traits_groupes' }, 
    {
        type: 'question',
        text: "Et pour des groupes de 6 ? (12 ÷ 6)",
        options: [
            { text: "6 groupes.", isCorrect: false },
            { text: "2 groupes.", isCorrect: true }
        ],
        retryStart: 95,
        closeOnFail: true,
        closeOnSuccess: true
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 6, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'clear', target: 'traits_groupes' },
    {
        type: 'question',
        text: "Et pour un groupe de 12 ? (12 ÷ 12)",
        options: [
            { text: "12 groupes.", isCorrect: false },
            { text: "1 groupe.", isCorrect: true }
        ],
        retryStart: 100,
        closeOnFail: true,
        closeOnSuccess: true
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 12, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'clear', target: 'traits_groupes' },

    { text: "En résumé : dans 12 on peut trouver 6 fois le nombre 2, 4 fois le nombre 3 etc...", y: 0.75, sz: 0.035, color: CB },
    { text: "On peut écrire : 12/2 = 6 ; 12/3 = 4 ; 12/4 = 3 ; 12/6 = 2 ; 12/12 = 1.", y: 0.82, sz: 0.035, color: CW },
    { text: "Les diviseurs de 12 sont : 1, 2, 3, 4, 6, 12.", y: 0.90, sz: 0.04, color: CG, bold: true },
];

const S2_Events = [
    { text: 'Notion : Nombres Premiers', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },
    { text: "Nous avons vu que certains nombres ont beaucoup de diviseurs.", y: 0.25, sz: 0.035, color: CW },
    { text: "Mais regarde le nombre 5 par exemple.", y: 0.30, sz: 0.035, color: CW },

    { 
        type: 'question',
        text: "Peux-tu diviser 5 en plusieurs groupes égaux (plus grands que 1) ?",
        options: [
            { text: "Oui, on peut faire des groupes.", isCorrect: false },
            { text: "Non, c'est impossible !", isCorrect: true }
        ],
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 5, 
        groupSize: 2, 
        duration: 600,
        yTop: 0.50, yBottom: 0.70, x0: 0.35
    },
    { 
        type: 'question',
        isVerification: true,
        text: "En effet, il reste toujours 1 trait seul. Combien de diviseurs possède alors le nombre 5 ?",
        options: [
            { text: "Seulement 2 (1 et 5)", isCorrect: true },
            { text: "Il en a 3", isCorrect: false },
            { text: "Aucun", isCorrect: false }
        ],
        retryStart: 10
    },
    { type: 'clear', target: 'traits_groupes' },
    { text: "Un nombre qui n'a que deux diviseurs (1 et lui-même) est un NOMBRE PREMIER.", y: 0.80, sz: 0.04, color: CG, bold: true },
    { 
        type: 'question',
        text: "Est-ce que le nombre 9 est un nombre premier d'après toi ?",
        options: [
            { text: "Oui, il est premier.", isCorrect: false },
            { text: "Non, car 3 x 3 = 9 !", isCorrect: true }
        ],
    },
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 9, 
        groupSize: 3, 
        duration: 600,
        yTop: 0.45, yBottom: 0.60, x0: 0.35
    },
    { text: "9 n'est pas premier car il est divisible par 1, 3 et 9.", y: 0.90, sz: 0.035, color: CB },
];

const S3_Events = [
    { text: 'Notion : Décomposition en facteurs premiers', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },
    { text: "Tout nombre peut s'écrire comme un produit de nombres premiers.", y: 0.25, sz: 0.035, color: CW },
    { text: "Essayons avec 54.", x: 0.1, y: 0.4, sz: 0.05, color: CY },
    { type: 'line', x1: 0.22, y1: 0.35, x2: 0.22, y2: 0.85, color: CW },

    { 
        type: 'question',
        text: "Par quel plus petit nombre premier peut-on diviser 54 ?",
        options: [
            { text: "Par 2", isCorrect: true },
            { text: "Par 3", isCorrect: false },
            { text: "Par 5", isCorrect: false }
        ],
    },
    { text: "2", x: 0.25, y: 0.4, sz: 0.045, color: CG },
    { text: "27", x: 0.1, y: 0.5, sz: 0.045, color: CW },
    
    { 
        type: 'question',
        text: "Et 27 ? Il n'est plus divisible par 2. Quel est le suivant ?",
        options: [
            { text: "On divise par 3", isCorrect: true },
            { text: "On divise par 5", isCorrect: false }
        ],
    },
    { text: "3", x: 0.25, y: 0.5, sz: 0.045, color: CG },
    { text: "9", x: 0.1, y: 0.6, sz: 0.045, color: CW },
    { text: "3", x: 0.25, y: 0.6, sz: 0.045, color: CG },
    { text: "3", x: 0.1, y: 0.7, sz: 0.045, color: CW },
    { text: "3", x: 0.25, y: 0.7, sz: 0.045, color: CG },
    { text: "1", x: 0.1, y: 0.8, sz: 0.045, color: CW },

    { text: "54 = 2 × 3 × 3 × 3 = 2 × 3³", x: 0.4, y: 0.6, sz: 0.05, color: CG, bold: true },
    { 
        type: 'question',
        isVerification: true,
        text: "Cette écriture unique s'appelle le Théorème...",
        options: [
            { text: "...Fondamental", isCorrect: true },
            { text: "...de Pythagore", isCorrect: false }
        ],
        retryStart: 10
    },
];

const S4_Events = [
    { text: 'Notion : Angles au centre d\'un cercle',isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0, isTitle: true },

    // --- GAUCHE : Le cercle ---
    { type: "text", text: "Question : ", x: 0.05, y: 0.25, sz: 0.035, start: 60, color: '#f5e441' },
    { type: "text", text: "Quel est le centre de ce cercle ?", x: 0.15, y: 0.25, sz: 0.035, start: 120, color: CW },
    { type: 'cercle', x: 0.25, y: 0.55, r: 0.18, color: CB, start: 200, duration: 300 },

    { 
        type: 'question', 
        text: "As-tu une idée ?", 
        options: [
            { text: "Oui, c'est O", isCorrect: true },
            { text: "Non", isCorrect: false },
        ]
    },
    { type: "text", text: "Le centre de ce cercle est : O", x: 0.05, y: 0.82, sz: 0.035, color: '#ffffff', pause: 400 },

    // --- Séparation ---
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 40 },

    // --- DROITE : L'angle ---
    { type: "text", text: "Question : ", x: 0.52, y: 0.25, sz: 0.035, color: '#f5e441' },
    { type: "text", text: "Quel est le sommet de cet angle ?", x: 0.63, y: 0.25, sz: 0.035, color: CW },
    { type: 'angle', x: 0.70, y: 0.55, r: 0.18, angle: 45, vertex: 'C', labelLeft: 'A', labelRight: 'B', duration: 180 },
    

    { 
        type: 'question', 
        text: "As-tu une idée ?", 
        options: [
            { text: "Oui, c'est A", isCorrect: false },
            { text: "Oui, c'est B", isCorrect: false },
            { text: "Oui, c'est C", isCorrect: true }
        ]
    },
    { type: "text", text: "Le sommet de cet angle est : C", x: 0.60, y: 0.65, sz: 0.035, color: 'CW', pause: 400 },
    // L'angle entre dans le cercle
    { type: 'insert_angle', xStart: 0.75, xEnd: 0.25, y: 0.55, r: 0.18, angle: 45, vertex: 'O', labelLeft: 'A', labelRight: 'B', color: '#ff4444', duration: 150 },
    {type:'SEP'},

    {type:'move_cercle', xStart: 0.25, xEnd: 0.55, y: 0.55, r: 0.18, color: CB, duration: 150 },
    
    { 
        type: 'question', 
        text: "Hum ? Qu'est devenu le sommet de cet angle qu'on a déplacé ?", 
        options: [
            { text: " C'est toujours C", isCorrect: false },
            { text: "C'est devenu le point O qui est le centre du cercle", isCorrect: true },
            { text: "Je ne sais pas trop", isCorrect: false }
        ]
    },
    { type: "text", text: "C'est devenu le point O qui est le centre du cercle", x: 0.10, y: 0.75, sz: 0.035, color: '#ffffff', pause: 400 },
    { type: "text", text: "Autrement dit, il est devenu un angle au centre d'un cercle. On le note désormais : AÔB", x: 0.10, y: 0.80, sz: 0.035, color: '#ffffff', pause: 400 },
    { type: "text", text: "Définition : ", x: 0.10, y: 0.85, sz: 0.035, color: '#f5e441', pause: 400 },
    { type: "text", text: "Un angle est dit angle au centre d'un cercle lorsque son sommet est le centre du cercle.", x: 0.21, y: 0.85, sz: 0.035, color: '#ffffff', pause: 400 },
    { type: "text", text: "EXERCICE ", x: 0.50, y: 0.20, sz: 0.035,bold: true, color: '#f5e441', pause: 400 },
    {type : 'SEP'},
    { type: 'cercle_angle', x: 0.25, y: 0.55, r: 0.18, color: CB, duration: 300 },
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 40 },
    { type: "text", text: "Un arc est une portion d'un cercle.", x: 0.63, y: 0.25, sz: 0.035, color: ' CW', pause: 400 },
    
    // 1. L'arc apparaît à droite
    { type: 'arc', x: 0.75, y: 0.55, r: 0.18, startAngle: -0.785, endAngle: 0, labelStart: 'A', labelEnd: 'B',color: '#f5e441', lineWidth: 6, duration: 80, pause: 100 },
    { type: "text", text: "Voici l'arc A͡B.", x: 0.75, y: 0.65, sz: 0.035, color: 'CW', pause: 400 },
    // 2. L'arc se déplace vers le cercle
    //{ type: 'arc', x: 0.75, y: 0.55, r: 0.18, startAngle: -0.785, endAngle: 0,labelStart: 'A', labelEnd: 'B', color: '#f5e441', lineWidth: 6, duration: 80,pause: 100 },
    { type: 'insert_arc', xStart: 0.75, y: 0.55, targetX: 0.25, targetY: 0.55, r: 0.18, startAngle: -0.785, endAngle: 0, color: '#f5e441', lineWidth: 6, duration: 150, pause: 400 },
    { type: 'clear', target: 'text' },
    { type: 'clear', target: 'arc' },
    { type: 'clear', target: 'line' },
    { type: "text", text: "L'arc A͡B est donc la portion du cercle qui couvre l'angle AÔB.", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    { type: "text", text: "On dit que l'arc A͡B intercepte l'angle AÔB.", x: 0.05, y: 0.85, sz: 0.035, color: 'CW', pause: 400 },
    {type:'angle', x: 0.25, y: 0.55, r: 0.18, angle: 65, vertex: 'O', labelLeft: 'C', labelRight: 'B', color: '#f5e441', duration: 150 },
    {type:'clear', target: 'text'},
    { type: "text", text: "Quel est l'arc qui intercepte l'angle CÔB ?", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    { 
        type: 'question', 
        text: "As-tu une idée ?", 
        options: [
            { text: "Oui, c'est l'arc A͡B", isCorrect: false },
            { text: "Oui, c'est l'arc B͡C", isCorrect: true },
            { text: "Oui, c'est l'arc C͡A", isCorrect: false },
            { text: "Non", isCorrect: false },
        ]
    },
    {type:'clear', target: 'text'},
    { type: "text", text: "Nous avons deux types d'arc :", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    {type:'clear', target: 'text'},
    { type: "text", text: "Les petits arcs et les grands arcs.", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    {type:'clear', target: 'text'},
    { type: "text", text: "Les arcs A͡B et B͡C sont des petits arcs.", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    {type:'clear', target: 'text'},
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 40 },
    { type: "text", text: "Voici le grand arc AB : ", x: 0.55, y: 0.30, sz: 0.035, color: 'CW', pause: 400 },
    { type: 'arc', x: 0.75, y: 0.55, r: 0.18, startAngle: 0, endAngle: -0.785, anticlockwise: false, labelStart: 'B', labelEnd: 'A', color: '#f5e441', lineWidth: 6, duration: 80, pause: 100 },
    { type: "text", text: "On le note : ~AB", x: 0.55, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    { type: 'insert_arc', xStart: 0.75, y: 0.55, targetX: 0.25, targetY: 0.55, r: 0.18, startAngle: 0, endAngle: -0.785, anticlockwise: false, color: '#ee1717', lineWidth: 6, duration: 150, pause: 400 },
    { type: "text", text: "L'arc A͡B intercepte l'angle AÔB: ", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    { type: "text", text: "L'arc ~AB intercepte l'angle ~AOB: ", x: 0.05, y: 0.85, sz: 0.035, color: 'CW', pause: 400 },
    {type:'SEP'},
    { type: 'arc_angle_growth', x: 0.50, y: 0.50, r: 0.25, maxAngle: 100, color: '#f5e441', lineWidth: 6, duration: 600 },
    { 
        type: 'question', 
        text: "Waouh..! C'est incroyable. L'arc devient plus grand au fur et à mesure que l'angle augmente. As-tu remarqué ?", 
        options: [
            { text: "Oui", isCorrect: true },
            { text: "Pas vraiment", isCorrect: false },
            { text: "Non", isCorrect: false },
        ]
    },
    { type: 'clear', target: 'arc_angle_growth' },
    { type: 'arc_angle_growth', x: 0.50, y: 0.50, r: 0.25, maxAngle: 180, color: '#f5e441', lineWidth: 6, duration: 600 },
    { type: "text", text: "Le fait que plus l’angle au centre est grand, plus l’arc correspondant est long, ", x: 0.05, y: 0.75, sz: 0.035, color: 'CW', pause: 400 },
    {type:'text', text: "veut dire que la longueur d’un arc de cercle est proportionnelle à la mesure de l’angle au centre qui l’intercepte. ", x: 0.05, y: 0.80, sz: 0.035, color: 'CW', pause: 400 },
    {type:'text', text: "Autrement dit, si on double l’angle, on double aussi la longueur de l’arc.", x: 0.05, y: 0.85, sz: 0.035, color: 'CW', pause: 400 },
    {type:'SEP'},
    {type:'cercle', x: 0.25, y: 0.50, r: 0.25, color: CB, duration: 300 },
    // Premier angle : de 0° à 60°
    { type: 'arc_angle_growth', x: 0.25, y: 0.50, r: 0.25, maxAngle: 60, startAngle: 0, labelFixed: 'B', labelMoving: 'A', labelArc: '⌢AB', maxLength: 5.2, color: '#f5e441', duration: 400 },

    // Deuxième angle : de 180° à 240° (éloigné du premier)
    { type: 'arc_angle_growth', x: 0.25, y: 0.50, r: 0.25, maxAngle: 60, startAngle: 3.14, labelFixed: 'D', labelMoving: 'C', labelArc: '⌢CD', maxLength: 5.2, color: '#ec0a0a', duration: 400 },
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 40 },
    {type:'cercle', x: 0.65, y: 0.50, r: 0.25, color: CB, duration: 300 },
    // Premier angle : de 0° à 60°
    { type: 'arc_angle_growth', x: 0.65, y: 0.50, r: 0.25, maxAngle: 60, startAngle: 0, labelFixed: 'B', labelMoving: 'A', labelArc: '⌢AB', maxLength: 5.2, color: '#f5e441', duration: 400 },

    // Deuxième angle : de 180° à 240° (éloigné du premier)
    { type: 'arc_angle_growth', x: 0.65, y: 0.50, r: 0.25, maxAngle: 60, startAngle: 3.14, labelFixed: 'D', labelMoving: 'C', labelArc: '⌢CD', maxLength: 5.2, color: '#ec0a0a', duration: 400 },

    {type:'text', text: "Question : ", x: 0.40, y: 0.95, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'text', text: "Qu'as-tu remarqué ?", x: 0.50, y: 0.95, sz: 0.035, color: '#ffffff', pause: 400 },
    {type:'question',
        text: "As-tu une idée de ce qu'ils veulent qu'on remarque ?",
        options: [
            { text: "Oui, mes(AÔB)=mes(CÔD)=60°", isCorrect: false },
            { text: "Oui, c'est pour dire que lorsque mes(AÔB)=mes(CÔD) alors L(A͡B)=L(C͡D)", isCorrect: true },
            { text: "Non", isCorrect: false },
        ]
    }


];

export const notions = {
    'S0': {
        id: 'S0',
        title: 'Bienvenue',
        events: S0_Events,
        nextNotionId: 'S00'
    },
    'S00': {
        id: 'S00',
        title: 'Introduction Camélia',
        events: S00_Events,
        nextNotionId: 'S1'
    },
    'S1': {
        id: 'S1',
        title: 'Les diviseurs',
        events: S1_Events,
        nextNotionId: 'S2'
    },
    'S2': {
        id: 'S2',
        title: 'Nombres Premiers',
        events: S2_Events,
        nextNotionId: 'S3'
    },
    'S3': {
        id: 'S3',
        title: 'Décomposition',
        events: S3_Events,
        nextNotionId: 'S4'
    },
    'S4': {
        id: 'S4',
        title: 'Le Cercle',
        events: S4_Events,
        nextNotionId: 'S1'
    }
};

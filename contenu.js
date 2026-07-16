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
    { text: 'Notion : Les diviseurs d’un nombre', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true, compteur: 15 },
    { text: "Imagine que vous êtes 12 dans ta classe , le professeur te demande alors de vous diviser en groupes de 3.", y: 0.25, sz: 0.035, color: CW },
    { text:"Combien de groupes de 3 pourra-t-on former ?", y: 0.30, sz: 0.035, color: CW },

    {
        type: 'question',
        freeAnswer: true,
        text: "As-tu une idée ?",
        expectedAnswer: "On divise 12 par 3 pour obtenir 4"
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
   
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '3', result: '4', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 12 },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},

    {
        type: 'question',
        isVerification: true,
        text: "C'est maintenant claire, on fera 4 groupe de 3 ! c'est bien ça non?",
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
    { text: 'Notion : Nombres Premiers', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true,compteur: 15 },
    { text: "Preno nons les nombres suivants : 1, 2,", y: 0.25, sz: 0.035, color: CW },
    { text: "Mais regarde le nombre 5 par exemple.", y: 0.30, sz: 0.035, color: CW },
    
    {
    type: 'question',
    text: "Quelle est la formule de l'aire d'un disque de rayon r ?",
    freeAnswer: true,
    expectedAnswer: "Pi fois r au carré",
    // Texte libre dans la boîte de dialogue de Camélia
    },
    { 
        type: 'question',
        text: "Peux-tu diviser 5 en plusieurs groupes égaux (plus grands que 1) ?",
        options: [
            { text: "Oui, on peut faire des groupes.", isCorrect: false },
            { text: "Oui, 2 groupes", isCorrect: true }
        ],
        addOther: true,
        expectedAnswer: "Non, c'est impossible !"
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
    { text: 'Notion : Angles au centre d\'un cercle',isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0 },

    // --- GAUCHE : Le cercle ---
    { type: "text", text: "Question : ", x: 0.05, y: 0.25, sz: 0.035, start: 60, color: '#f5e441' },
    { type: "text", text: "Quel est le centre de ce cercle ?", x: 0.15, y: 0.25, sz: 0.035, start: 120, color: CW },
    { type: 'cercle', x: 0.25, y: 0.55, r: 0.18, color: CB, start: 200, duration: 300 },

    {
        type: 'question',
        freeAnswer: true,
        text: "As-tu une idée ?",
        expectedAnswer: "O",
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
    { type: "text", text: "Le sommet de cet angle est : C", x: 0.60, y: 0.65, sz: 0.035, color: CW, pause: 400 },
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
    { type: "text", text: "Un arc est une portion d'un cercle.", x: 0.63, y: 0.25, sz: 0.035, color: CW, pause: 400 },
    
    // 1. L'arc apparaît à droite
    { type: 'arc', x: 0.75, y: 0.55, r: 0.18, startAngle: -0.785, endAngle: 0, labelStart: 'A', labelEnd: 'B',color: '#f5e441', lineWidth: 6, duration: 80, pause: 100 },
    { type: "text", text: "Voici l'arc A͡B.", x: 0.75, y: 0.65, sz: 0.035, color: CW, pause: 400 },
    // 2. L'arc se déplace vers le cercle
    //{ type: 'arc', x: 0.75, y: 0.55, r: 0.18, startAngle: -0.785, endAngle: 0,labelStart: 'A', labelEnd: 'B', color: '#f5e441', lineWidth: 6, duration: 80,pause: 100 },
    { type: 'insert_arc', xStart: 0.75, y: 0.55, targetX: 0.25, targetY: 0.55, r: 0.18, startAngle: -0.785, endAngle: 0, color: '#f5e441', lineWidth: 6, duration: 150, pause: 400 },
    { type: 'clear', target: 'text' },
    { type: 'clear', target: 'arc' },
    { type: 'clear', target: 'line' },
    { type: "text", text: "L'arc A͡B est donc la portion du cercle qui couvre l'angle AÔB.", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    { type: "text", text: "On dit que l'arc A͡B intercepte l'angle AÔB.", x: 0.05, y: 0.85, sz: 0.035, color: CW, pause: 400 },
    {type:'angle', x: 0.25, y: 0.55, r: 0.18, angle: 65, vertex: 'O', labelLeft: 'C', labelRight: 'B', color: '#f5e441', duration: 150 },
    {type:'clear', target: 'text'},
    { type: "text", text: "Quel est l'arc qui intercepte l'angle CÔB ?", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
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
    { type: "text", text: "Nous avons deux types d'arc :", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    {type:'clear', target: 'text'},
    { type: "text", text: "Les petits arcs et les grands arcs.", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    {type:'clear', target: 'text'},
    { type: "text", text: "Les arcs A͡B et B͡C sont des petits arcs.", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    {type:'clear', target: 'text'},
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 40 },
    { type: "text", text: "Voici le grand arc AB : ", x: 0.55, y: 0.30, sz: 0.035, color: CW, pause: 400 },
    { type: 'arc', x: 0.75, y: 0.55, r: 0.18, startAngle: 0, endAngle: -0.785, anticlockwise: false, labelStart: 'B', labelEnd: 'A', color: '#f5e441', lineWidth: 6, duration: 80, pause: 100 },
    { type: "text", text: "On le note : ~AB", x: 0.55, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    { type: 'insert_arc', xStart: 0.75, y: 0.55, targetX: 0.25, targetY: 0.55, r: 0.18, startAngle: 0, endAngle: -0.785, anticlockwise: false, color: '#ee1717', lineWidth: 6, duration: 150, pause: 400 },
    { type: "text", text: "L'arc A͡B intercepte l'angle AÔB: ", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    { type: "text", text: "L'arc ~AB intercepte l'angle ~AOB: ", x: 0.05, y: 0.85, sz: 0.035, color: CW, pause: 400 },
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
    { type: "text", text: "Le fait que plus l’angle au centre est grand, plus l’arc correspondant est long, ", x: 0.05, y: 0.75, sz: 0.035, color: CW, pause: 400 },
    {type:'text', text: "veut dire que la longueur d’un arc de cercle est proportionnelle à la mesure de l’angle au centre qui l’intercepte. ", x: 0.05, y: 0.80, sz: 0.035, color: CW, pause: 400 },
    {type:'text', text: "Autrement dit, si on double l’angle, on double aussi la longueur de l’arc.", x: 0.05, y: 0.85, sz: 0.035, color: CW, pause: 400 },
    {type:'SEP'},
    {type:'cercle', x: 0.17, y: 0.50, r: 0.25, color: CB, duration: 300 },
    // Premier angle : de 0° à 60°
    { type: 'arc_angle_growth', x: 0.17, y: 0.50, r: 0.25, maxAngle: 60, startAngle: 0, labelFixed: 'B', labelMoving: 'A', labelArc: 'A͡B', maxLength: 5.2, color: '#f5e441', duration: 400 },

    // Deuxième angle : de 180° à 240° (éloigné du premier)
    { type: 'arc_angle_growth', x: 0.17, y: 0.50, r: 0.25, maxAngle: 60, startAngle: 3.14, labelFixed: 'D', labelMoving: 'C', labelArc: 'C͡D', maxLength: 5.2, color: '#ec0a0a', duration: 400 },
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 40 },
    {type:'cercle', x: 0.72, y: 0.50, r: 0.25, color: CB, duration: 300 },
    // Premier angle : de 0° à 60°
    { type: 'arc_angle_growth', x: 0.72, y: 0.50, r: 0.25, maxAngle: 110, startAngle: 0, labelFixed: 'B', labelMoving: 'A', labelArc: 'A͡B', maxLength: 5.2, color: '#f5e441', duration: 400 },

    // Deuxième angle : de 180° à 240° (éloigné du premier)
    { type: 'arc_angle_growth', x: 0.72, y: 0.50, r: 0.25, maxAngle: 110, startAngle: 3.14, labelFixed: 'D', labelMoving: 'C', labelArc: 'C͡D', maxLength: 5.2, color: '#ec0a0a', duration: 400 },

    {type:'text', text: "Question : ", x: 0.40, y: 0.95, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'text', text: "Qu'as-tu remarqué ?", x: 0.50, y: 0.95, sz: 0.035, color: '#ffffff', pause: 400 },
    {type:'question',
        text: "As-tu une idée de ce qu'ils veulent qu'on remarque ?",
        options: [
            { text: "Oui, mes(AÔB)=mes(CÔD)=60°", isCorrect: false },
            { text: "Oui, c'est pour dire que lorsque mes(AÔB)=mes(CÔD) alors L(A͡B)=L(C͡D)", isCorrect: true },
            { text: "Non", isCorrect: false },
        ]
    },
    {type:'SEP'},
    {type:'text', text: "En résumé (à retenir) : ", x: 0.05, y: 0.25, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'text', text: "Dans un cercle, si deux angles au centre ont la même mesure, ", x: 0.05, y: 0.30, sz: 0.035, color: '#ffffff', pause: 400 },
    {type:'text', text: "alors ils interceptent deux arcs de même longueur.", x: 0.05, y: 0.35, sz: 0.035, color: '#ffffff', pause: 400 },
    {type:'text', text: "Dans un cercle si deux arcs ont la même longueur  ", x: 0.05, y: 0.40, sz: 0.035, color: '#ffffff', pause: 400 },
    {type:'text', text: "alors ils interceptent deux angles au centre de même mesure.", x: 0.05, y: 0.45, sz: 0.035, color: '#ffffff', pause: 400 },
  ];
    const S5_Events = [
    { text: 'Notion : La corde d\'un cercle', isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0},
    { type: 'text', text: 'Voici un segment : ', x: 0.05, y: 0.27, sz: 0.038, color: CW, start: 120 },
    { type: 'point', x: 0.15, y: 0.50, label: 'A', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.40, y: 0.50, label: 'B', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.15, y1: 0.50, x2: 0.40, y2: 0.50, color: '#ffffff', duration: 60 },
    { type: 'text', text: 'On le note : [AB]', x: 0.05, y: 0.65, sz: 0.038, color: CW},
    { type: 'line', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.90, color: '#ffffff', duration: 60 },
    { type: 'cercle', x: 0.65, y: 0.52, r: 0.20, color: CB, duration: 300 },

    { type: 'point', x: 0.7625, y: 0.52,   label: 'A', labelPos: 'right',  color: '#f5e441', duration: 60 },
    { type: 'point', x: 0.5938, y: 0.3468, label: 'B', labelPos: 'top',    color: '#f5e441', duration: 60 },
    { type: 'point', x: 0.5938, y: 0.6932, label: 'C', labelPos: 'bottom', color: '#f5e441', duration: 60 },    
    { type: 'text', text: 'Combien de segment peut-on construire ', x: 0.52, y: 0.80, sz: 0.038, color:CW},
    { type: 'text', text: 'avec ces 3 points qui sont sur le cercle?', x: 0.52, y: 0.85, sz: 0.038, color: CW},
    { type: 'question',
      text: 'As-tu une idée du nombre de segments possible ?',
      addOther: true, // Active l'option "Autre" qui ouvre le cahier
      expectedAnswer: "Il y a 3 segments", // Utilisé si l'élève écrit via le cahier
      options: [
          { text: '4 segments', isCorrect: false },
          { text: '3 segments', isCorrect: true },
          { text: 'Non', isCorrect: false },
      ]
    },

    // Trois cordes
    { type: 'line', x1: 0.7625, y1: 0.52, x2: 0.5938, y2: 0.3468, color: '#f5e441', duration: 80 },
    { type: 'line', x1: 0.5938, y1: 0.3468, x2: 0.5938, y2: 0.6932, color: '#ff4444', duration: 80 },
    { type: 'line', x1: 0.5938, y1: 0.6932, x2: 0.7625, y2: 0.52, color: '#7af0a0', duration: 80 },
    {type:'SEP'},
    { type: 'text', text: 'Réponse  : ', x: 0.05, y: 0.50, sz: 0.038, color: '#f5e441'},
    { type: 'text', text: 'Il y a 3 segments si on ne compte pas le diametre du cercle.', x: 0.15, y: 0.50, sz: 0.038, color: '#ffffff'},
    { type: 'text', text: 'Ce type de segment qui relie deux points sur un cercle, on les appelle : ', x: 0.05, y: 0.55, sz: 0.038, color: CW, pause: 400 },
    { type: 'text', text: 'une corde ', x: 0.50, y: 0.55, sz: 0.038, color: CW, pause: 400 },
    { type: 'text', text: 'Le diametre est la plus grande corde d\'un cercle ', x: 0.05, y: 0.55, sz: 0.038, color: '#f5e441', pause: 400 },
    { type: 'SEP'},
    { type: 'text', text: 'Quelles sont les cordes de ce cercle ?', x: 0.05, y: 0.20, sz: 0.038, color: CW},
    // Cercle à gauche
    { type: 'cercle', x: 0.25, y: 0.52, r: 0.20, color: CB, duration: 300 },

    // Points sur le cercle
    { type: 'point', x: 0.3625, y: 0.52, label: 'E', labelPos: 'right', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.2885, y: 0.3321, label: 'F', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.1871, y: 0.3542, label: 'C', labelPos: 'left', color: '#ffffff', duration: 60 },

    // Corde [EF] - angle 70°
    { type: 'line', x1: 0.3625, y1: 0.52, x2: 0.2885, y2: 0.3321, color: '#f5e441', duration: 80 },

    // Corde [FC] - angle 54°
    { type: 'line', x1: 0.2885, y1: 0.3321, x2: 0.1871, y2: 0.3542, color: '#ff4444', duration: 80 },

    // Corde [EC] - angle 124° (70° + 54°)
    { type: 'line', x1: 0.3625, y1: 0.52, x2: 0.1871, y2: 0.3542, color: '#7af0a0', duration: 80 },    
    { type: 'question',
        text: 'Tu les vois ?',
       addOther: true, // Active l'option "Autre" qui ouvre le cahier
       expectedAnswer: "[EF], [FC], [EC]",
      options: [
          { text: '[EO], [FO], [EC]', isCorrect: false },
          { text: 'Non', isCorrect: false },
      ]
    },
    { type: 'line', x1: 0.42, y1: 0.15, x2: 0.42, y2: 0.90, color: '#ffffff', duration: 60 },
    { type: 'text', text: 'On remarque que chacune des cordes sont ', x: 0.45, y: 0.30, sz: 0.038, color: '#ffffff'},
    { type: 'text', text: 'en dessous d\'un arc', x: 0.45, y: 0.35, sz: 0.038, color: '#ffffff'},
    { type: 'text', text: '1. On dit plutôt qu\'une corde sous-tend un arc', x: 0.45, y: 0.40, sz: 0.038, color: '#f5e441'},
    { type: 'text', text: 'Ex : La corde [EF] sous-tend l\'arc E͡F .', x: 0.45, y: 0.45, sz: 0.038, color: CW},
    { type:'text', text: 'Ou encore, l\'arc E͡F est sous-tendu par la corde [EF] ', x: 0.45, y: 0.50, sz: 0.038, color: CW},
    {type:'clear', target: 'point'},
    { type: 'angle', x: 0.25, y: 0.52, r: 0.20, angle: 54, labelLeft: 'E', labelRight: 'F', startAngle: 70, color: '#ff4444', duration: 180 },
    { type: 'point', x: 0.2115, y: 0.7079, color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.3129, y: 0.6858, color: '#ffffff', duration: 60 },
    { type: 'angle', x: 0.25, y: 0.52, r: 0.20, angle: 54, labelLeft: 'D', labelRight: 'G', startAngle: 250, vertex: 'O', color: '#ff4444', duration: 180 },
    { type: 'line', x1: 0.2115, y1: 0.7079, x2: 0.3129, y2: 0.6858, color: '#ff4444', duration: 80 },
        // Deux petits traits sur la corde [FC] (taille doublée)
    { type: 'line', x1: 0.2312, y1: 0.3432, x2: 0.2444, y2: 0.3432, color: '#f5e5e5', duration: 40 },
    { type: 'line', x1: 0.2312, y1: 0.3482, x2: 0.2444, y2: 0.3482, color: '#f5e5e5', duration: 40 },

    // Deux petits traits sur la corde [GD] (taille doublée)
    { type: 'line', x1: 0.2556, y1: 0.6969, x2: 0.2688, y2: 0.6969, color: '#f5e5e5', duration: 40 },
    { type: 'line', x1: 0.2556, y1: 0.6919, x2: 0.2688, y2: 0.6919, color: '#f5e5e5', duration: 40 },
    // Un petit trait sur l'arc FC (taille doublée)
    { type: 'line', x1: 0.226, y1: 0.329, x2: 0.246, y2: 0.314, color: '#f5e441', duration: 40 },

    // Un petit trait sur l'arc GD (taille doublée)
    { type: 'line', x1: 0.254, y1: 0.711, x2: 0.274, y2: 0.726, color: '#f5e441', duration: 40 },    {type:'clear', target: 'text'},
    { type: 'text', text: 'En résumé (à retenir) : ', x: 0.45, y: 0.25, sz: 0.035, color: '#f5e441', pause: 400 },
    { type: 'text', text: '1. Dans un cercle, si deux arcs ont la même longueur,', x: 0.45, y: 0.30, sz: 0.038, color: '#ffffff'},
    { type: 'text', text: 'alors les deux cordes qui les sous-tendent ont la même longueur.', x: 0.45, y: 0.35, sz: 0.038, color: '#ffffff'},
    {type: 'text', text: '2. Dans un cercle, si deux cordes ont la même longueur,', x: 0.45, y: 0.40, sz: 0.038, color: '#ffffff'},
    {type: 'text', text: 'alors les deux arcs qu’elles sous-tendent ont la même longueur.', x: 0.45, y: 0.45, sz: 0.038, color: '#ffffff'},
    ];

    const S6_Events = [
    { text: 'Notion : Distance d\'un point à une droite', isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0 },
    
    // La droite (D)
    { type: 'point', x: 0.05, y: 0.70, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.55, y: 0.70, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.05, y1: 0.70, x2: 0.55, y2: 0.70, color: '#8dd0f0', duration: 80 },
    { type: 'text', text: '(D)', x: 0.57, y: 0.70, sz: 0.04, color: '#8dd0f0' },

    // Le point A
    { type: 'point', x: 0.30, y: 0.30, label: 'A', labelPos: 'top', color: '#ffffff', duration: 60 },

    // Les points d'intersection sur (D)
    { type: 'point', x: 0.30, y: 0.70, label: 'H', labelPos: 'bottom', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.15, y: 0.70, label: 'B', labelPos: 'bottom', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.45, y: 0.70, label: 'C', labelPos: 'bottom', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.05, y: 0.70, label: 'D', labelPos: 'bottom', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.55, y: 0.70, label: 'E', labelPos: 'bottom', color: '#ffffff', duration: 60 },

    // Segment 1 : [AH] perpendiculaire
    { type: 'line', x1: 0.30, y1: 0.30, x2: 0.30, y2: 0.70, color: '#7af0a0', duration: 80 },

    // Segment 2 : [AB] à gauche de H
    { type: 'line', x1: 0.30, y1: 0.30, x2: 0.15, y2: 0.70, color: '#ffffff', duration: 80 },

    // Segment 3 : [AC] à droite de H
    { type: 'line', x1: 0.30, y1: 0.30, x2: 0.45, y2: 0.70, color: '#ffffff', duration: 80 },

    // Segment 4 : [AD] extrémité gauche
    { type: 'line', x1: 0.30, y1: 0.30, x2: 0.05, y2: 0.70, color: '#ffffff', duration: 80 },

    // Segment 5 : [AE] extrémité droite
    { type: 'line', x1: 0.30, y1: 0.30, x2: 0.55, y2: 0.70, color: '#ffffff', duration: 80 },
    { type: 'text', text: 'Il y a 5 chemins pour aller de A à la droite (D). Lequel est le plus court ?', x: 0.05, y: 0.20, sz: 0.04, color: CW },

    // Question
    { 
        type: 'question', 
        text: "[AC]?", 
        options: [
            { text: "Non, [AH]", isCorrect: true },
            { text: "Non,[AB]", isCorrect: false },
            { text: "Non, [AD]", isCorrect: false },
            { text: "Non,[AE]", isCorrect: false },
            { text: "Oui, [AC]", isCorrect: false }
        ]
    },
    {type : 'text', text: "Si on prend une règle pour mésurer, on voit que c'est : [AH].", x: 0.05, y: 0.85, sz: 0.035, color: '#ffffff', pause: 400 },
    {type: 'clear', target: 'text'},
    {type : 'text', text: "Quand on demande de calculer la distance d'un point à une droite,", x: 0.05, y: 0.85, sz: 0.035, color: '#f5e441', pause: 400 },
    {type : 'text', text: "c'est la distance la plus courte qui est la bonne réponse.", x: 0.05, y: 0.90, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'clear', target: 'text'},
    {type : 'text', text: "Et plus facilement,", x: 0.05, y: 0.85, sz: 0.035, color: '#f5e441', pause: 400 },
    {type : 'text', text: "c'est la distance dont le support est perpendiculaire à cette droite.", x: 0.05, y: 0.90, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'clear', target: 'line'},
    // La droite (D)
    { type: 'point', x: 0.05, y: 0.70, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.55, y: 0.70, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.05, y1: 0.70, x2: 0.55, y2: 0.70, color: '#8dd0f0', duration: 80 },
    { type: 'text', text: '(D)', x: 0.57, y: 0.70, sz: 0.04, color: '#8dd0f0' },
    // Le point A
    { type: 'point', x: 0.30, y: 0.30, label: 'A', labelPos: 'top', color: '#ffffff', duration: 60 },

    // Le point H
    { type: 'point', x: 0.30, y: 0.70, label: 'H', labelPos: 'bottom', color: '#ffffff', duration: 60 },

    // Segment [AH] perpendiculaire
    { type: 'line', x1: 0.30, y1: 0.30, x2: 0.30, y2: 0.70, color: '#7af0a0', duration: 80 },
    // Signe de perpendicularité en H (petit carré)
    { type: 'line', x1: 0.30, y1: 0.67, x2: 0.33, y2: 0.67, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.33, y1: 0.67, x2: 0.33, y2: 0.70, color: '#ff4444', duration: 40 },
    {type: 'clear', target: 'text'},
    {type: 'text', text: 'On note :  d(H,(D))= AH et on lit : la distance de A par rapport à (D) est AH ', x: 0.05, y: 0.85, sz: 0.035, color: '#f5e441', pause: 400 },
    {type: 'clear', target: 'text'},
    {type:'text', text: 'Si d désigne la distance d’un point A à une droite (D), alors pour tout point M de (D) on a :  d = AM ou d < AM. ', x: 0.05, y: 0.90, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'clear', target: 'text'},
    {type:'text', text: ' Si le point A appartient à (D), alors sa distance à la droite (D) est égale à zéro. ', x: 0.05, y: 0.85, sz: 0.035, color: '#f5e441', pause: 400 },
    ];

    const S7_Events = [
    { text: 'Notion : Distance entre deux droites parallèles', isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0 },
    
    // Droite (D1) en haut
    { type: 'point', x: 0.10, y: 0.35, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.60, y: 0.35, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.10, y1: 0.35, x2: 0.60, y2: 0.35, color: '#8dd0f0', duration: 80 },
    { type: 'text', text: '(D1)', x: 0.62, y: 0.35, sz: 0.04, color: '#8dd0f0' },

    // Droite (D2) en bas
    { type: 'point', x: 0.10, y: 0.65, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.60, y: 0.65, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.10, y1: 0.65, x2: 0.60, y2: 0.65, color: '#8dd0f0', duration: 80 },
    { type: 'text', text: '(D2)', x: 0.62, y: 0.65, sz: 0.04, color: '#8dd0f0' },

    // Point A sur (D1)
    { type: 'point', x: 0.30, y: 0.35, label: 'A', labelPos: 'top', color: '#ffffff', duration: 60 },

    // Point H sur (D2) - pied de la perpendiculaire
    { type: 'point', x: 0.30, y: 0.65, label: 'H', labelPos: 'bottom', color: '#ffffff', duration: 60 },

    // Segment [AH] perpendiculaire
    { type: 'line', x1: 0.30, y1: 0.35, x2: 0.30, y2: 0.65, color: '#7af0a0', duration: 80 },

    // Signe de perpendicularité en A
    { type: 'line', x1: 0.30, y1: 0.38, x2: 0.33, y2: 0.38, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.33, y1: 0.35, x2: 0.33, y2: 0.38, color: '#ff4444', duration: 40 },

    // Signe de perpendicularité en H
    { type: 'line', x1: 0.30, y1: 0.62, x2: 0.33, y2: 0.62, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.33, y1: 0.62, x2: 0.33, y2: 0.65, color: '#ff4444', duration: 40 },
    { type: 'text', text: 'Quelle est la distance qui sépare (D1) de (D2) ?', x: 0.05, y: 0.85, sz: 0.04, color: CW },
    // Question
    { 
        type: 'question', 
        text: "Evident, c'est AH.", 
        options: [
            { text: "Exacte", isCorrect: true },
            { text: "Non", isCorrect: false },
        ]
    },
    {type:'clear', target: 'text'},
    {type:'text', text: "(D1) et (D2) sont deux droites parallèles. Une perpendiculaire en un point A à (D1) coupe (D2) en un point H.", x: 0.05, y: 0.85, sz: 0.035, color: '#f5e441', pause: 400 },
    {type:'text', text: "On appelle distance des droites parallèles (D1) et (D2) la distance AH. ", x: 0.05, y: 0.90, sz: 0.035, color: '#f5e441', pause: 400 },
    ];
    const S8_Events = [
    { text: 'Notion : Points équidistants de deux droites parallèles', isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0 },
    
    // Étape 1 : Deux droites parallèles
    { type: 'text', text: 'Traçons deux droites parallèles (D1) et (D2).',id:'ligne_speciale', x: 0.05, y: 0.20, sz: 0.04, color: CW },
    
    // Droite (D1) en haut
    { type: 'point', x: 0.10, y: 0.35, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.60, y: 0.35, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.10, y1: 0.35, x2: 0.60, y2: 0.35, color: '#8dd0f0', duration: 80 },
    { type: 'text', text: '(D1)', x: 0.62, y: 0.35, sz: 0.04, color: '#8dd0f0' },

    // Droite (D2) en bas
    { type: 'point', x: 0.10, y: 0.65, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.60, y: 0.65, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.10, y1: 0.65, x2: 0.60, y2: 0.65, color: '#8dd0f0', duration: 80 },
    { type: 'text', text: '(D2)', x: 0.62, y: 0.65, sz: 0.04, color: '#8dd0f0' },

    // Étape 2 : Perpendiculaire commune
    {type:'clear', id:'ligne_speciale'},
    { type: 'text', text: 'Traçons à présent une droite perpendiculaire à ces deux droites.', id:'ligne_speciale',x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    // Perpendiculaire
    { type: 'point', x: 0.40, y: 0.30, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.40, y: 0.70, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.40, y1: 0.30, x2: 0.40, y2: 0.70, color: '#7af0a0', duration: 80 },

    // Signe ⊥ en haut
    { type: 'line', x1: 0.40, y1: 0.38, x2: 0.43, y2: 0.38, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.43, y1: 0.35, x2: 0.43, y2: 0.38, color: '#ff4444', duration: 40 },

    // Signe ⊥ en bas
    { type: 'line', x1: 0.40, y1: 0.62, x2: 0.43, y2: 0.62, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.43, y1: 0.62, x2: 0.43, y2: 0.65, color: '#ff4444', duration: 40 },

    // Étape 3 : Points A et B
    {type:'clear', id: 'ligne_speciale'},
    { type: 'text', text: 'Cette droite coupe (D1) en A et (D2) en B.',id:'ligne_speciale', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    { type: 'point', x: 0.40, y: 0.35, label: 'A', labelPos: 'left', color: '#f5e441', duration: 60 },
    { type: 'point', x: 0.40, y: 0.65, label: 'B', labelPos: 'left', color: '#f5e441', duration: 60 },

    // Étape 4 : Axe médian (médiatrice de [AB])
    {type:'clear', id:'ligne_speciale'},
    { type: 'text', text: 'Voici (L) l\'axe médian de (D1) et (D2), C\'est la médiatrice du segment [AB]:',id:'ligne_speciale', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    // Milieu de [AB] = (0.40, 0.50)
    { type: 'point', x: 0.40, y: 0.50, label: 'M', labelPos: 'right', color: '#ffffff', duration: 60 },
    
    // Médiatrice (L) horizontale passant par M
    { type: 'point', x: 0.15, y: 0.50, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.65, y: 0.50, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.15, y1: 0.50, x2: 0.65, y2: 0.50, color: '#f5e441', duration: 80 },
    { type: 'text', text: '(L)', x: 0.67, y: 0.50, sz: 0.04, color: '#f5e441' },

        // Signe ⊥ en M
    { type: 'line', x1: 0.40, y1: 0.53, x2: 0.43, y2: 0.53, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.43, y1: 0.50, x2: 0.43, y2: 0.53, color: '#ff4444', duration: 40 },
    // Exemple de M
    {type:'clear', id:'ligne_speciale'},
    { type: 'text', text: 'Exemple de M :', tag:'groupe_a_effacer', x: 0.05, y: 0.20, sz: 0.035, color: CW },

    // Distances de M à (D1) et (D2)
    { type: 'line', x1: 0.40, y1: 0.35, x2: 0.40, y2: 0.50, color: '#7af0a0', duration: 80 },
    { type: 'line', x1: 0.40, y1: 0.50, x2: 0.40, y2: 0.65, color: '#7af0a0', duration: 80 },

    // Traits centrés au milieu de [MA] (y=0.425) et [MB] (y=0.575)
    { type: 'line', x1: 0.39, y1: 0.425, x2: 0.41, y2: 0.425, color: '#ffffff', duration: 40 },
    { type: 'line', x1: 0.39, y1: 0.575, x2: 0.41, y2: 0.575, color: '#ffffff', duration: 40 },
    {type:'text',text:'Donc AM=MB. Autrement dit, M est équidistant de (D1) et (D2)',tag:'groupe_a_effacer',x:0.05, y:0.75, sz:0.035, color:'#f5e441',pause:800},
    // Exemple de C
    {type:'clear', tag:'groupe_a_effacer'},
    { type: 'text', text: 'Exemple de C :', tag:'groupe_a_effacer', x: 0.05, y: 0.20, sz: 0.035, color: CW },

    // Point C sur (L) et ses perpendiculaires
    { type: 'point', x: 0.22, y: 0.50, label: 'C', labelPos: 'top', color: '#f5e441', duration: 60 },
    { type: 'point', x: 0.22, y: 0.35, label: 'J', labelPos: 'left', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.22, y: 0.65, label: 'K', labelPos: 'left', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.22, y1: 0.35, x2: 0.22, y2: 0.50, color: '#7af0a0', duration: 80 },
    { type: 'line', x1: 0.22, y1: 0.50, x2: 0.22, y2: 0.65, color: '#7af0a0', duration: 80 },

    // Traits centrés au milieu
    { type: 'line', x1: 0.21, y1: 0.425, x2: 0.23, y2: 0.425, color: '#ffffff', duration: 40 },
    { type: 'line', x1: 0.21, y1: 0.575, x2: 0.23, y2: 0.575, color: '#ffffff', duration: 40 },

    // Signes ⊥ en H1 et H2
    { type: 'line', x1: 0.22, y1: 0.38, x2: 0.25, y2: 0.38, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.25, y1: 0.35, x2: 0.25, y2: 0.38, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.22, y1: 0.62, x2: 0.25, y2: 0.62, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.25, y1: 0.62, x2: 0.25, y2: 0.65, color: '#ff4444', duration: 40 },
    {type:'text',text:'Donc JC=CK. Autrement dit, C est équidistant de (D1) et (D2)',tag:'groupe_a_effacer',x:0.05, y:0.75, sz:0.035, color:'#f5e441',pause:800},
    // Exemple de F
    {type:'clear', tag:'groupe_a_effacer'},
    { type: 'text', text: 'Exemple de F :', tag:'groupe_a_effacer', x: 0.05, y: 0.20, sz: 0.035, color: CW },

    // Point F sur (L) et ses perpendiculaires
    { type: 'point', x: 0.55, y: 0.50, label: 'F', labelPos: 'top', color: '#f5e441', duration: 60 },
    { type: 'point', x: 0.55, y: 0.35, label: 'L', labelPos: 'right', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.55, y: 0.65, label: 'S', labelPos: 'right', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.55, y1: 0.35, x2: 0.55, y2: 0.50, color: '#7af0a0', duration: 80 },
    { type: 'line', x1: 0.55, y1: 0.50, x2: 0.55, y2: 0.65, color: '#7af0a0', duration: 80 },

    // Traits centrés au milieu
    { type: 'line', x1: 0.54, y1: 0.425, x2: 0.56, y2: 0.425, color: '#ffffff', duration: 40 },
    { type: 'line', x1: 0.54, y1: 0.575, x2: 0.56, y2: 0.575, color: '#ffffff', duration: 40 },

    // Signes ⊥ en K1 et K2
    { type: 'line', x1: 0.55, y1: 0.38, x2: 0.58, y2: 0.38, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.58, y1: 0.35, x2: 0.58, y2: 0.38, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.55, y1: 0.62, x2: 0.58, y2: 0.62, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.58, y1: 0.62, x2: 0.58, y2: 0.65, color: '#ff4444', duration: 40 },
    {type:'text',text:'Donc SF=FL. Autrement dit, F est équidistant de (D1) et (D2)',tag:'groupe_a_effacer',x:0.05, y:0.75, sz:0.035, color:'#f5e441',pause:800},
    {type:'clear', tag:'groupe_a_effacer'},
    {type: 'text',text:'En résumé(à retenir) : ', x:0.05, y:0.75, sz:0.035, color:'#f5e441'},
    {type: 'text',text:'Si un point appartient à l\'axe médian de deux droites parallèles alors il est équidistant de ces deux droites.', x:0.05, y:0.80, sz:0.035, color:'#ffffff'},
    {type: 'text',text:'Si un point est équidistant de deux droites parallèles alors il appartient à l\'axe médian de ces deux droites.  ', x:0.05, y:0.85, sz:0.035, color:'#ffffff'},
    ];

    const S9_Events = [
    { text: 'Notion : Points équidistants de deux droites sécantes', isTitle: true, x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0 },
    
    // Étape 1 : L'angle
    { type: 'text', text: 'Traçons un angle de sommet O.', x: 0.05, y: 0.20, sz: 0.04, color: CW },
    
    // Demi-droite du bas (horizontale, 0°)
    { type: 'point', x: 0.8255, y: 0.65, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.40, y1: 0.65, x2: 0.8255, y2: 0.65, color: '#8dd0f0', duration: 80 },
    
    // Demi-droite du haut (oblique, 50°)
    { type: 'point', x: 0.6394, y: 0.1432, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.40, y1: 0.65, x2: 0.6394, y2: 0.1432, color: '#8dd0f0', duration: 80 },
    
    // Sommet O
    { type: 'point', x: 0.40, y: 0.65, label: 'O', labelPos: 'left', color: '#f5e441', duration: 60 },

    // Étape 2 : La bissectrice (25°)
    {type:'clear', target: 'text'},
    { type: 'text', text: 'Traçons la bissectrice de cet angle.', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    { type: 'point', x: 0.6700, y: 0.4264, label: '', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.40, y1: 0.65, x2: 0.6700, y2: 0.4264, color: '#7af0a0', duration: 80 },
    { type: 'text', text: '(B)', x: 0.68, y: 0.41, sz: 0.04, color: '#7af0a0' },

    // Étape 3 : Point M sur la bissectrice
    {type:'clear', target: 'text'},
    { type: 'text', text: 'Plaçons un point M sur la bissectrice.', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    { type: 'point', x: 0.6700, y: 0.4264, label: 'M', labelPos: 'right', color: '#f5e441', duration: 60 },

    // Étape 4 : Distances de M aux deux côtés
    {type:'clear', target: 'text'},
    { type: 'text', text: 'Mesurons la distance de M à chaque côté de l\'angle.', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    // Pied H sur le côté horizontal
    { type: 'point', x: 0.6700, y: 0.65, label: 'H', labelPos: 'bottom', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.6700, y1: 0.4264, x2: 0.6700, y2: 0.65, color: '#ffffff', duration: 80 },

    // Carré ⊥ en H (fermé correctement : P1 → P2 → P3)
    { type: 'line', x1: 0.6540, y1: 0.65, x2: 0.6540, y2: 0.6216, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.6540, y1: 0.6216, x2: 0.6700, y2: 0.6216, color: '#ff4444', duration: 40 },

    // Pied K sur le côté oblique
    { type: 'point', x: 0.5736, y: 0.2826, label: 'K', labelPos: 'left', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.6700, y1: 0.4264, x2: 0.5736, y2: 0.2826, color: '#ffffff', duration: 80 },

    // Carré ⊥ en K (fermé correctement, orienté vers M : P1 → P2 → P3)
    { type: 'line', x1: 0.5633, y1: 0.3043, x2: 0.5755, y2: 0.3225, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.5755, y1: 0.3225, x2: 0.5857, y2: 0.3008, color: '#ff4444', duration: 40 },

    // Étape 5 : Constat MH = MK
    {type:'clear', target: 'text'},
    { type: 'text', text: 'En mesurant, on observe que MH = MK.', x: 0.05, y: 0.20, sz: 0.035, color: CW, pause: 400 },

    // Petits traits de mesure identiques sur [MH] et [MK]
    { type: 'line', x1: 0.655, y1: 0.538, x2: 0.685, y2: 0.538, color: '#f5e441', duration: 40 },
    { type: 'line', x1: 0.613, y1: 0.3545, x2: 0.638, y2: 0.3725, color: '#f5e441', duration: 40 },

    {
        type: 'question',
        text: "Donc M est-il équidistant des deux côtés de l'angle ?",
        addOther: true,
        expectedAnswer: "Oui, M est équidistant des deux côtés de l'angle",
        options: [
            { text: "Oui, car MH = MK", isCorrect: true },
            { text: "Non, car MH ≠ MK", isCorrect: false }
        ]
    },

    {type:'clear', target: 'text'},
    { type: 'text', text: 'On peut refaire le même constat avec n\'importe quel autre point de (B).', x: 0.05, y: 0.20, sz: 0.035, color: CW, pause: 400 },

    {type:'clear', target: 'text'},
    {type: 'text', text: 'En résumé (à retenir) : ', x: 0.05, y: 0.75, sz: 0.035, color: '#f5e441' },
    {type: 'text', text: 'Si un point appartient à la bissectrice d\'un angle, alors il est équidistant des deux côtés de cet angle.', x: 0.05, y: 0.80, sz: 0.035, color: '#ffffff' },
    {type: 'text', text: 'Si un point est équidistant des deux côtés d\'un angle, alors il appartient à la bissectrice de cet angle.', x: 0.05, y: 0.85, sz: 0.035, color: '#ffffff' },
    ];

    const S10_Events = [
    { text: 'Notion S10 : Axe de symétrie de deux droites sécantes', isTitle: true, x: 0.05, y: 0.08, sz: 0.045, bold: true, color: CY, start: 0 },
    
    // Centre O en pixels : (470, 290) → en relatif : (0.50, 0.55)
    // Rayon L = 300 pixels → en relatif x : 300/940 = 0.319, en relatif y : 300/529 = 0.567
    
    // --- ÉTAPE 1 : Construction initiale ---
    { text: '(OA) et (OB) sont deux droites sécantes en O.', id: 'txt', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    { type: 'point', x: 0.50, y: 0.55, label: 'O', labelPos: 'left', color: CY, duration: 60 },
    
    // (OA) à 0°, L=300px
    // x = 0.50 + 0.319 × cos(0°) = 0.50 + 0.319 = 0.819
    // y = 0.55 - 0.567 × sin(0°) = 0.55 - 0 = 0.55
    { type: 'line', x1: 0.50, y1: 0.55, x2: 0.819, y2: 0.55, color: CB, duration: 80 },
    { type: 'point', x: 0.819, y: 0.55, label: 'A', labelPos: 'top', color: CW, duration: 60 },
    
    // (OB) à 60°, L=300px
    // x = 0.50 + 0.319 × cos(60°) = 0.50 + 0.319 × 0.5 = 0.50 + 0.1595 = 0.6595
    // y = 0.55 - 0.567 × sin(60°) = 0.55 - 0.567 × 0.866 = 0.55 - 0.491 = 0.059
    { type: 'line', x1: 0.50, y1: 0.55, x2: 0.6595, y2: 0.059, color: CB, duration: 80 },
    { type: 'point', x: 0.6595, y: 0.059, label: 'B', labelPos: 'top', color: CW, duration: 60 },
    
    // Angle AÔB = 60°
    { type: 'signe_angle', x: 0.50, y: 0.55, r: 0.15, angle1: 0, angle2: 60, anticlockwise: true, label: '60°', color: CY, duration: 60 },
    
    {
        type: 'question',
        text: "L'angle BÔE est adjacent à 60° et forme un angle plat. Combien mesure-t-il ?",
        addOther: true,
        expectedAnswer: "120 degrés",
        options: [
            { text: "120°", isCorrect: true },
            { text: "60°", isCorrect: false }
        ]
    },
    
    // --- ÉTAPE 2 : (OE) opposée à (OB) à 240° (ou -120°) ---
    { type: 'clear', id: 'txt' },
    { text: '(OE) est la demi-droite opposée à (OB).', id: 'txt', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    // (OE) à 240°, L=300px
    // x = 0.50 + 0.319 × cos(240°) = 0.50 + 0.319 × (-0.5) = 0.50 - 0.1595 = 0.3405
    // y = 0.55 - 0.567 × sin(240°) = 0.55 - 0.567 × (-0.866) = 0.55 + 0.491 = 1.041
    // Mais y ne peut pas dépasser 1, donc on réduit L à 250px
    // x = 0.50 + 0.266 × cos(240°) = 0.50 - 0.133 = 0.367
    // y = 0.55 - 0.472 × sin(240°) = 0.55 + 0.409 = 0.959
    { type: 'line', x1: 0.50, y1: 0.55, x2: 0.367, y2: 0.959, color: CB, duration: 80 },
    { type: 'point', x: 0.367, y: 0.959, label: 'E', labelPos: 'left', color: CW, duration: 60 },
    
    // Angle AÔE = 130° (de 0° à -130° ou 230°)
    { type: 'signe_angle', x: 0.50, y: 0.55, r: 0.18, angle1: 0, angle2: -130, anticlockwise: false, label: '130°', color: CY, duration: 60 },
    
    // --- ÉTAPE 3 : Bissectrice (D) de l'angle 60° à 30° ---
    { type: 'clear', id: 'txt' },
    { text: '(D) est la bissectrice de l\'angle AÔB (60° ÷ 2 = 30°).', id: 'txt', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    // (D) à 30°, L=300px
    // x = 0.50 + 0.319 × cos(30°) = 0.50 + 0.319 × 0.866 = 0.50 + 0.276 = 0.776
    // y = 0.55 - 0.567 × sin(30°) = 0.55 - 0.567 × 0.5 = 0.55 - 0.2835 = 0.2665
    { type: 'line', x1: 0.50, y1: 0.55, x2: 0.776, y2: 0.2665, color: CG, duration: 80 },
    { type: 'text', text: '(D)', x: 0.785, y: 0.25, sz: 0.03, color: CG },
    
    // Sous-arcs de (D) : 0°→30° et 30°→60°
    { type: 'signe_angle', x: 0.50, y: 0.55, r: 0.10, angle1: 0, angle2: 30, anticlockwise: true, color: CG, duration: 40 },
    { type: 'signe_angle', x: 0.50, y: 0.55, r: 0.12, angle1: 30, angle2: 60, anticlockwise: true, color: CG, duration: 40 },
    
    // --- ÉTAPE 4 : Bissectrice (D') de l'angle 130° à -65° ---
    { type: 'clear', id: 'txt' },
    { text: '(D\') est la bissectrice de l\'angle AÔE (130° ÷ 2 = 65°).', id: 'txt', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    // (D') à -65°, L=300px
    // x = 0.50 + 0.319 × cos(-65°) = 0.50 + 0.319 × 0.4226 = 0.50 + 0.1348 = 0.6348
    // y = 0.55 - 0.567 × sin(-65°) = 0.55 - 0.567 × (-0.9063) = 0.55 + 0.5139 = 1.0639
    // y dépasse 1, donc on réduit L à 250px
    // x = 0.50 + 0.266 × cos(-65°) = 0.50 + 0.1124 = 0.6124
    // y = 0.55 - 0.472 × sin(-65°) = 0.55 + 0.4278 = 0.9778
    { type: 'line', x1: 0.50, y1: 0.55, x2: 0.6124, y2: 0.9778, color: '#ff4444', duration: 80 },
    { type: 'text', text: "(D')", x: 0.62, y: 0.99, sz: 0.03, color: '#ff4444' },
    
    // Sous-arcs de (D') : 0°→-65° et -65°→-130°
    { type: 'signe_angle', x: 0.50, y: 0.55, r: 0.14, angle1: 0, angle2: -65, anticlockwise: false, color: '#ff4444', duration: 40 },
    { type: 'signe_angle', x: 0.50, y: 0.55, r: 0.16, angle1: -65, angle2: -130, anticlockwise: false, color: '#ff4444', duration: 40 },
    
    {
        type: 'question',
        text: "Regarde (D) à 30° et (D') à -65°. Quel angle forment-elles ? 30° + 65° = ?",
        options: [
            { text: "90° (perpendiculaires !)", isCorrect: true },
            { text: "80°", isCorrect: false }
        ]
    },
    
    { text: "Les deux bissectrices sont perpendiculaires !", x: 0.05, y: 0.85, sz: 0.04, bold: true, color: CG, pause: 400 },
    
    // --- ÉTAPE 5 : Symétries par rapport à (D') ---
    { type: 'clear', id: 'txt' },
    { text: 'Symétries par rapport à (D\') :', id: 'txt', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    { text: 'Reflétons (OA) par rapport à (D\')...', x: 0.05, y: 0.25, sz: 0.03, color: CW },
    { 
        type: 'reflet', ox: 0.50, oy: 0.55,
        ax: 0.819, ay: 0.55,  // Point A
        axe_x1: 0.50, axe_y1: 0.55,  // O
        axe_x2: 0.6124, axe_y2: 0.9778,  // Point sur (D')
        color: CB, colorReflet: '#ff4444', label: '', duration: 150 
    },
    
    { type: 'clear', id: 'txt' },
    { text: 'Le reflet tombe sur (OE) !', x: 0.05, y: 0.25, sz: 0.03, color: CW, pause: 200 },
    
    { text: 'Reflétons (OB)...', x: 0.05, y: 0.30, sz: 0.03, color: CW },
    { 
        type: 'reflet', ox: 0.50, oy: 0.55,
        ax: 0.6595, ay: 0.059,  // Point B
        axe_x1: 0.50, axe_y1: 0.55,  // O
        axe_x2: 0.6124, axe_y2: 0.9778,  // Point sur (D')
        color: CB, colorReflet: CY, label: '', duration: 150 
    },
    
    { type: 'clear', id: 'txt' },
    { text: 'Le reflet retombe sur (OA) !', x: 0.05, y: 0.30, sz: 0.03, color: CW, pause: 200 },
    
    // --- ÉTAPE 6 : Symétries par rapport à (D) ---
    { type: 'clear', id: 'txt' },
    { text: 'Symétries par rapport à (D) :', id: 'txt', x: 0.05, y: 0.20, sz: 0.035, color: CW },
    
    { text: 'Reflétons (OA) par rapport à (D)...', x: 0.05, y: 0.25, sz: 0.03, color: CW },
    { 
        type: 'reflet', ox: 0.50, oy: 0.55,
        ax: 0.819, ay: 0.55,  // Point A
        axe_x1: 0.50, axe_y1: 0.55,  // O
        axe_x2: 0.776, axe_y2: 0.2665,  // Point sur (D)
        color: CB, colorReflet: '#ff4444', label: '', duration: 150 
    },
    
    { type: 'clear', id: 'txt' },
    { text: 'Le reflet tombe sur (OB) !', x: 0.05, y: 0.25, sz: 0.03, color: CW, pause: 200 },
    
    { text: 'Reflétons (OB)...', x: 0.05, y: 0.30, sz: 0.03, color: CW },
    { 
        type: 'reflet', ox: 0.50, oy: 0.55,
        ax: 0.6595, ay: 0.059,  // Point B
        axe_x1: 0.50, axe_y1: 0.55,  // O
        axe_x2: 0.776, axe_y2: 0.2665,  // Point sur (D)
        color: CB, colorReflet: CY, label: '', duration: 150 
    },
    
    { type: 'clear', id: 'txt' },
    { text: 'Le reflet retombe sur (OA) !', x: 0.05, y: 0.30, sz: 0.03, color: CW, pause: 200 },
    
    // --- PROPRIÉTÉS ---
    { type: 'SEP' },
    
    { type: 'text', text: 'À retenir :', x: 0.05, y: 0.20, sz: 0.038, bold: true, color: CY },
    { type: 'text', text: '1. Les deux bissectrices sont perpendiculaires.', x: 0.05, y: 0.28, sz: 0.033, color: CW },
    { type: 'text', text: '2. Chaque bissectrice est un axe de symétrie.', x: 0.05, y: 0.33, sz: 0.033, color: CW },
    { type: 'text', text: '3. Tout point sur une bissectrice est équidistant des deux droites.', x: 0.05, y: 0.38, sz: 0.033, color: CG, bold: true },
];
export const notions = {
    'S0': {
        id: 'S0',
        title: 'Bienvenue'  ,
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
        nextNotionId: 'S5'
    },
    'S5': {
    id: 'S5',
    title: 'La corde',
    events: S5_Events,
    nextNotionId: 'S6'
    },
     'S6': {
    id: 'S6',
    title: 'Distance d\'un point à une droite',
    events: S6_Events,
    nextNotionId: 'S7'  // ou la notion suivante
   },
    'S7': {
    id: 'S7',
    title: 'Distance entre deux droites parallèles',
    events: S7_Events,
    nextNotionId: 'S8'
   },
   'S8': {
    id: 'S8',
    title: 'Points équidistants de deux droites parallèles',
    events: S8_Events,
    nextNotionId: 'S9'
    },
    'S9': {
    id: 'S9',
    title: 'Points équidistants de deux droites sécantes',
    events: S9_Events,
    nextNotionId: 'S10'
    },
    'S10': {
    id: 'S10',
    title: 'Axe de symétrie de deux droites sécantes',
    events: S10_Events,
    nextNotionId: 'S1'
    },
};

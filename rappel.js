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

const S11_Events = [
  {
    text: "Notion : Propriétés des triangles particuliers",
    y: 0.08,
    sz: 0.05,
    bold: true,
    color: CY,
    isTitle: true,
  },

  // ================== PARTIE 0 : RAPPEL DES DÉFINITIONS ==================
  {
    text: "Rappel : depuis un sommet, on peut tracer 4 droites différentes.",
    y: 0.16,
    sz: 0.032,
    color: CW,
  },

  // Triangle quelconque, décalé à GAUCHE pour laisser la droite libre
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.08, y2: 0.68, color: CW, duration: 60 },
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.42, y2: 0.66, color: CW, duration: 60 },
  { type: "line", x1: 0.08, y1: 0.68, x2: 0.42, y2: 0.66, color: CW, duration: 60 },
  { text: "A", x: 0.245, y: 0.24, sz: 0.032, bold: true, color: CY },
  { text: "B", x: 0.05, y: 0.71, sz: 0.032, bold: true, color: CY },
  { text: "C", x: 0.43, y: 0.7, sz: 0.032, bold: true, color: CY },

  // Textes à DROITE du triangle (zone libre, jamais cachée)
  { text: "1. Médiane : va du sommet au milieu du côté opposé.", x: 0.5, y: 0.28, sz: 0.026, color: CG, pause: 300 },
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.25, y2: 0.665, color: CG, duration: 60, pause: 150 },

  { text: "2. Hauteur : forme un angle droit avec le côté opposé.", x: 0.5, y: 0.36, sz: 0.026, color: CB, pause: 300 },
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.2, y2: 0.67, color: CB, duration: 60, pause: 150 },

  { text: "3. Bissectrice : partage l'angle du sommet en deux.", x: 0.5, y: 0.44, sz: 0.026, color: "#ff9900", pause: 300 },
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.3, y2: 0.665, color: "#ff9900", duration: 60, pause: 150 },

  { text: "4. Médiatrice : coupe un côté en son milieu, à angle droit.", x: 0.5, y: 0.52, sz: 0.026, color: "#ee1717", pause: 300 },
  { type: "line", x1: 0.15, y1: 0.8, x2: 0.32, y2: 0.55, color: "#ee1717", duration: 60, pause: 150 },

  {
    text: "Sur un triangle quelconque, ces 4 droites sont bien différentes.",
    x: 0.5,
    y: 0.62,
    sz: 0.028,
    color: CW,
  },

  {
    type: "question",
    text: "As-tu bien compris la différence entre ces 4 droites ?",
    options: [
      { text: "Oui, c'est clair", isCorrect: true },
      { text: "Pas encore bien", isCorrect: false },
    ],
  },

  { type: "SEP" },

  // ================== PARTIE 1 : TRIANGLE ISOCÈLE ==================
  {
    text: "Dans un triangle isocèle, la bissectrice du sommet principal a une propriété étonnante...",
    y: 0.16,
    sz: 0.03,
    color: CW,
  },

  { type: "line", x1: 0.25, y1: 0.28, x2: 0.08, y2: 0.68, color: CW, duration: 60 },
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.42, y2: 0.68, color: CW, duration: 60 },
  { type: "line", x1: 0.08, y1: 0.68, x2: 0.42, y2: 0.68, color: CW, duration: 60 },
  { text: "A", x: 0.245, y: 0.24, sz: 0.032, bold: true, color: CY },
  { text: "B", x: 0.05, y: 0.71, sz: 0.032, bold: true, color: CY },
  { text: "C", x: 0.43, y: 0.71, sz: 0.032, bold: true, color: CY },

  {
    text: "Ce triangle est isocèle en A : donc AB = AC.",
    x: 0.5,
    y: 0.25,
    sz: 0.028,
    color: CW,
  },

  {
    type: "question",
    text: "Si on trace le segment issu de A vers le milieu de [BC], que représente-t-il ?",
    options: [
      { text: "Juste une médiane", isCorrect: false },
      { text: "Juste une hauteur", isCorrect: false },
      { text: "Il est à la fois hauteur, médiane, bissectrice ET médiatrice !", isCorrect: true },
    ],
  },

  { type: "line", x1: 0.25, y1: 0.28, x2: 0.25, y2: 0.68, color: CY, duration: 60, pause: 200 },
  { text: "M", x: 0.26, y: 0.71, sz: 0.03, color: CY },

  { text: "Le segment [AM] est en même temps :", x: 0.5, y: 0.35, sz: 0.028, color: CY, bold: true, pause: 300 },
  { text: "• la hauteur", x: 0.5, y: 0.42, sz: 0.026, color: CW, pause: 200 },
  { text: "• la médiane", x: 0.5, y: 0.48, sz: 0.026, color: CW, pause: 200 },
  { text: "• la bissectrice", x: 0.5, y: 0.54, sz: 0.026, color: CW, pause: 200 },
  { text: "• la médiatrice de [BC]", x: 0.5, y: 0.6, sz: 0.026, color: CW, pause: 200 },

  {
    type: "question",
    isVerification: true,
    text: "Cette propriété concerne quel sommet du triangle isocèle ?",
    options: [
      { text: "Un sommet quelconque", isCorrect: false },
      { text: "Le sommet principal (entre les 2 côtés égaux)", isCorrect: true },
      { text: "Un sommet de la base", isCorrect: false },
    ],
    retryStart: 10,
  },

  { type: "SEP" },

  // ================== PARTIE 2 : TRIANGLE ÉQUILATÉRAL ==================
  {
    text: "Et dans un triangle équilatéral ? Il est isocèle en chacun de ses 3 sommets à la fois !",
    y: 0.16,
    sz: 0.03,
    color: CW,
  },

  { type: "line", x1: 0.25, y1: 0.28, x2: 0.08, y2: 0.68, color: CW, duration: 60 },
  { type: "line", x1: 0.25, y1: 0.28, x2: 0.42, y2: 0.68, color: CW, duration: 60 },
  { type: "line", x1: 0.08, y1: 0.68, x2: 0.42, y2: 0.68, color: CW, duration: 60 },
  { text: "A", x: 0.245, y: 0.24, sz: 0.032, bold: true, color: CY },
  { text: "B", x: 0.05, y: 0.71, sz: 0.032, bold: true, color: CY },
  { text: "C", x: 0.43, y: 0.71, sz: 0.032, bold: true, color: CY },

  {
    type: "question",
    text: "Si c'est vrai pour un sommet, penses-tu que ce sera vrai pour les 3 sommets en même temps ?",
    options: [
      { text: "Oui, sûrement !", isCorrect: true },
      { text: "Non, ça m'étonnerait", isCorrect: false },
    ],
  },

  { type: "line", x1: 0.25, y1: 0.28, x2: 0.25, y2: 0.68, color: CY, duration: 60, pause: 150 },
  { type: "line", x1: 0.08, y1: 0.68, x2: 0.34, y2: 0.35, color: CG, duration: 60, pause: 150 },
  { type: "line", x1: 0.42, y1: 0.68, x2: 0.16, y2: 0.35, color: CB, duration: 60, pause: 150 },

  {
    text: "Les 3 segments se coupent au même point !",
    x: 0.5,
    y: 0.28,
    sz: 0.028,
    color: CW,
  },
  {
    text: "Ce point est le centre de gravité, l'orthocentre, et le centre des cercles inscrit et circonscrit.",
    x: 0.5,
    y: 0.38,
    sz: 0.024,
    color: CG,
    bold: true,
  },

  {
    type: "question",
    isVerification: true,
    text: "Dans un triangle équilatéral, chaque médiatrice est aussi :",
    options: [
      { text: "Seulement une hauteur", isCorrect: false },
      { text: "Médiane, bissectrice ET hauteur en même temps", isCorrect: true },
      { text: "Rien de particulier", isCorrect: false },
    ],
    nextQuestion: {
      text: "Et le point où elles se croisent, comment s'appelle-t-il aussi ?",
      options: [
        { text: " Un sommet", isCorrect: false },
        { text: " L'orthocentre (entre autres)", isCorrect: true },
        { text: " Un milieu", isCorrect: false },
      ],
    },
    retryStart: 30,
  },
];

// ============================================================
// Notion S12 : Puissances de 10 à exposants entiers relatifs
// ============================================================
const S12_Events = [
  {
    text: "Notion : Puissances de 10 à exposants entiers relatifs",
    y: 0.1,
    sz: 0.055,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Nous avons déjà vu les puissances POSITIVES de 10.",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    text: "10³ = 10 × 10 × 10 = 1 000",
    x: 0.08,
    y: 0.3,
    sz: 0.04,
    color: CW,
  },
  {
    text: "10² = 10 × 10 = 100",
    x: 0.08,
    y: 0.38,
    sz: 0.04,
    color: CW,
  },
  {
    text: "10¹ = 10",
    x: 0.08,
    y: 0.46,
    sz: 0.04,
    color: CW,
  },
  {
    text: "10⁰ = 1",
    x: 0.08,
    y: 0.54,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    type: "SEP",
  },
  {
    text: "Maintenant, découvrons les puissances NÉGATIVES.",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "Par définition :",
    x: 0.08,
    y: 0.26,
    sz: 0.035,
    color: CW,
  },
  {
    text: "10⁻ⁿ = 1 / 10ⁿ",
    x: 0.08,
    y: 0.34,
    sz: 0.05,
    color: CG,
    bold: true,
  },
  {
    type: "question",
    text: "Selon cette règle, que vaut 10⁻¹ ?",
    options: [
      { text: "10⁻¹ = 1/10 = 0,1", isCorrect: true },
      { text: "10⁻¹ = -10", isCorrect: false },
      { text: "10⁻¹ = 10", isCorrect: false },
    ],
  },
  {
    type: "vibrating_fraction",
    isSimulation: true,
    num: "1",
    den: "10",
    result: "0,1",
    x: 0.72,
    y: 0.55,
    sz: 0.07,
    color: CY,
    duration: 12,
  },
  { type: "clear", target: "vibrating_fraction" },
  {
    type: "question",
    isVerification: true,
    text: "Et 10⁻² alors ?",
    options: [
      { text: "10⁻² = 1/100 = 0,01", isCorrect: true },
      { text: "10⁻² = -20", isCorrect: false },
      { text: "10⁻² = -100", isCorrect: false },
    ],
    retryStart: 10,
  },
  {
    type: "vibrating_fraction",
    isSimulation: true,
    num: "1",
    den: "100",
    result: "0,01",
    x: 0.72,
    y: 0.55,
    sz: 0.07,
    color: CY,
    duration: 12,
  },
  { type: "clear", target: "vibrating_fraction" },
  {
    type: "SEP",
  },
  {
    text: "Règle à retenir :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "10⁻ⁿ = 0,00...01",
    x: 0.08,
    y: 0.25,
    sz: 0.045,
    color: CG,
    bold: true,
  },
  {
    text: "(avec n chiffres après la virgule)",
    x: 0.08,
    y: 0.33,
    sz: 0.035,
    color: CW,
  },
  {
    type: "question",
    text: "Vérifions : que vaut 10³ ?",
    options: [
      { text: "0,001", isCorrect: true },
      { text: "0,01", isCorrect: false },
      { text: "0,1", isCorrect: false },
    ],
    retryStart: 10,
  },
  {
    type: "question",
    isVerification: true,
    text: "Et 10⁻⁴ ?",
    options: [
      { text: "0,0001", isCorrect: true },
      { text: "0,001", isCorrect: false },
      { text: "0,01", isCorrect: false },
    ],
    retryStart: 15,
  },
  {
    text: "Bravo ! Tu maîtrises les puissances négatives de 10.",
    y: 0.85,
    sz: 0.04,
    color: CG,
    bold: true,
  },
];

// ============================================================
// Notion S13 : Produit de puissances de 10
// ============================================================
const S13_Events = [
  {
    text: "Notion : Produit 10 × 10ⁿ",
    y: 0.1,
    sz: 0.055,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Calculons le produit de deux puissances de 10.",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    text: "Exemple : 10³ × 10²",
    x: 0.08,
    y: 0.3,
    sz: 0.045,
    color: CW,
  },
  {
    type: "question",
    text: "Comment calculer 10³ × 10² ?",
    options: [
      { text: "10³ × 10² = 10⁵", isCorrect: true },
      { text: "10³ × 10² = 10⁶", isCorrect: false },
      { text: "10³ × 10² = 20", isCorrect: false },
    ],
  },
  {
    text: "10³ × 10² = (10×10×10) × (10×10) = 10⁵",
    x: 0.08,
    y: 0.42,
    sz: 0.038,
    color: CG,
  },
  {
    text: "Règle : 10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ",
    x: 0.08,
    y: 0.52,
    sz: 0.048,
    color: CY,
    bold: true,
  },
  {
    type: "SEP",
  },
  {
    text: "Appliquons avec des exposants négatifs.",
    y: 0.15,
    sz: 0.038,
    color: CW,
  },
  {
    type: "question",
    text: "Que vaut 10³ × 10⁻³ ?",
    options: [
      { text: "10⁰ = 1", isCorrect: true },
      { text: "10⁶", isCorrect: false },
      { text: "10⁻⁹", isCorrect: false },
    ],
  },
  {
    text: "10³ × 10⁻³ = 10³⁻³ = 10⁰ = 1",
    x: 0.08,
    y: 0.4,
    sz: 0.042,
    color: CG,
    bold: true,
  },
  {
    type: "vibrating_fraction",
    isSimulation: true,
    num: "10³",
    den: "10³",
    result: "1",
    x: 0.72,
    y: 0.55,
    sz: 0.07,
    color: CY,
    duration: 12,
  },
  { type: "clear", target: "vibrating_fraction" },
  {
    type: "SEP",
  },
  {
    text: "Entraînons-nous !",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    type: "question",
    text: "Calcule : 10⁵ × 10⁻²",
    options: [
      { text: "10³", isCorrect: true },
      { text: "10⁷", isCorrect: false },
      { text: "10⁻¹⁰", isCorrect: false },
    ],
    retryStart: 10,
  },
  {
    type: "question",
    text: "Calcule : 10⁻⁴ × 10⁻²",
    options: [
      { text: "10⁻⁶", isCorrect: true },
      { text: "10⁻⁸", isCorrect: false },
      { text: "10⁶", isCorrect: false },
    ],
    retryStart: 15,
  },
  {
    type: "question",
    isVerification: true,
    text: "Calcule : 10² × 10⁻²",
    options: [
      { text: "1", isCorrect: true },
      { text: "10⁴", isCorrect: false },
      { text: "10⁻⁴", isCorrect: false },
    ],
    retryStart: 20,
  },
  {
    text: "Formule : 10ᵐ × 10 = 10ᵐ⁺ⁿ",
    x: 0.08,
    y: 0.85,
    sz: 0.042,
    color: CG,
    bold: true,
  },
];

// ============================================================
// Notion S14 : Écriture d'un nombre décimal sous la forme a×10ⁿ
// ============================================================
const S14_Events = [
  {
    text: "Notion : Écriture a × 10ⁿ",
    y: 0.1,
    sz: 0.055,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Tout nombre décimal peut s'écrire sous la forme a × 10ⁿ",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    text: "où a ∈ ℤ et n ∈ ℤ",
    y: 0.27,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Exemple 1 : Écrivons 3 500",
    x: 0.08,
    y: 0.18,
    sz: 0.04,
    color: CW,
  },
  {
    type: "question",
    text: "3 500 = ? × 10ⁿ",
    options: [
      { text: "3,5 × 10³", isCorrect: true },
      { text: "35 × 10²", isCorrect: false },
      { text: "350 × 10¹", isCorrect: false },
    ],
  },
  {
    text: "3 500 = 3,5 × 1 000 = 3,5 × 10³",
    x: 0.08,
    y: 0.45,
    sz: 0.04,
    color: CG,
  },
  {
    type: "SEP",
  },
  {
    text: "Exemple 2 : Écrivons 0,0042",
    x: 0.08,
    y: 0.18,
    sz: 0.04,
    color: CW,
  },
  {
    type: "question",
    text: "0,0042 = ? × 10ⁿ",
    options: [
      { text: "4,2 × 10⁻³", isCorrect: true },
      { text: "42 × 10⁻⁴", isCorrect: false },
      { text: "0,42 × 10⁻²", isCorrect: false },
    ],
  },
  {
    text: "0,0042 = 4,2 × 0,001 = 4,2 × 10⁻³",
    x: 0.08,
    y: 0.45,
    sz: 0.04,
    color: CG,
  },
  {
    type: "SEP",
  },
  {
    text: "Méthode :",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "1. Déplacer la virgule pour avoir un nombre entre 1 et 10",
    x: 0.08,
    y: 0.24,
    sz: 0.03,
    color: CW,
  },
  {
    text: "2. Compter le nombre de déplacements = exposant n",
    x: 0.08,
    y: 0.31,
    sz: 0.03,
    color: CW,
  },
  {
    text: "3. Vers la gauche → n positif ; Vers la droite → n négatif",
    x: 0.08,
    y: 0.38,
    sz: 0.03,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "À toi de jouer !",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    type: "question",
    text: "Écris 7 200 sous la forme a × 10ⁿ",
    options: [
      { text: "7,2 × 10³", isCorrect: true },
      { text: "72 × 10²", isCorrect: false },
      { text: "0,72 × 10⁴", isCorrect: false },
    ],
    retryStart: 10,
  },
  {
    type: "question",
    text: "Écris 0,00056 sous la forme a × 10ⁿ",
    options: [
      { text: "5,6 × 10⁻", isCorrect: true },
      { text: "56 × 10⁻⁵", isCorrect: false },
      { text: "0,56 × 10⁻³", isCorrect: false },
    ],
    retryStart: 15,
  },
  {
    type: "question",
    isVerification: true,
    text: "Écris 125 sous la forme a × 10ⁿ",
    options: [
      { text: "1,25 × 10²", isCorrect: true },
      { text: "12,5 × 10¹", isCorrect: false },
      { text: "125 × 10", isCorrect: false },
    ],
    retryStart: 20,
  },
];

// ============================================================
// Notion S15 : Produit de deux nombres décimaux en notation scientifique
// ============================================================
const S15_Events = [
  {
    text: "Notion : Produit (a × 10ⁿ) × (b × 10ᵐ)",
    y: 0.1,
    sz: 0.05,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Calculons le produit de deux nombres en notation scientifique.",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    text: "Formule : (a × 10ⁿ) × (b × 10ᵐ) = (a × b) × 10ⁿ⁺",
    x: 0.08,
    y: 0.3,
    sz: 0.042,
    color: CG,
    bold: true,
  },
  {
    type: "SEP",
  },
  {
    text: "Exemple : (3 × 10⁴) × (2 × 10³)",
    x: 0.08,
    y: 0.18,
    sz: 0.04,
    color: CW,
  },
  {
    type: "question",
    text: "Comment calculer ce produit ?",
    options: [
      { text: "(3×2) × 10⁴⁺³ = 6 × 10⁷", isCorrect: true },
      { text: "(3+2) × 10⁴⁺³ = 5 × 10⁷", isCorrect: false },
      { text: "(3×2) × 10⁻³ = 6 × 10¹", isCorrect: false },
    ],
  },
  {
    text: "(3 × 10⁴) × (2 × 10³) = 6 × 10⁷",
    x: 0.08,
    y: 0.45,
    sz: 0.04,
    color: CG,
  },
  {
    type: "SEP",
  },
  {
    text: "Avec des exposants négatifs :",
    x: 0.08,
    y: 0.18,
    sz: 0.04,
    color: CW,
  },
  {
    type: "question",
    text: "Calcule : (4 × 10²) × (5 × 10⁻³)",
    options: [
      { text: "20 × 10⁻⁵", isCorrect: true },
      { text: "9 × 10⁻⁵", isCorrect: false },
      { text: "20 × 10⁶", isCorrect: false },
    ],
  },
  {
    text: "(4 × 10⁻²) × (5 × 10⁻³) = 20 × 10⁻⁵",
    x: 0.08,
    y: 0.45,
    sz: 0.04,
    color: CG,
  },
  {
    type: "SEP",
  },
  {
    text: "Entraînement !",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    type: "question",
    text: "Calcule : (2 × 10³) × (3 × 10⁵)",
    options: [
      { text: "6 × 10⁸", isCorrect: true },
      { text: "5 × 10⁸", isCorrect: false },
      { text: "6 × 10¹", isCorrect: false },
    ],
    retryStart: 10,
  },
  {
    type: "question",
    text: "Calcule : (7 × 10²) × (4 × 10⁻⁵)",
    options: [
      { text: "28 × 10⁻³", isCorrect: true },
      { text: "11 × 10³", isCorrect: false },
      { text: "28 × 10⁷", isCorrect: false },
    ],
    retryStart: 15,
  },
  {
    type: "question",
    isVerification: true,
    text: "Calcule : (5 × 10⁻⁴) × (6 × 10⁻²)",
    options: [
      { text: "30 × 10⁻⁶", isCorrect: true },
      { text: "11 × 10⁻⁶", isCorrect: false },
      { text: "30 × 10⁸", isCorrect: false },
    ],
    retryStart: 20,
  },
  {
    text: "Formule : (a×10ⁿ)×(b×10) = (a×b)×10ⁿ⁺ᵐ",
    x: 0.08,
    y: 0.85,
    sz: 0.04,
    color: CG,
    bold: true,
  },
];

// ============================================================
// Notion S16 : Encadrement d'un nombre décimal
// ============================================================
const S16_Events = [
  {
    text: "Notion : Encadrement par deux puissances de 10",
    y: 0.1,
    sz: 0.05,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Encadrons un nombre décimal par deux puissances de 10 consécutives.",
    y: 0.2,
    sz: 0.033,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Exemple : Encadrons 8 × 10⁻⁷",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CW,
  },
  {
    type: "question",
    text: "Entre quelles puissances de 10 se trouve 8 × 10⁻⁷ ?",
    options: [
      { text: "10⁻⁷ < 8×10⁷ < 10⁻⁶", isCorrect: true },
      { text: "10⁻⁸ < 8×10⁷ < 10⁻⁷", isCorrect: false },
      { text: "10⁻⁶ < 8×10⁷ < 10⁻⁵", isCorrect: false },
    ],
  },
  {
    text: "Méthode :",
    x: 0.08,
    y: 0.42,
    sz: 0.038,
    color: CY,
    bold: true,
  },
  {
    text: "1 < 8 < 10",
    x: 0.08,
    y: 0.5,
    sz: 0.04,
    color: CG,
  },
  {
    text: "1 × 10⁻⁷ < 8 × 10⁻⁷ < 10 × 10⁻⁷",
    x: 0.08,
    y: 0.58,
    sz: 0.035,
    color: CW,
  },
  {
    text: "10⁷ < 8 × 10⁻⁷ < 10⁻⁶",
    x: 0.08,
    y: 0.66,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    type: "SEP",
  },
  {
    text: "Autre exemple : Encadrons 3,5 × 10⁴",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CW,
  },
  {
    type: "question",
    text: "Quel est l'encadrement correct ?",
    options: [
      { text: "10⁴ < 3,5×10⁴ < 10⁵", isCorrect: true },
      { text: "10³ < 3,5×10⁴ < 10⁴", isCorrect: false },
      { text: "10⁵ < 3,5×10⁴ < 10", isCorrect: false },
    ],
  },
  {
    text: "1 < 3,5 < 10",
    x: 0.08,
    y: 0.42,
    sz: 0.04,
    color: CG,
  },
  {
    text: "1 × 10⁴ < 3,5 × 10⁴ < 10 × 10⁴",
    x: 0.08,
    y: 0.5,
    sz: 0.035,
    color: CW,
  },
  {
    text: "10⁴ < 3,5 × 10⁴ < 10⁵",
    x: 0.08,
    y: 0.58,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    type: "SEP",
  },
  {
    text: "À toi !",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    type: "question",
    text: "Encadre 6 × 10⁻³",
    options: [
      { text: "10⁻³ < 6×10⁻³ < 10⁻²", isCorrect: true },
      { text: "10⁻⁴ < 6×10⁻³ < 10⁻³", isCorrect: false },
      { text: "10⁻² < 6×10⁻³ < 10⁻¹", isCorrect: false },
    ],
    retryStart: 10,
  },
  {
    type: "question",
    text: "Encadre 2,7 × 10⁵",
    options: [
      { text: "10⁵ < 2,7×10⁵ < 10⁶", isCorrect: true },
      { text: "10⁴ < 2,7×10⁵ < 10⁵", isCorrect: false },
      { text: "10⁶ < 2,7×10⁵ < 10⁷", isCorrect: false },
    ],
    retryStart: 15,
  },
  {
    type: "question",
    isVerification: true,
    text: "Encadre 9 × 10⁻⁵",
    options: [
      { text: "10⁻⁵ < 9×10⁵ < 10⁻⁴", isCorrect: true },
      { text: "10⁻⁶ < 9×10⁵ < 10⁻⁵", isCorrect: false },
      { text: "10⁻⁴ < 9×10⁵ < 10⁻³", isCorrect: false },
    ],
    retryStart: 20,
  },
  {
    text: "Bravo ! Tu sais encadrer un nombre par deux puissances de 10.",
    y: 0.85,
    sz: 0.038,
    color: CG,
    bold: true,
  },
];

// ============================================================
// MANUEL COMPLET DES SAMUEL - Toutes les notions
// De la dédicace à la culture générale
// ============================================================


// S11-S17 : Autres notions mathématiques (déjà créées précédemment)
// S12-S16 : Puissances de 10 (déjà créées dans ma réponse précédente)

// S18 : Les Prières Usuelles - Introduction
const S17_Events = [
  {
    text: "Chapitre 6 : Les Prières Usuelles",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Le Samuel doit connaître et pratiquer les prières essentielles",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "1. Le Notre Père (Pater)",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Notre Père, qui es aux cieux...",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "2. Le Je vous salue Marie (Ave Maria)",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Je vous salue Marie, pleine de grâces...",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "3. Le Gloire au Père",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Gloire au Père et au Fils et au Saint-Esprit...",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "4. Prière à l'Ange gardien",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Ange de Dieu, qui es mon gardien...",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "5. Le Confiteor",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Je confesse à Dieu tout-puissant...",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "Combien de prières usuelles le Samuel doit-il connaître ?",
    options: [
      { text: "3 prières", isCorrect: false },
      { text: "5 prières minimum", isCorrect: true },
      { text: "10 prières", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S19 : Le Calendrier Liturgique - Introduction
const S18_Events = [
  {
    text: "Chapitre 7 : Le Calendrier Liturgique",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Le calendrier liturgique couvre l'année liturgique",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    text: "De l'Avent au Christ-Roi",
    y: 0.26,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Les deux cycles principaux :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "1. Cycle Temporal (cycle du Christ)",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CW,
    bold: true,
  },
  {
    text: "Noël et Pâques sont les deux piliers",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "2. Cycle Sanctoral (cycle des saints)",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CW,
    bold: true,
  },
  {
    text: "Vierge Marie, martyrs et saints",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Les temps liturgiques :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "• Avent (violet) - Préparation à Noël",
    x: 0.08,
    y: 0.25,
    sz: 0.035,
    color: CW,
  },
  {
    text: "• Noël (blanc/jaune) - Naissance de Jésus",
    x: 0.08,
    y: 0.31,
    sz: 0.035,
    color: CW,
  },
  {
    text: "• Temps ordinaire (vert)",
    x: 0.08,
    y: 0.37,
    sz: 0.035,
    color: CW,
  },
  {
    text: "• Carême (violet) - Préparation à Pâques",
    x: 0.08,
    y: 0.43,
    sz: 0.035,
    color: CW,
  },
  {
    text: "• Temps pascal (blanc/jaune) - De Pâques à la Pentecôte",
    x: 0.08,
    y: 0.49,
    sz: 0.035,
    color: CW,
  },
  {
    type: "question",
    text: "Quelle est la couleur du temps de Carême ?",
    options: [
      { text: "Violet", isCorrect: true },
      { text: "Blanc", isCorrect: false },
      { text: "Vert", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S20 : Les Couleurs Liturgiques
const S19_Events = [
  {
    text: "Les Couleurs Liturgiques",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Chaque couleur exprime un mystère célébré",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "BLANC",
    x: 0.08,
    y: 0.15,
    sz: 0.05,
    color: CW,
    bold: true,
  },
  {
    text: "Pureté, joie, lumière",
    x: 0.08,
    y: 0.22,
    sz: 0.035,
    color: CW,
  },
  {
    text: "Temps pascal, Noël, fêtes du Seigneur",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "VIOLET",
    x: 0.08,
    y: 0.15,
    sz: 0.05,
    color: "#8B4789",
    bold: true,
  },
  {
    text: "Pénitence, deuil, tristesse",
    x: 0.08,
    y: 0.22,
    sz: 0.035,
    color: CW,
  },
  {
    text: "Avent, Carême, messes des défunts",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "ROUGE",
    x: 0.08,
    y: 0.15,
    sz: 0.05,
    color: "#DC143C",
    bold: true,
  },
  {
    text: "Feu, sang, Esprit Saint",
    x: 0.08,
    y: 0.22,
    sz: 0.035,
    color: CW,
  },
  {
    text: "Pentecôte, martyrs, Vendredi saint",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "VERT",
    x: 0.08,
    y: 0.15,
    sz: 0.05,
    color: "#228B22",
    bold: true,
  },
  {
    text: "Espérance, renouveau",
    x: 0.08,
    y: 0.22,
    sz: 0.035,
    color: CW,
  },
  {
    text: "Temps ordinaire",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "ROSE",
    x: 0.08,
    y: 0.15,
    sz: 0.05,
    color: "#FFB6C1",
    bold: true,
  },
  {
    text: "Joie dans l'attente",
    x: 0.08,
    y: 0.22,
    sz: 0.035,
    color: CW,
  },
  {
    text: "3 dimanche de l'Avent (Gaudete)",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    text: "4ᵉ dimanche de Carême (Laetare)",
    x: 0.08,
    y: 0.34,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "Quelle couleur porte-t-on à la Pentecôte ?",
    options: [
      { text: "Rouge", isCorrect: true },
      { text: "Blanc", isCorrect: false },
      { text: "Vert", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S21 : Les Lieux dans une Église
const S20_Events = [
  {
    text: "Chapitre 8 : Les Lieux dans une Église",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Dans une église, on distingue plusieurs lieux importants",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "1. Chœur",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Partie surélevée où se tiennent les prêtres",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "2. Autel",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Table du Seigneur, lieu du sacrifice eucharistique",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "3. Tabernacle",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Lieu où sont gardées les hosties consacrées",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Présence signifiée par une lampe allumée",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "4. Ambon",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Table inclinée pour les lectures bibliques",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "5. Nef",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Partie où l'assemblée prend place",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "6. Sacristie",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Annexe où le prêtre et les servants se préparent",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "Où sont conservées les hosties consacrées ?",
    options: [
      { text: "Dans le tabernacle", isCorrect: true },
      { text: "Sur l'autel", isCorrect: false },
      { text: "Dans la sacristie", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S22 : Les Vases Sacrés
const S21_Events = [
  {
    text: "Chapitre 9 : Les Vases Sacrés",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Objets précieux pour célébrer la messe",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "1. CALICE",
    x: 0.08,
    y: 0.15,
    sz: 0.045,
    color: CG,
    bold: true,
  },
  {
    text: "Coupe qui sert à offrir, consacrer et consommer le vin",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Reçoit le Sang du Christ",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "2. PATÈNE",
    x: 0.08,
    y: 0.15,
    sz: 0.045,
    color: CG,
    bold: true,
  },
  {
    text: "Vase plat pour la grande hostie",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "3. CIBOIRE",
    x: 0.08,
    y: 0.15,
    sz: 0.045,
    color: CG,
    bold: true,
  },
  {
    text: "Vase à couvercle pour les petites hosties",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Contient la Réserve eucharistique",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "4. CUSTODE",
    x: 0.08,
    y: 0.15,
    sz: 0.045,
    color: CG,
    bold: true,
  },
  {
    text: "Petit vase pour porter la communion aux malades",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "5. OSTENSOIR",
    x: 0.08,
    y: 0.15,
    sz: 0.045,
    color: CG,
    bold: true,
  },
  {
    text: "Vase pour l'exposition du Saint-Sacrement",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "Quel vase reçoit le Sang du Christ ?",
    options: [
      { text: "Le calice", isCorrect: true },
      { text: "Le ciboire", isCorrect: false },
      { text: "La patène", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S23 : Les Linges d'Autel
const S22_Events = [
  {
    text: "Chapitre 10 : Les Linges d'Autel",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Les linges sacrés pour la célébration",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "1. NAPPE D'AUTEL",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Couvre l'autel (jaune ou dorée)",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "2. CORPORAL",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Linge carré blanc, brodé d'une croix rouge",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    text: "On y dépose les espèces eucharistiques",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "3. PURIFICATOIRE",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Linge pour purifier les vases sacrés",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Se plie en six",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "4. PÂLE",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "Carton garni de toile blanche",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Couvre le calice pendant l'Eucharistie",
    x: 0.08,
    y: 0.28,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "5. VOILE DU CALICE",
    x: 0.08,
    y: 0.15,
    sz: 0.04,
    color: CG,
    bold: true,
  },
  {
    text: "De la couleur du temps liturgique",
    x: 0.08,
    y: 0.22,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "De quelle couleur est le corporal ?",
    options: [
      { text: "Blanc avec croix rouge", isCorrect: true },
      { text: "Jaune", isCorrect: false },
      { text: "Violet", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S24 : Les Vêtements Liturgiques
const S23_Events = [
  {
    text: "Chapitre 11 : Les Vêtements Liturgiques",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Les habits sacrés pour les célébrations",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Pour le prêtre (de bas en haut) :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "1. AMICT - Linge sur les épaules",
    x: 0.08,
    y: 0.25,
    sz: 0.035,
    color: CW,
  },
  {
    text: "2. AUBE - Tunique blanche",
    x: 0.08,
    y: 0.31,
    sz: 0.035,
    color: CW,
  },
  {
    text: "3. CORDON - Ceinture",
    x: 0.08,
    y: 0.37,
    sz: 0.035,
    color: CW,
  },
  {
    text: "4. ÉTOLE - Bande d'étoffe brodée",
    x: 0.08,
    y: 0.43,
    sz: 0.035,
    color: CW,
  },
  {
    text: "5. CHASUBLE - Manteau ample",
    x: 0.08,
    y: 0.49,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Pour le Samuel :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "AUBE - Tunique blanche",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CW,
    bold: true,
  },
  {
    text: "Ou SURPLIS - Par-dessus la soutane",
    x: 0.08,
    y: 0.31,
    sz: 0.035,
    color: CW,
  },
  {
    type: "question",
    text: "Quel est le vêtement blanc du Samuel ?",
    options: [
      { text: "L'aube", isCorrect: true },
      { text: "La chasuble", isCorrect: false },
      { text: "L'étole", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S25 : Les Sacrements - Introduction
const S24_Events = [
  {
    text: "Chapitre 12 : Les Sacrements",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Signes institués par Jésus dans son Église",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    text: "7 sacrements au total",
    y: 0.26,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Les 4 catégories de sacrements :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "1. SACREMENTS À CARACTÈRE",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Reçus une seule fois dans la vie",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Baptême, Confirmation, Ordre",
    x: 0.08,
    y: 0.37,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "2. SACREMENTS DE GUÉRISON",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Purifient l'âme du chrétien",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Pénitence, Onction des malades",
    x: 0.08,
    y: 0.37,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "3. SACREMENTS D'INITIATION",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Préparation à la vie chrétienne",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Baptême, Communion, Confirmation",
    x: 0.08,
    y: 0.37,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "4. SACREMENTS DE SERVICE",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Concrétisent la vocation de service",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    text: "Ordre, Mariage",
    x: 0.08,
    y: 0.37,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "Combien y a-t-il de sacrements dans l'Église catholique ?",
    options: [
      { text: "7 sacrements", isCorrect: true },
      { text: "5 sacrements", isCorrect: false },
      { text: "10 sacrements", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S26 : Le Baptême
const S25_Events = [
  {
    text: "Le Sacrement de Baptême",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Porte d'entrée et premier de tous les sacrements",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Par le Baptême :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "✓ Nous recevons l'Esprit Saint",
    x: 0.1,
    y: 0.25,
    sz: 0.035,
    color: CG,
  },
  {
    text: "✓ Devenons enfants de Dieu",
    x: 0.1,
    y: 0.31,
    sz: 0.035,
    color: CG,
  },
  {
    text: "✓ Il nous lave du péché originel",
    x: 0.1,
    y: 0.37,
    sz: 0.035,
    color: CG,
  },
  {
    text: "✓ Nous fait entrer dans l'Église",
    x: 0.1,
    y: 0.43,
    sz: 0.035,
    color: CG,
  },
  {
    type: "SEP",
  },
  {
    text: "Symbole : L'EAU",
    y: 0.15,
    sz: 0.045,
    color: CB,
    bold: true,
  },
  {
    text: "Elle purifie et donne la vie",
    y: 0.23,
    sz: 0.035,
    color: CW,
  },
  {
    type: "question",
    text: "Que recevons-nous par le Baptême ?",
    options: [
      { text: "L'Esprit Saint et devenons enfants de Dieu", isCorrect: true },
      { text: "Uniquement le pardon des péchés", isCorrect: false },
      { text: "La confirmation directement", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S27 : La Messe - Déroulement
const S26_Events = [
  {
    text: "Chapitre 13 : La Messe",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Actualisation du sacrifice rédempteur de Jésus-Christ",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Les 4 grandes parties de la messe :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "I. INTRODUCTION",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Chant d'entrée, Signe de croix, Préparation pénitentielle",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "II. LITURGIE DE LA PAROLE",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Lectures, Psaume, Évangile, Homélie",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "III. LITURGIE EUCHARISTIQUE",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Offertoire, Prière eucharistique, Consécration, Communion",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "IV. CONCLUSION",
    x: 0.08,
    y: 0.25,
    sz: 0.038,
    color: CG,
    bold: true,
  },
  {
    text: "Bénédiction finale, Envoi en mission",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    type: "question",
    text: "Combien y a-t-il de parties dans la messe ?",
    options: [
      { text: "4 parties", isCorrect: true },
      { text: "3 parties", isCorrect: false },
      { text: "5 parties", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S28 : L'OPEM - Enfance Missionnaire
const S27_Events = [
  {
    text: "Chapitre 14 : L'OPEM",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Œuvre Pontificale de l'Enfance Missionnaire",
    y: 0.2,
    sz: 0.035,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Fondateur : Mgr Charles-Auguste de Forbin-Janson",
    y: 0.15,
    sz: 0.038,
    color: CW,
  },
  {
    text: "Date de naissance : 19 mars 1843",
    y: 0.21,
    sz: 0.038,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Les finalités de l'OPEM :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "1. Réveiller la conscience missionnaire chez les enfants",
    x: 0.08,
    y: 0.25,
    sz: 0.032,
    color: CW,
  },
  {
    text: "2. « Les enfants aiment les enfants »",
    x: 0.08,
    y: 0.31,
    sz: 0.032,
    color: CW,
  },
  {
    text: "3. « Les enfants aident les enfants »",
    x: 0.08,
    y: 0.37,
    sz: 0.032,
    color: CW,
  },
  {
    text: "4. « Les enfants évangélisent les enfants »",
    x: 0.08,
    y: 0.43,
    sz: 0.032,
    color: CW,
  },
  {
    type: "SEP",
  },
  {
    text: "Moyens spirituels :",
    y: 0.15,
    sz: 0.04,
    color: CY,
    bold: true,
  },
  {
    text: "• Un Ave Maria par jour",
    x: 0.08,
    y: 0.25,
    sz: 0.035,
    color: CW,
  },
  {
    text: "• Participation à l'Eucharistie",
    x: 0.08,
    y: 0.31,
    sz: 0.035,
    color: CW,
  },
  {
    text: "• Journée mondiale à l'Épiphanie",
    x: 0.08,
    y: 0.37,
    sz: 0.035,
    color: CW,
  },
  {
    type: "question",
    text: "Quel est le cri de ralliement de l'OPEM ?",
    options: [
      { text: "De tous les enfants du monde, toujours amis", isCorrect: true },
      { text: "Ensemble pour servir", isCorrect: false },
      { text: "Unis dans la prière", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S29 : Culture Générale - Bible (Ancien Testament)
const S28_Events = [
  {
    text: "Culture Générale - Ancien Testament",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    type: "question",
    text: "Qui est le premier homme créé par Dieu ?",
    options: [
      { text: "Adam", isCorrect: true },
      { text: "Noé", isCorrect: false },
      { text: "Abraham", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Qui a construit l'arche pour échapper au déluge ?",
    options: [
      { text: "Noé", isCorrect: true },
      { text: "Moïse", isCorrect: false },
      { text: "David", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Qui est appelé le père des croyants ?",
    options: [
      { text: "Abraham", isCorrect: true },
      { text: "Isaac", isCorrect: false },
      { text: "Jacob", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Qui a reçu les dix commandements ?",
    options: [
      { text: "Moïse", isCorrect: true },
      { text: "Aaron", isCorrect: false },
      { text: "Josué", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Qui a vaincu Goliath ?",
    options: [
      { text: "David", isCorrect: true },
      { text: "Saül", isCorrect: false },
      { text: "Samson", isCorrect: false },
    ],
  },
  {
    type: "question",
    isVerification: true,
    text: "Qui est la mère du prophète Samuel ?",
    options: [
      { text: "Anne", isCorrect: true },
      { text: "Marie", isCorrect: false },
      { text: "Sara", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S30 : Culture Générale - Nouveau Testament
const S29_Events = [
  {
    text: "Culture Générale - Nouveau Testament",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    type: "question",
    text: "Qui est la mère de Jésus ?",
    options: [
      { text: "Marie", isCorrect: true },
      { text: "Élisabeth", isCorrect: false },
      { text: "Marie-Madeleine", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Où est né Jésus ?",
    options: [
      { text: "Bethléem", isCorrect: true },
      { text: "Nazareth", isCorrect: false },
      { text: "Jérusalem", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Combien d'apôtres Jésus a-t-il choisis ?",
    options: [
      { text: "Douze", isCorrect: true },
      { text: "Dix", isCorrect: false },
      { text: "Sept", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Quel apôtre a trahi Jésus ?",
    options: [
      { text: "Judas Iscariote", isCorrect: true },
      { text: "Pierre", isCorrect: false },
      { text: "Jean", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Quel est le premier miracle de Jésus ?",
    options: [
      { text: "Changer l'eau en vin à Cana", isCorrect: true },
      { text: "Marcher sur l'eau", isCorrect: false },
      { text: "Guérir un aveugle", isCorrect: false },
    ],
  },
  {
    type: "question",
    isVerification: true,
    text: "Quelle fête célèbre la descente du Saint-Esprit ?",
    options: [
      { text: "La Pentecôte", isCorrect: true },
      { text: "Pâques", isCorrect: false },
      { text: "Noël", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// S31 : Culture Générale - Vie de l'Église
const S30_Events = [
  {
    text: "Culture Générale - Vie de l'Église",
    y: 0.1,
    sz: 0.06,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    type: "question",
    text: "Quel est le chef de l'Église catholique ?",
    options: [
      { text: "Le pape", isCorrect: true },
      { text: "L'évêque", isCorrect: false },
      { text: "Le prêtre", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Combien y a-t-il de sacrements dans l'Église catholique ?",
    options: [
      { text: "Sept", isCorrect: true },
      { text: "Cinq", isCorrect: false },
      { text: "Dix", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Quelle fête marque le début du Carême ?",
    options: [
      { text: "Le Mercredi des Cendres", isCorrect: true },
      { text: "Noël", isCorrect: false },
      { text: "Pâques", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Combien de jours dure le Carême ?",
    options: [
      { text: "40 jours", isCorrect: true },
      { text: "30 jours", isCorrect: false },
      { text: "50 jours", isCorrect: false },
    ],
  },
  {
    type: "question",
    text: "Quelle est la période de préparation à Noël ?",
    options: [
      { text: "L'Avent", isCorrect: true },
      { text: "Le Carême", isCorrect: false },
      { text: "Le Temps ordinaire", isCorrect: false },
    ],
  },
  {
    type: "question",
    isVerification: true,
    text: "Comment appelle-t-on la récitation de 50 « Je vous salue Marie » ?",
    options: [
      { text: "Un chapelet", isCorrect: true },
      { text: "Un rosaire", isCorrect: false },
      { text: "Une neuvaine", isCorrect: false },
    ],
    retryStart: 10,
  },
];

// ============================================================
// EXPORT DE TOUTES LES NOTIONS
// ============================================================


// Fin du fichier de notions complètes

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
    nextNotionId: 'S11'
    },



    'S11': {
    id: "S11",
    title: "Propriétés des triangles",
    events: S11_Events,
    nextNotionId: "S1", // ou la suite que tu prévois
    }, 

  S12: {
    id: "S12",
    title: "Puissances de 10 (exposants relatifs)",
    events: S12_Events,
    nextNotionId: "S13",
  },
  S13: {
    id: "S13",
    title: "Produit de puissances de 10",
    events: S13_Events,
    nextNotionId: "S14",
  },
  S14: {
    id: "S14",
    title: "Écriture scientifique a × 10ⁿ",
    events: S14_Events,
    nextNotionId: "S15",
  },
  S15: {
    id: "S15",
    title: "Produit en notation scientifique",
    events: S15_Events,
    nextNotionId: "S16",
  },
  S16: {
    id: "S16",
    title: "Encadrement par puissances de 10",
    events: S16_Events,
    nextNotionId: "S17",
},
    S17: { id: "S17", title: "Les Sacrements", events:S17_Events, nextNotionId: "S18" },
  S18: { id: "S18", title: "Les Prières Usuelles", events: S18_Events, nextNotionId: "S19" },
  S19: { id: "S19", title: "Le Calendrier Liturgique", events: S19_Events, nextNotionId: "S20" },
  S20: { id: "S20", title: "Les Couleurs Liturgiques", events: S20_Events, nextNotionId: "S21" },
  S21: { id: "S21", title: "Les Lieux dans une Église", events: S21_Events, nextNotionId: "S22" },
  S22: { id: "S22", title: "Les Vases Sacrés", events: S22_Events, nextNotionId: "S23" },
  S23: { id: "S23", title: "Les Linges d'Autel", events: S23_Events, nextNotionId: "S24" },
  S24: { id: "S24", title: "Les Vêtements Liturgiques", events: S24_Events, nextNotionId: "S25" },
  S25: { id: "S25", title: "Les Sacrements", events: S25_Events, nextNotionId: "S26" },
  S26: { id: "S26", title: "Le Baptême", events: S26_Events, nextNotionId: "S27" },
  S27: { id: "S27", title: "La Messe", events: S27_Events, nextNotionId: "S28" },
  S28: { id: "S28", title: "L'OPEM - Enfance Missionnaire", events: S28_Events, nextNotionId: "S29" },
  S29: { id: "S29", title: "Culture Générale - Ancien Testament", events: S29_Events, nextNotionId: "S30" },
  S30: { id: "S30", title: "Culture Générale - Nouveau Testament", events: S30_Events, nextNotionId: "S1" },
  
};

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
    { text: "Imagine que vous êtes 12 dans ta classe , le professeur te demande alors de vous diviser en groupes de 3.", id:'groupe_a_effacer',y: 0.25, sz: 0.035, color: CW },
    { text:"Combien de groupes de 3 pourra-t-on former ?", id:'groupe_a_effacer',y: 0.30, sz: 0.035, color: CW },

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
    

    {
        type: 'question',
        
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
        
    },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 2, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,       
        x0: 0.05
    },
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '2', result: '6', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 12 },
    
    {
        type: 'question',
        text: "Et pour des groupes de 1 ?",
        options: [
            { text: "1 groupe.", isCorrect: false },
            { text: "12 groupes.", isCorrect: true }
        ],
      
    },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 1, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '1', result: '12', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 12 },
    {
        type: 'question',
        text: "Et pour des groupes de 4 ?",
        options: [
            { text: "4 groupes.", isCorrect: false },
            { text: "3 groupes.", isCorrect: true }
        ],
        
    },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 4, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '4', result: '3', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 12 }, 
    {
        type: 'question',
        text: "Et pour des groupes de 6 ?",
        options: [
            { text: "6 groupes.", isCorrect: false },
            { text: "2 groupes.", isCorrect: true }
        ],
    },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 6, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05
    },
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '6', result: '2', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 12 },
    
    {
        type: 'question',
        text: "Et pour un groupe de 12 ?",
        options: [
            { text: "12 groupes.", isCorrect: false },
            { text: "1 groupe.", isCorrect: true }
        ],
    },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 12, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05,
        duration: 100
    },
    {type: 'vibrating_fraction', isSimulation: true, num: '12', den: '12', result: '1', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 50 },
    {
        type: 'question',
        text: "Et pour un groupe de 5 ?",
        options: [
            { text: "12 groupes.", isCorrect: false },
            { text: "2.4 groupes.", isCorrect: true }
        ],
    },
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { 
        type: 'traits_groupes', 
        isSimulation: true,
        nTraits: 12, 
        groupSize: 5, 
        duration: 800,
        yTop: 0.50, yBottom: 0.75,
        x0: 0.05,
        duration: 100
    },
    { type: 'vibrating_fraction', isSimulation: true, num: '12', den: '5', result: '2.4', x: 0.75, y: 0.60, sz: 0.07, color: '#f5e441', duration: 50 },
    {type:'clear', id:'groupe_a_effacer'},
    { text: "Remarque : ", y: 0.20, sz: 0.04, color: '#F5e441', bold: true },
    { text: "5 ne divise pas 12 en une ou plusieurs parties égales.", x: 0.20, y: 0.20, sz: 0.035, color: CW},
    { text: "Mais 12,1,2,3,4,6 le font. Ils sont appelés pour ce fait les diviseurs de 12.", x: 0.20, y: 0.25, sz: 0.035, color: CW},
    {type:'clear', target: 'vibrating_fraction'},
    {type:'clear', target: 'traits_groupes'},
    { text: "Résumé(à retenir) : ", y: 0.30, sz: 0.04, color: '#F5e441', bold: true },
    { text: "a est le diviseur de b si frac(b;a) donne un nombre entier naturel.", x: 0.27, y: 0.30, sz: 0.035, color: CW},
    { text: "En pratique : ", y: 0.35, sz: 0.04, color: '#F5e441', bold: true },
    { text: "On fait la division frac(b;a) sur la calculatrice et si la reponse", x: 0.21, y: 0.35, sz: 0.035, color: CW },
    { text: " n'est pas un nombre à virgule alors b est un diviseur de a.", x: 0.20, y: 0.40, sz: 0.035, color: CW },
    { text: "frac(12;12) = 1",x:20, y: 0.45, sz: 0.035, color: CW },
    { text: "frac(12;6) = 2",x: 0.20, y: 0.50, sz: 0.035, color: CW },
    { text: "frac(12;4) = 3",x: 0.20, y: 0.55, sz: 0.035, color: CW },
    { text: "frac(12;3) = 4",x: 0.20, y: 0.60, sz: 0.035, color: CW },
    { text: "frac(12;2) = 6",x: 0.20, y: 0.65, sz: 0.035, color: CW },
    { text: "frac(12;1) = 12",x: 0.20, y: 0.70, sz: 0.035, color: CW },
    { text: "frac(12;5) = 2.4",x: 0.20, y: 0.75, sz: 0.035, color: CW },
    { text: "5 n'est donc pas un diviseur de 12.", y: 0.80, sz: 0.04, color: CW},
];

const S2_Events = [
    { text: 'Notion : Nombres Premiers', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true,compteur: 15 },
    { text: "5 a combien de diviseurs ?", y: 0.25, sz: 0.035, color: CW },   
    
    { 
        type: 'question',
        text: "As-tu une idée ?",
        freeAnswer: true,
        expectedAnswer: "2 diviseurs"
    },
    { text: "frac(5;1) = 5", y: 0.35, sz: 0.035, color: CW },
    { text: "frac(5;2) = 2.5", y: 0.40, sz: 0.035, color: CW },
    { text: "frac(5;3) = 1.67", y: 0.45, sz: 0.035, color: CW },
    { text: "frac(5;4) = 1.25", y: 0.50, sz: 0.035, color: CW },
    { text: "frac(5;5) = 1", y: 0.55, sz: 0.035, color: CW },
    { text: "5 a donc 2 diviseurs : 1 et 5.", y: 0.65, sz: 0.035, color: CW },
    { text: "Tout nombre n'ayant que deux diviseurs, c'est-à-dire 1 et lui-même, est un NOMBRE PREMIER.", y: 0.70, sz: 0.035, color: CW },
    { text: "", y: 0.30, sz: 0.035, color: CW },
    { 
        type: 'question',
        text: " Si je comprends bien 5 est donc un nombre premier ?",
        freeAnswer: true,
        expectedAnswer: "Oui",
        proposedAnswer: "Oui",
        nextQuestion: {
            text: "Et 4 ?",
            freeAnswer: true,
            expectedAnswer: "Non",
            proposedAnswer: "Non, car il a trois diviseurs : 1, 2 et 4",
            nextQuestion: {
                text: "Et 7 ?",
                freeAnswer: true,
                expectedAnswer: "Oui",
                proposedAnswer: "Oui, car il a deux diviseurs : 1 et 7",
                nextQuestion: {
                    text: "Et 19 ?",
                    freeAnswer: true,
                    expectedAnswer: "Oui",
                    proposedAnswer: "Oui, car il a deux diviseurs : 1 et 19"
                }
            }
        }
    },
      
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
        
        text: "Cette écriture unique s'appelle le Théorème...",
        options: [
            { text: "...Fondamental", isCorrect: true },
            { text: "...de Pythagore", isCorrect: false }
        ],
        
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

// =====================================================================
// Notion S11 : Propriétés dans un triangle
// =====================================================================

const S11_Events = [
    // ---------- Titre ----------
    { text: "Notion_S11 : Propriétés dans un triangle", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ================= PARTIE 1 : LA DROITE DES MILIEUX =================
    { type: "SEP" },
    { text: "Partie 1 : La droite des milieux", y: 0.19, sz: 0.032, bold: true, color: CY },

    // Situation réelle (arpentage)
    { text: "Situation : un géomètre doit mesurer la largeur d'un lac.", y: 0.29, sz: 0.03, color: CW },
    { text: "Il ne peut pas traverser l'eau avec son décamètre.", y: 0.37, sz: 0.03, color: CW },
    { text: "Il plante un piquet A sur la berge, puis deux autres B et C", y: 0.45, sz: 0.03, color: CW },
    { text: "de chaque côté du lac, de sorte que A voit B et C.", y: 0.53, sz: 0.03, color: CW },
    { text: "Il repère les milieux B' et C' des segments [AB] et [AC],", y: 0.61, sz: 0.03, color: CW },
    { text: "puis mesure la distance B'C' = 15 m.", y: 0.69, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée pour trouver la largeur BC du lac ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
            { label: "BC = 30 m (le double)", value: { isCorrect: true } },
            { label: "BC = 15 m (la même)", value: { isCorrect: false } },
            { label: "BC = 7,5 m (la moitié)", value: { isCorrect: false } },
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ---------- Construction de la figure ----------
    { type: "SEP" },
    { text: "Construisons la figure", y: 0.19, sz: 0.032, bold: true, color: CY },
    // Triangle ABC
    { type: "line", x1: 0.25, y1: 0.28, x2: 0.10, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.10, y1: 0.68, x2: 0.45, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.45, y1: 0.68, x2: 0.25, y2: 0.28, color: CW, duration: 60 },
    { text: "A", x: 0.24, y: 0.25, sz: 0.028, bold: true, color: CW },
    { text: "B", x: 0.07, y: 0.72, sz: 0.028, bold: true, color: CW },
    { text: "C", x: 0.47, y: 0.72, sz: 0.028, bold: true, color: CW },
    // Milieux C' et B'
    { text: "C'", x: 0.14, y: 0.48, sz: 0.026, bold: true, color: CG },
    { text: "B'", x: 0.36, y: 0.48, sz: 0.026, bold: true, color: CG },
    // Segment des milieux (parallèle à BC)
    { type: "line", x1: 0.175, y1: 0.48, x2: 0.35, y2: 0.48, color: CG, duration: 60 },
    // Explications à droite
    { text: "C' est le milieu de [AB] : AC' = C'B.", x: 0.55, y: 0.3, sz: 0.03, color: CW },
    { text: "B' est le milieu de [AC] : AB' = B'C.", x: 0.55, y: 0.38, sz: 0.03, color: CW },
    { text: "On trace le segment [C'B'] (en vert).", x: 0.55, y: 0.48, sz: 0.03, color: CG },
    { text: "Il est parallèle à (BC) et moitié plus court.", x: 0.55, y: 0.58, sz: 0.03, color: CG },
    { type: "question", isVerification: true, text: "Donc C'B' est bien parallèle à BC, c'est bien ça ?", options: [
        { text: "Oui, les deux droites ne se coupent jamais.", isCorrect: true },
        { text: "Non, elles vont se croiser.", isCorrect: false },
    ]},
    { text: "Résultat : (C'B') // (BC) et C'B' = ½ × BC. ✓", x: 0.55, y: 0.68, sz: 0.03, color: CG },

    // ---------- Énoncé des 3 propriétés ----------
    { type: "SEP" },
    { text: "Les 3 propriétés de la droite des milieux", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Propriété 1 : si une droite passe par les milieux", y: 0.29, sz: 0.03, color: CW },
    { text: "de deux côtés d'un triangle, elle est parallèle", y: 0.37, sz: 0.03, color: CW },
    { text: "au troisième côté.", y: 0.45, sz: 0.03, color: CW },
    { text: "Propriété 2 : le segment joignant les milieux", y: 0.55, sz: 0.03, color: CW },
    { text: "de deux côtés mesure la moitié du troisième.", y: 0.63, sz: 0.03, color: CW },
    { text: "Propriété 3 : si une droite passe par le milieu d'un côté", y: 0.73, sz: 0.03, color: CW },

    { type: "SEP" },
    { text: "(suite de la propriété 3)", y: 0.19, sz: 0.028, italic: true, color: CY },
    { text: "et est parallèle à un deuxième côté,", y: 0.27, sz: 0.03, color: CW },
    { text: "alors elle coupe le troisième côté en son milieu.", y: 0.35, sz: 0.03, color: CW },
    { text: "Attention : cette propriété 3 est la réciproque de la 1.", y: 0.47, sz: 0.028, bold: true, color: CY },
    { text: "Elle sert à prouver qu'un point est un milieu,", y: 0.57, sz: 0.03, color: CW },
    { text: "alors que la 1 sert à prouver qu'une droite est parallèle.", y: 0.65, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Donc la propriété 3 sert à trouver un milieu, pas un parallélisme. C'est ça ?", options: [
        { text: "Oui, exactement.", isCorrect: true },
        { text: "Non, c'est la même chose.", isCorrect: false },
    ]},
    { text: "Résultat : P1 → prouve le parallélisme ; P3 → prouve le milieu. ✓", y: 0.73, sz: 0.03, color: CG },

    // ---------- Résolution du problème du lac ----------
    { type: "SEP" },
    { text: "Résolution du problème du lac", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Dans le triangle ABC :", y: 0.29, sz: 0.03, color: CW },
    { text: "• B' est le milieu de [AC] (par construction du géomètre)", y: 0.39, sz: 0.03, color: CW },
    { text: "• C' est le milieu de [AB] (par construction du géomètre)", y: 0.47, sz: 0.03, color: CW },
    { text: "D'après la propriété 2 : B'C' = ½ × BC.", y: 0.57, sz: 0.03, color: CW },
    { text: "Donc BC = 2 × B'C' = 2 × 15 = 30.", y: 0.65, sz: 0.03, color: CW },
    { text: "Résultat : La largeur du lac est 30 m. ✓", y: 0.75, sz: 0.03, bold: true, color: CG },

    // ================= PARTIE 2 : L'ORTHOCENTRE =================
    { type: "SEP" },
    { text: "Partie 2 : L'orthocentre", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Situation : un charpentier construit un toit triangulaire.", y: 0.29, sz: 0.03, color: CW },
    { text: "Il veut poser un poteau perpendiculaire à chaque mur,", y: 0.37, sz: 0.03, color: CW },
    { text: "en partant du sommet opposé. Où se croiseront-ils ?", y: 0.45, sz: 0.03, color: CW },

    { type: "question", text: "Les 3 poteaux (hauteurs) vont-ils se croiser ?", options: [
        { text: "Oui, en un seul point", value: { isCorrect: true } },
        { text: "Non, ils forment un petit triangle", value: { isCorrect: false } },
        { text: "Je ne sais pas", value: { isCorrect: false } },
    ]},

    // ---------- Figure : triangle + les 3 VRAIES hauteurs ----------
    { type: "SEP" },
    { text: "Construction des 3 hauteurs", y: 0.19, sz: 0.032, bold: true, color: CY },
    // Triangle ABC
    { type: "line", x1: 0.25, y1: 0.28, x2: 0.10, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.10, y1: 0.68, x2: 0.45, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.45, y1: 0.68, x2: 0.25, y2: 0.28, color: CW, duration: 60 },
    { text: "A", x: 0.24, y: 0.25, sz: 0.028, bold: true, color: CW },
    { text: "B", x: 0.07, y: 0.72, sz: 0.028, bold: true, color: CW },
    { text: "C", x: 0.47, y: 0.72, sz: 0.028, bold: true, color: CW },
    // Les 3 VRAIES hauteurs (vert) : perpendiculaires aux côtés, concourantes en H
    { type: "line", x1: 0.25, y1: 0.28, x2: 0.25, y2: 0.68, color: CG, duration: 60 },
    { type: "line", x1: 0.10, y1: 0.68, x2: 0.275, y2: 0.33, color: CG, duration: 60 },
    { type: "line", x1: 0.45, y1: 0.68, x2: 0.226, y2: 0.344, color: CG, duration: 60 },
    // Symboles de l'angle droit (petits carrés jaunes) aux 3 pieds
    { type: "line", x1: 0.2675, y1: 0.68, x2: 0.2675, y2: 0.645, color: CY, duration: 20 },
    { type: "line", x1: 0.2675, y1: 0.645, x2: 0.25, y2: 0.645, color: CY, duration: 20 },
    { type: "line", x1: 0.2874, y1: 0.3548, x2: 0.275, y2: 0.3795, color: CY, duration: 20 },
    { type: "line", x1: 0.275, y1: 0.3795, x2: 0.2626, y2: 0.3548, color: CY, duration: 20 },
    { type: "line", x1: 0.2155, y1: 0.372, x2: 0.2295, y2: 0.393, color: CY, duration: 20 },
    { type: "line", x1: 0.2295, y1: 0.393, x2: 0.24, y2: 0.365, color: CY, duration: 20 },
    { text: "H", x: 0.26, y: 0.39, sz: 0.024, bold: true, color: CY },
    // Explications
    { text: "Chaque hauteur part d'un sommet", x: 0.55, y: 0.3, sz: 0.03, color: CW },
    { text: "et tombe perpendiculairement sur le côté opposé.", x: 0.55, y: 0.38, sz: 0.03, color: CW },
    { text: "Les 3 hauteurs (vert) se croisent en un seul point H.", x: 0.55, y: 0.5, sz: 0.03, color: CG },
    { text: "Ce point H s'appelle l'ORTHOCENTRE du triangle.", x: 0.55, y: 0.6, sz: 0.03, bold: true, color: CY },
    { type: "question", isVerification: true, text: "Donc l'orthocentre est le point de concours des 3 hauteurs. C'est ça ?", options: [
        { text: "Oui, exactement.", isCorrect: true },
        { text: "Non, c'est celui des médianes.", isCorrect: false },
    ]},
    { text: "Résultat : Les 3 hauteurs sont concourantes en H (orthocentre). ✓", x: 0.55, y: 0.7, sz: 0.03, color: CG },

    // ---------- Position selon le type de triangle ----------
    { type: "SEP" },
    { text: "Position de l'orthocentre selon le triangle", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "• Triangle acutangle (angles aigus) :", y: 0.29, sz: 0.03, color: CW },
    { text: "l'orthocentre est à l'intérieur du triangle.", y: 0.37, sz: 0.03, color: CG },
    { text: "• Triangle rectangle :", y: 0.47, sz: 0.03, color: CW },
    { text: "l'orthocentre est au sommet de l'angle droit.", y: 0.55, sz: 0.03, color: CG },
    { text: "• Triangle obtusangle (un angle obtus) :", y: 0.65, sz: 0.03, color: CW },
    { text: "l'orthocentre est à l'extérieur du triangle.", y: 0.73, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "(suite)", y: 0.19, sz: 0.028, italic: true, color: CY },
    { text: "Pourquoi à l'extérieur dans le cas obtusangle ?", y: 0.27, sz: 0.03, color: CW },
    { text: "Parce que les hauteurs issues des sommets aigus", y: 0.37, sz: 0.03, color: CW },
    { text: "tombent sur les prolongements des côtés opposés.", y: 0.45, sz: 0.03, color: CW },
    { text: "Il faut donc prolonger les côtés pour tracer les hauteurs.", y: 0.55, sz: 0.03, color: CW },
    { text: "Le point d'intersection se retrouve alors hors du triangle.", y: 0.65, sz: 0.03, bold: true, color: CY },
    { type: "question", isVerification: true, text: "Donc un triangle rectangle a son orthocentre sur un sommet. C'est ça ?", options: [
        { text: "Oui, sur le sommet de l'angle droit.", isCorrect: true },
        { text: "Non, il est toujours à l'intérieur.", isCorrect: false },
    ]},
    { text: "Résultat : Rectangle → orthocentre au sommet de l'angle droit. ✓", y: 0.73, sz: 0.03, color: CG },

    // ---------- Résolution du problème du toit ----------
    { type: "SEP" },
    { text: "Résolution du problème du toit", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Les 3 poteaux sont les 3 hauteurs du triangle du toit.", y: 0.29, sz: 0.03, color: CW },
    { text: "Elles sont concourantes en un seul point : l'orthocentre H.", y: 0.39, sz: 0.03, color: CW },
    { text: "Le charpentier peut donc poser un poteau central en H", y: 0.49, sz: 0.03, color: CW },
    { text: "pour soutenir tout le toit.", y: 0.57, sz: 0.03, color: CW },
    { text: "Résultat : Le poteau central se place en H (orthocentre). ✓", y: 0.69, sz: 0.03, bold: true, color: CG },

    // ================= PARTIE 3 : LE CENTRE DE GRAVITÉ =================
    { type: "SEP" },
    { text: "Partie 3 : Le centre de gravité", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Situation : un sculpteur découpe une plaque triangulaire", y: 0.29, sz: 0.03, color: CW },
    { text: "en bois massif. Il veut la poser en équilibre sur un seul", y: 0.37, sz: 0.03, color: CW },
    { text: "doigt. Où faut-il poser le doigt ?", y: 0.45, sz: 0.03, color: CW },

    { type: "question", text: "Où placer le doigt pour que la plaque tienne ?", options: [
        { text: "Au point où se coupent les médianes", value: { isCorrect: true } },
        { text: "Au milieu d'un côté", value: { isCorrect: false } },
        { text: "À n'importe quel endroit", value: { isCorrect: false } },
    ]},

    // ---------- Figure : les 3 médianes ----------
    { type: "SEP" },
    { text: "Construction des 3 médianes", y: 0.19, sz: 0.032, bold: true, color: CY },
    // Triangle ABC
    { type: "line", x1: 0.25, y1: 0.28, x2: 0.10, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.10, y1: 0.68, x2: 0.45, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.45, y1: 0.68, x2: 0.25, y2: 0.28, color: CW, duration: 60 },
    { text: "A", x: 0.24, y: 0.25, sz: 0.028, bold: true, color: CW },
    { text: "B", x: 0.07, y: 0.72, sz: 0.028, bold: true, color: CW },
    { text: "C", x: 0.47, y: 0.72, sz: 0.028, bold: true, color: CW },
    // Milieux A', B', C'
    { text: "A'", x: 0.27, y: 0.72, sz: 0.026, bold: true, color: CB },
    { text: "B'", x: 0.36, y: 0.48, sz: 0.026, bold: true, color: CB },
    { text: "C'", x: 0.16, y: 0.48, sz: 0.026, bold: true, color: CB },
    // Les 3 médianes (bleu), concourantes en G
    { type: "line", x1: 0.25, y1: 0.28, x2: 0.275, y2: 0.68, color: CB, duration: 60 },
    { type: "line", x1: 0.10, y1: 0.68, x2: 0.35, y2: 0.48, color: CB, duration: 60 },
    { type: "line", x1: 0.45, y1: 0.68, x2: 0.175, y2: 0.48, color: CB, duration: 60 },
    { text: "G", x: 0.28, y: 0.51, sz: 0.025, bold: true, color: CY },
    // Explications
    { text: "Chaque médiane joint un sommet", x: 0.55, y: 0.3, sz: 0.03, color: CW },
    { text: "au milieu du côté opposé.", x: 0.55, y: 0.38, sz: 0.03, color: CW },
    { text: "Les 3 médianes (bleu) se coupent en un seul point G.", x: 0.55, y: 0.5, sz: 0.03, color: CB },
    { text: "Ce point G s'appelle le CENTRE DE GRAVITÉ.", x: 0.55, y: 0.6, sz: 0.03, bold: true, color: CY },
    { type: "question", isVerification: true, text: "Donc le centre de gravité est le point de concours des 3 médianes. C'est ça ?", options: [
        { text: "Oui, exactement.", isCorrect: true },
        { text: "Non, c'est celui des hauteurs.", isCorrect: false },
    ]},
    { text: "Résultat : Les 3 médianes sont concourantes en G. ✓", x: 0.55, y: 0.7, sz: 0.03, color: CG },

    // ---------- La règle des 2/3 ----------
    { type: "SEP" },
    { text: "Propriété fondamentale : la règle des 2/3", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Le centre de gravité G se situe aux 2/3 de chaque médiane", y: 0.29, sz: 0.03, color: CW },
    { text: "à partir du sommet.", y: 0.37, sz: 0.03, color: CW },
    { text: "Formellement, pour la médiane [AA'] :", y: 0.47, sz: 0.03, color: CW },
    // Fraction 2/3 construite (la barre ne coupe pas le texte)
    { text: "AG =", x: 0.25, y: 0.58, sz: 0.034, color: CG },
    { text: "2", x: 0.34, align: "center", y: 0.53, sz: 0.03, color: CG },
    { type: "line", x1: 0.315, y1: 0.575, x2: 0.365, y2: 0.575, color: CG, duration: 30 },
    { text: "3", x: 0.34, align: "center", y: 0.64, sz: 0.03, color: CG },
    { text: "× AA'", x: 0.4, y: 0.58, sz: 0.034, color: CG },
    { text: "et  GA' = 1/3 × AA'.", y: 0.72, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "(suite de la règle des 2/3)", y: 0.19, sz: 0.028, italic: true, color: CY },
    { text: "Pourquoi cette règle est-elle vraie ?", y: 0.27, sz: 0.03, color: CW },
    { text: "Imaginons que le triangle est fait d'une matière uniforme.", y: 0.37, sz: 0.03, color: CW },
    { text: "Son poids est réparti également sur toute la surface.", y: 0.47, sz: 0.03, color: CW },
    { text: "Le point d'équilibre (centre de gravité physique)", y: 0.57, sz: 0.03, color: CW },
    { text: "coïncide avec le point de concours des médianes.", y: 0.65, sz: 0.03, color: CW },
    { text: "C'est une propriété mathématique remarquable.", y: 0.73, sz: 0.028, bold: true, color: CY },

    { type: "question", isVerification: true, text: "Donc G est aux 2/3 de la médiane en partant du sommet. C'est ça ?", options: [
        { text: "Oui, 2/3 du côté du sommet, 1/3 du côté du milieu.", isCorrect: true },
        { text: "Non, c'est l'inverse : 1/3 du sommet.", isCorrect: false },
    ]},
    { text: "Résultat : G est aux 2/3 de la médiane depuis le sommet. ✓", y: 0.76, sz: 0.03, color: CG },

    // ---------- Résolution du problème du sculpteur ----------
    { type: "SEP" },
    { text: "Résolution du problème du sculpteur", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Pour que la plaque tienne en équilibre sur un doigt,", y: 0.29, sz: 0.03, color: CW },
    { text: "il faut la poser sur son centre de gravité G.", y: 0.39, sz: 0.03, color: CW },
    { text: "Pour trouver G, le sculpteur trace les 3 médianes :", y: 0.49, sz: 0.03, color: CW },
    { text: "il joint chaque sommet au milieu du côté opposé.", y: 0.57, sz: 0.03, color: CW },
    { text: "Les 3 médianes se coupent en G : il pose son doigt là.", y: 0.65, sz: 0.03, color: CW },
    { text: "Résultat : La plaque tient en équilibre sur G. ✓", y: 0.75, sz: 0.03, bold: true, color: CG },

    // ================= PARTIE 4 : TRIANGLES ISOCÈLE & ÉQUILATÉRAL =================
    { type: "SEP" },
    { text: "Partie 4 : Triangles isocèle et équilatéral", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Situation : un chevalet en forme de A a deux pieds égaux.", y: 0.29, sz: 0.03, color: CW },
    { text: "C'est un triangle isocèle. Sa barre du milieu", y: 0.37, sz: 0.03, color: CW },
    { text: "est à la fois hauteur, médiane et bissectrice !", y: 0.45, sz: 0.03, color: CW },

    // ---------- Figure triangle isocèle (traits d'égalité + angle droit) ----------
    { type: "SEP" },
    { text: "Triangle isocèle en A", y: 0.19, sz: 0.032, bold: true, color: CY },
    // Triangle ABC isocèle en A
    { type: "line", x1: 0.25, y1: 0.35, x2: 0.13, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.13, y1: 0.68, x2: 0.37, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.37, y1: 0.68, x2: 0.25, y2: 0.35, color: CW, duration: 60 },
    // Axe de symétrie (vert)
    { type: "line", x1: 0.25, y1: 0.35, x2: 0.25, y2: 0.68, color: CG, duration: 60 },
    // Marques d'égalité : AB = AC (petits traits jaunes)
    { type: "line", x1: 0.1819, y1: 0.5032, x2: 0.1981, y2: 0.5268, color: CY, duration: 20 },
    { type: "line", x1: 0.3019, y1: 0.5268, x2: 0.3181, y2: 0.5032, color: CY, duration: 20 },
    // Angle droit en I (petit carré jaune)
    { type: "line", x1: 0.265, y1: 0.68, x2: 0.265, y2: 0.65, color: CY, duration: 20 },
    { type: "line", x1: 0.265, y1: 0.65, x2: 0.25, y2: 0.65, color: CY, duration: 20 },
    { text: "A", x: 0.24, y: 0.32, sz: 0.026, bold: true, color: CW },
    { text: "B", x: 0.10, y: 0.72, sz: 0.026, bold: true, color: CW },
    { text: "C", x: 0.39, y: 0.72, sz: 0.026, bold: true, color: CW },
    { text: "I", x: 0.255, y: 0.72, sz: 0.026, bold: true, color: CG },
    // Explications
    { text: "Triangle isocèle en A : AB = AC.", x: 0.55, y: 0.35, sz: 0.03, color: CW },
    { text: "La droite (AI) issue de A, perpendiculaire à [BC],", x: 0.55, y: 0.45, sz: 0.03, color: CW },
    { text: "est à la fois :", x: 0.55, y: 0.55, sz: 0.03, color: CW },
    { text: "• HAUTEUR (perpendiculaire à BC)", x: 0.55, y: 0.63, sz: 0.028, color: CG },
    { text: "• MÉDIANE (I est le milieu de BC)", x: 0.55, y: 0.71, sz: 0.028, color: CG },

    { type: "SEP" },
    { text: "(suite)", y: 0.19, sz: 0.028, italic: true, color: CY },
    { text: "• BISECTRICE (partage l'angle A en 2 angles égaux)", y: 0.27, sz: 0.028, color: CG },
    { text: "• MÉDIATRICE de [BC] (perpendiculaire passant par le milieu)", y: 0.35, sz: 0.028, color: CG },
    { text: "(AI) est donc un axe de symétrie du triangle.", y: 0.47, sz: 0.03, bold: true, color: CY },
    { text: "C'est pourquoi un triangle isocèle est parfaitement", y: 0.57, sz: 0.03, color: CW },
    { text: "symétrique : les angles à la base sont égaux (B̂ = Ĉ).", y: 0.65, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Donc dans un triangle isocèle, la hauteur issue du sommet principal est aussi médiane. C'est ça ?", options: [
        { text: "Oui, et aussi bissectrice et médiatrice.", isCorrect: true },
        { text: "Non, seulement hauteur.", isCorrect: false },
    ]},
    { text: "Résultat : isocèle en A → (AI) = hauteur = médiane = bissectrice = médiatrice. ✓", y: 0.73, sz: 0.028, color: CG },

    // ---------- Triangle équilatéral ----------
    { type: "SEP" },
    { text: "Triangle équilatéral", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Définition : un triangle dont les 3 côtés sont égaux.", y: 0.29, sz: 0.03, color: CW },
    { text: "C'est un cas particulier de triangle isocèle :", y: 0.39, sz: 0.03, color: CW },
    { text: "il est isocèle en chaque sommet !", y: 0.47, sz: 0.03, color: CW },
    { text: "Conséquence : chaque médiane est aussi hauteur,", y: 0.59, sz: 0.03, color: CW },
    { text: "bissectrice et médiatrice.", y: 0.67, sz: 0.03, color: CW },
    { text: "Résultat : dans un équilatéral, les 4 centres", y: 0.75, sz: 0.028, bold: true, color: CY },

    // ---------- Figure équilatéral avec 3 traits d'égalité ----------
    { type: "SEP" },
    { text: "Figure : triangle équilatéral", y: 0.19, sz: 0.032, bold: true, color: CY },
    { type: "line", x1: 0.25, y1: 0.35, x2: 0.13, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.13, y1: 0.68, x2: 0.37, y2: 0.68, color: CW, duration: 60 },
    { type: "line", x1: 0.37, y1: 0.68, x2: 0.25, y2: 0.35, color: CW, duration: 60 },
    // Même trait sur les 3 côtés : AB = AC = BC
    { type: "line", x1: 0.1819, y1: 0.5032, x2: 0.1981, y2: 0.5268, color: CY, duration: 20 },
    { type: "line", x1: 0.3019, y1: 0.5268, x2: 0.3181, y2: 0.5032, color: CY, duration: 20 },
    { type: "line", x1: 0.25, y1: 0.66, x2: 0.25, y2: 0.7, color: CY, duration: 20 },
    { text: "A", x: 0.24, y: 0.32, sz: 0.026, bold: true, color: CW },
    { text: "B", x: 0.10, y: 0.72, sz: 0.026, bold: true, color: CW },
    { text: "C", x: 0.39, y: 0.72, sz: 0.026, bold: true, color: CW },
    { text: "Même trait sur les 3 côtés :", x: 0.55, y: 0.4, sz: 0.03, color: CW },
    { text: "AB = AC = BC.", x: 0.55, y: 0.5, sz: 0.03, bold: true, color: CG },

    { type: "SEP" },
    { text: "(fin du triangle équilatéral)", y: 0.19, sz: 0.028, italic: true, color: CY },
    { text: "(orthocentre, centre de gravité, centre du cercle inscrit", y: 0.27, sz: 0.03, color: CW },
    { text: "et centre du cercle circonscrit) sont CONFONDUS.", y: 0.35, sz: 0.03, color: CW },
    { text: "C'est le triangle le plus symétrique qui existe.", y: 0.47, sz: 0.03, bold: true, color: CG },
    { text: "Ses 3 angles valent 60° chacun.", y: 0.57, sz: 0.03, color: CW },
    { text: "Propriété réciproque :", y: 0.69, sz: 0.03, bold: true, color: CY },
    { text: "si dans un triangle, deux droites spéciales (médiane,", y: 0.75, sz: 0.028, color: CW },

    { type: "SEP" },
    { text: "(fin de la propriété réciproque)", y: 0.19, sz: 0.028, italic: true, color: CY },
    { text: "hauteur, bissectrice ou médiatrice) coïncident,", y: 0.27, sz: 0.03, color: CW },
    { text: "alors le triangle est isocèle.", y: 0.35, sz: 0.03, bold: true, color: CG },
    { text: "Exemple : si la médiane issue de A est aussi hauteur,", y: 0.47, sz: 0.03, color: CW },
    { text: "alors AB = AC et le triangle est isocèle en A.", y: 0.57, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Donc si la médiane d'un sommet est aussi la hauteur, le triangle est isocèle. C'est ça ?", options: [
        { text: "Oui, c'est la réciproque de la propriété.", isCorrect: true },
        { text: "Non, on ne peut rien conclure.", isCorrect: false },
    ]},
    { text: "Résultat : médiane = hauteur → triangle isocèle. ✓", y: 0.73, sz: 0.03, color: CG },

    // ================= EXERCICES D'APPLICATION (SITUATIONS-PROBLÈMES) =================
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY },

    // Exercice 1 : Situation-problème d'arpentage
    { text: "Exercice 1 : L'arpenteur et la rivière", y: 0.29, sz: 0.03, bold: true, color: CY },
    { text: "Un arpenteur veut mesurer la largeur AB d'une rivière.", y: 0.37, sz: 0.03, color: CW },
    { text: "Il place un point C sur sa rive. Il mesure [AC] = 40 m.", y: 0.45, sz: 0.03, color: CW },
    { text: "Il trouve le milieu M de [AC], et depuis M, il mesure", y: 0.53, sz: 0.03, color: CW },
    { text: "la distance jusqu'au point N, milieu de [BC] : MN = 18 m.", y: 0.61, sz: 0.03, color: CW },
    { text: "Combien mesure la largeur AB de la rivière ?", y: 0.69, sz: 0.03, bold: true, color: CY },

    { type: "question", isVerification: true, text: "AB = 36 m (car MN = AB/2). C'est bien ça ?", options: [
        { text: "Oui, d'après la propriété 2 (droite des milieux).", isCorrect: true },
        { text: "Non, AB = 18 m.", isCorrect: false },
        { text: "Non, AB = 72 m.", isCorrect: false },
    ]},
    { type: "SEP" },
    { text: "Résolution de l'exercice 1", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Dans le triangle ABC, M est milieu de [AC]", y: 0.29, sz: 0.028, color: CW },
    { text: "et N est milieu de [BC]. D'après P2 : MN = AB/2.", y: 0.37, sz: 0.028, color: CW },
    { text: "Donc AB = 2 × 18 = 36 m. ✓", y: 0.47, sz: 0.028, color: CG },

    // Exercice 2 : Situation-problème de physique/géométrie
    { type: "SEP" },
    { text: "Exercice 2 : La plaque triangulaire en équilibre", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Une plaque triangulaire métallique ABC a pour médiane [AA']", y: 0.29, sz: 0.03, color: CW },
    { text: "de longueur 12 cm. On la pose sur un clou en G.", y: 0.37, sz: 0.03, color: CW },
    { text: "a) Calcule la distance AG.", y: 0.47, sz: 0.03, color: CW },
    { text: "b) Calcule la distance GA'.", y: 0.55, sz: 0.03, color: CW },
    { text: "c) Justifie pourquoi la plaque tient en équilibre sur G.", y: 0.63, sz: 0.03, color: CW },

    { type: "question", isVerification: true, text: "a) AG = 8 cm et b) GA' = 4 cm. C'est bien ça ?", options: [
        { text: "Oui, car AG = 2/3 × 12 = 8 et GA' = 1/3 × 12 = 4.", isCorrect: true },
        { text: "Non, AG = 4 et GA' = 8.", isCorrect: false },
        { text: "Non, AG = GA' = 6.", isCorrect: false },
    ]},
    { type: "SEP" },
    { text: "Résolution de l'exercice 2", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "G est le centre de gravité (point d'équilibre).", y: 0.29, sz: 0.028, color: CW },
    { text: "AG = (2/3) × AA' = (2/3) × 12 = 8 cm.", y: 0.37, sz: 0.028, color: CW },
    { text: "GA' = (1/3) × 12 = 4 cm.", y: 0.45, sz: 0.028, color: CW },
    { text: "La plaque tient car G répartit parfaitement le poids. ✓", y: 0.55, sz: 0.028, color: CG },

    // Exercice 3 : Situation-problème de construction
    { type: "SEP" },
    { text: "Exercice 3 : La ferme triangulaire", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Dans une ferme triangulaire ABC, on sait que :", y: 0.29, sz: 0.03, color: CW },
    { text: "• La médiane issue de A est aussi hauteur.", y: 0.37, sz: 0.03, color: CW },
    { text: "a) Que peut-on dire du triangle ABC ?", y: 0.47, sz: 0.03, color: CW },
    { text: "b) L'orthocentre H et le centre de gravité G", y: 0.55, sz: 0.03, color: CW },
    { text: "sont-ils sur la médiane [AA'] ? Justifie.", y: 0.63, sz: 0.03, color: CW },

    { type: "question", isVerification: true, text: "a) ABC est isocèle en A ; b) H et G sont sur [AA']. C'est bien ça ?", options: [
        { text: "Oui : médiane = hauteur → isocèle. Donc H et G sont sur l'axe.", isCorrect: true },
        { text: "Non, le triangle est équilatéral.", isCorrect: false },
        { text: "Non, H et G ne sont pas alignés.", isCorrect: false },
    ]},
    { type: "SEP" },
    { text: "Résolution de l'exercice 3", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "a) D'après la réciproque, médiane = hauteur", y: 0.29, sz: 0.028, color: CW },
    { text: "implique AB = AC, donc triangle isocèle en A.", y: 0.37, sz: 0.028, color: CW },
    { text: "b) Dans un triangle isocèle en A, l'axe de symétrie (AA')", y: 0.47, sz: 0.028, color: CW },
    { text: "porte à la fois H, G, médiane et hauteur. ✓", y: 0.55, sz: 0.028, color: CG },

    // Exercice 4 : Problème de synthèse
    { type: "SEP" },
    { text: "Exercice 4 : Problème de synthèse", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Dans un triangle ABC, on sait que :", y: 0.29, sz: 0.03, color: CW },
    { text: "• H (orthocentre), G (centre de gravité) et O (centre", y: 0.37, sz: 0.03, color: CW },
    { text: "du cercle circonscrit) sont alignés.", y: 0.45, sz: 0.03, color: CW },
    { text: "Cette droite s'appelle la DROITE D'EULER.", y: 0.55, sz: 0.03, bold: true, color: CY },
    { text: "De plus, on a toujours : GH = 2 × GO.", y: 0.65, sz: 0.03, color: CW },
    { text: "Si GO = 5 cm, que vaut GH ? Et OH ?", y: 0.73, sz: 0.03, color: CW },

    { type: "question", isVerification: true, text: "GH = 10 cm et OH = 15 cm. C'est bien ça ?", options: [
        { text: "Oui : GH = 2 × 5 = 10 et OH = GO + GH = 15.", isCorrect: true },
        { text: "Non, GH = 2,5 cm.", isCorrect: false },
        { text: "Non, OH = 5 cm.", isCorrect: false },
    ]},
    { type: "SEP" },
    { text: "Résolution de l'exercice 4", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "GH = 2 × GO = 2 × 5 = 10 cm.", y: 0.29, sz: 0.028, color: CW },
    { text: "O, G et H étant alignés dans cet ordre :", y: 0.37, sz: 0.028, color: CW },
    { text: "OH = OG + GH = 5 + 10 = 15 cm. ✓", y: 0.45, sz: 0.028, color: CG },
    { text: "Bonus : cette droite d'Euler existe dans TOUT triangle.", y: 0.57, sz: 0.028, bold: true, color: CY },
];

// =====================================================================
// Notion S12 : Puissances de 10 à exposants entiers relatifs (10⁻ⁿ)
// =====================================================================
const S12_Events = [
    // ---------- Titre ----------
    { text: "Notion_S12 : Puissances de 10 à exposants entiers relatifs", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ========== PHASE 1 : Situation réelle de la vie ==========
    { text: "Situation : ", x: 0.05, y: 0.19, sz: 0.03, color: CY },
    { text: "Le diamètre d'un cheveu mesure environ 0,0001 m.", x: 0.17, y: 0.19, sz: 0.03, color: CW },
    { text: "La distance Terre-Soleil est d'environ 150 000 000 000 m.", x: 0.17, y: 0.27, sz: 0.03, color: CW },
    { text: "Problème : ", x: 0.05, y: 0.35, sz: 0.03, color: CY },
    { text: "Comment écrire 0,0001 simplement avec une puissance de 10 ?", x: 0.17, y: 0.35, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
            { label: "0,0001 = 10⁻⁴", value: { isCorrect: true } },
            { label: "0,0001 = 10⁴", value: { isCorrect: false } },
            { label: "0,0001 = 10⁻³", value: { isCorrect: false } },
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ========== PHASE 2 : Rappel détaillé des puissances positives ==========
    { type: "SEP" },
    { text: "Rappel : ce qu'on connaît déjà", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "10¹ = 10", y: 0.29, sz: 0.03, color: CW },
    { text: "10² = 10 × 10 = 100", y: 0.37, sz: 0.03, color: CW },
    { text: "10³ = 10 × 10 × 10 = 1 000", y: 0.45, sz: 0.03, color: CW },
    { text: "10⁴ = 10 × 10 × 10 × 10 = 10 000", y: 0.53, sz: 0.03, color: CW },
    { text: "10⁵ = 100 000 (un 1 suivi de 5 zéros)", y: 0.61, sz: 0.03, color: CW },
    { text: "Règle : l'exposant indique le nombre de zéros après le 1.", y: 0.69, sz: 0.028, bold: true, color: CY },

    { type: "question", isVerification: true, text: "Alors 10⁶, c'est bien 1 000 000 ?", options: [
        { text: "Oui, un 1 suivi de 6 zéros.", isCorrect: true },
        { text: "Non, 10⁶ = 60.", isCorrect: false },
        { text: "Non, 10⁶ = 106.", isCorrect: false },
    ]},
    { text: "Résultat : 10⁶ = 1 000 000 ✓", y: 0.5, sz: 0.03, color: CG },

    // ========== PHASE 3 : Observation du pattern en descendant ==========
    { type: "SEP" },
    { text: "Observons ce qui se passe quand on DIVISE par 10", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "10⁴ = 10 000", y: 0.29, sz: 0.03, color: CW },
    { text: "10³ = 1 000  (on enlève un zéro)", y: 0.37, sz: 0.03, color: CW },
    { text: "10² = 100  (on enlève encore un zéro)", y: 0.45, sz: 0.03, color: CW },
    { text: "10¹ = 10  (on enlève encore un zéro)", y: 0.53, sz: 0.03, color: CW },
    { text: "Et si on continue à diviser par 10 ?", y: 0.63, sz: 0.028, color: CY },

    { type: "question", isVerification: true, text: "10¹ ÷ 10 = 10 ÷ 10, ça donne combien ?", options: [
        { text: "1", isCorrect: true },
        { text: "0", isCorrect: false },
        { text: "10", isCorrect: false },
    ]},
    { text: "Résultat : 10¹ ÷ 10 = 10 ÷ 10 = 1", y: 0.5, sz: 0.03, color: CG },

    // ========== PHASE 4 : Introduction de 10⁰ puis 10⁻ⁿ ==========
    { type: "SEP" },
    { text: "Donc : 10⁰ = 1", y: 0.19, sz: 0.032, bold: true, color: CG },
    { text: "Continuons à diviser par 10 :", y: 0.3, sz: 0.03, color: CW },
    { text: "10⁻¹ = 1 ÷ 10 = 0,1", y: 0.4, sz: 0.03, color: CW },
    { text: "10⁻² = 0,1 ÷ 10 = 0,01", y: 0.48, sz: 0.03, color: CW },
    { text: "10⁻³ = 0,01 ÷ 10 = 0,001", y: 0.56, sz: 0.03, color: CW },
    { text: "10⁻⁴ = 0,001 ÷ 10 = 0,0001", y: 0.64, sz: 0.03, bold: true, color: CG },

    { type: "question", isVerification: true, text: "Si j'ai bien compris, on continue à diviser par 10 à chaque fois ?", options: [
        { text: "Oui, c'est exactement ça.", isCorrect: true },
        { text: "Non, on multiplie.", isCorrect: false },
    ]},
    { text: "Résultat : À chaque exposant −1, on divise par 10. ✓", y: 0.5, sz: 0.03, color: CG },

    // ========== PHASE 5 : Définition formelle ==========
    { type: "SEP" },
    { text: "Définition : ", x: 0.05, y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Pour tout entier positif n :", y: 0.28, sz: 0.03, color: CW },
    { text: "10⁻ⁿ =", x: 0.19, y: 0.41, sz: 0.034, color: CG },
    { text: "1", x: 0.32, align: "center", y: 0.36, sz: 0.03, color: CG },
    { type: "line", x1: 0.295, y1: 0.405, x2: 0.345, y2: 0.405, color: CG, duration: 30 },
    { text: "10ⁿ", x: 0.32, align: "center", y: 0.47, sz: 0.03, color: CG },
    { text: "C'est l'inverse de 10ⁿ.", x: 0.38, y: 0.415, sz: 0.028, color: CW },
    { text: "En décimal : 0,00…01 (avec n chiffres après la virgule).", y: 0.57, sz: 0.028, color: CW },
    { type: "line", x1: 0.14, y1: 0.61, x2: 0.56, y2: 0.61, color: CW, duration: 30 },
    { text: "n chiffres après la virgule", x: 0.19, y: 0.67, sz: 0.024, color: CW },

    // ========== PHASE 6 : Plusieurs exemples ==========
    { type: "SEP" },
    { text: "Exemples : ", x: 0.05, y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "10⁻¹ = 0,1  (1 chiffre après la virgule)", y: 0.29, sz: 0.03, color: CW },
    { text: "10⁻² = 0,01  (2 chiffres après la virgule)", y: 0.37, sz: 0.03, color: CW },
    { text: "10⁻³ = 0,001  (3 chiffres après la virgule)", y: 0.45, sz: 0.03, color: CW },
    { text: "10⁻⁶ = 0,000 001  (6 chiffres après la virgule)", y: 0.53, sz: 0.03, color: CW },
    { text: "Astuce : l'exposant négatif = le nombre de chiffres après la virgule.", y: 0.63, sz: 0.028, bold: true, color: CY },

    // ========== PHASE 7 : Résolution du problème initial ==========
    { type: "SEP" },
    { text: "Reprenons le problème : 0,0001 = ?", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "0,0001 a 4 chiffres après la virgule.", y: 0.29, sz: 0.03, color: CW },
    { text: "Donc l'exposant est −4.", y: 0.37, sz: 0.03, color: CW },
    { text: "10⁻⁴ = 0,0001", y: 0.47, sz: 0.034, bold: true, color: CG },
    { text: "Résultat : Le diamètre du cheveu s'écrit 10⁻⁴ m. ✓", y: 0.57, sz: 0.032, bold: true, color: CG },

    // ========== EXERCICES D'APPLICATION ==========
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY, isTitle: false },
    { text: "Exercice 1 : Écris 0,001 sous la forme 10ⁿ.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "0,001 = 10⁻³, c'est bien ça ?", options: [
        { text: "Oui, 3 chiffres après la virgule.", isCorrect: true },
        { text: "Non, c'est 10⁻².", isCorrect: false },
        { text: "Non, c'est 10³.", isCorrect: false },
    ]},
    { text: "Résultat : 0,001 = 10⁻³ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 2 : Écris 10⁻⁵ sous forme décimale.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "10⁻⁵ = 0,00001. C'est bien ça ?", options: [
        { text: "Oui, un 1 à la 5ᵉ place après la virgule.", isCorrect: true },
        { text: "Non, 10⁻⁵ = 0,00005.", isCorrect: false },
        { text: "Non, 10⁻⁵ = −50.", isCorrect: false },
    ]},
    { text: "Résultat : 10⁻⁵ = 0,00001 ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 3 : La masse d'un grain de sable est 0,000 01 kg.", y: 0.29, sz: 0.03, color: CW },
    { text: "Écris cette masse sous la forme 10ⁿ.", y: 0.37, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "0,000 01 = 10⁻⁵. C'est bien ça ?", options: [
        { text: "Oui, 5 chiffres après la virgule.", isCorrect: true },
        { text: "Non, 10⁻⁶.", isCorrect: false },
        { text: "Non, 10⁵.", isCorrect: false },
    ]},
    { text: "Résultat : 0,000 01 kg = 10⁻⁵ kg ✓", y: 0.55, sz: 0.03, color: CG },
];

// =====================================================================
// Notion S13 : Écriture d'un nombre décimal sous la forme a × 10ⁿ
// =====================================================================
const S13_Events = [
    // ---------- Titre ----------
    { text: "Notion_S13 : Écrire un nombre sous la forme a × 10ⁿ avec a et n des entiers relatifs", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ========== PHASE 1 : Situation réelle de la vie ==========
    { text: "Situation : ", x: 0.05, y: 0.19, sz: 0.03, color: CY },
    { text: "À la pharmacie, un flacon contient 0,45 L de sirop.", x: 0.17, y: 0.19, sz: 0.03, color: CW },
    { text: "La masse de la Lune est 73 000 000 000 000 000 000 000 kg.", x: 0.17, y: 0.27, sz: 0.03, color: CW },
    { text: "Problème : ", x: 0.05, y: 0.35, sz: 0.03, color: CY },
    { text: "Comment écrire 0,45 sous la forme a × 10ⁿ (a et n entiers) ?", x: 0.17, y: 0.35, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
            { label: "0,45 = 45 × 10⁻²", value: { isCorrect: true } },
            { label: "0,45 = 45 × 10²", value: { isCorrect: false } },
            { label: "0,45 = 4,5 × 10⁻¹ (a décimal)", value: { isCorrect: false } },
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ========== PHASE 2 : Démonstration par les fractions ==========
    { type: "SEP" },
    { text: "Démontrons pas à pas", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Rappel : 0,45, c'est 45 centièmes.", y: 0.29, sz: 0.03, color: CW },
    { text: "0,45 =", x: 0.08, y: 0.42, sz: 0.034, color: CW },
    { text: "45", x: 0.26, align: "center", y: 0.36, sz: 0.03, color: CW },
    { type: "line", x1: 0.23, y1: 0.41, x2: 0.29, y2: 0.41, color: CW, duration: 30 },
    { text: "100", x: 0.26, align: "center", y: 0.47, sz: 0.03, color: CW },

    { text: "= 45 ×", x: 0.33, y: 0.42, sz: 0.034, color: CW },
    { text: "1", x: 0.46, align: "center", y: 0.36, sz: 0.03, color: CW },
    { type: "line", x1: 0.43, y1: 0.41, x2: 0.49, y2: 0.41, color: CW, duration: 30 },
    { text: "100", x: 0.46, align: "center", y: 0.47, sz: 0.03, color: CW },

    { text: "= 45 × 10⁻²", x: 0.54, y: 0.42, sz: 0.034, bold: true, color: CG },
    { text: "Car on sait que 1/100 = 10⁻² (notion précédente).", y: 0.57, sz: 0.028, color: CW },

    { type: "question", isVerification: true, text: "Donc 0,45 = 45 × 10⁻², c'est juste ?", options: [
        { text: "Oui, a = 45 et n = −2.", isCorrect: true },
        { text: "Non, a = 4,5.", isCorrect: false },
    ]},
    { text: "Résultat : 0,45 = 45 × 10⁻² ✓", y: 0.5, sz: 0.03, color: CG },

    // ========== PHASE 3 : La méthode pas à pas ==========
    { type: "SEP" },
    { text: "Méthode en 2 étapes", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Étape 1 : trouver a (le nombre sans la virgule).", y: 0.3, sz: 0.03, color: CW },
    { text: "Pour 0,45, on enlève la virgule → a = 45.", y: 0.39, sz: 0.03, color: CW },
    { text: "Étape 2 : trouver n (combien de fois on a décalé la virgule).", y: 0.5, sz: 0.03, color: CW },
    { text: "De 0,45 à 45, on a décalé la virgule de 2 rangs vers la droite.", y: 0.59, sz: 0.03, color: CW },
    { text: "Donc n = −2 (décalage vers la droite → exposant négatif).", y: 0.68, sz: 0.028, bold: true, color: CY },

    // ========== PHASE 4 : Règle pratique ==========
    { type: "SEP" },
    { text: "Règle pratique", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Si le nombre est plus petit que 1 (avec virgule) :", y: 0.29, sz: 0.03, color: CW },
    { text: "   → n est négatif (exposant négatif).", y: 0.37, sz: 0.03, color: CW },
    { text: "Si le nombre est grand (avec des zéros à la fin) :", y: 0.47, sz: 0.03, color: CW },
    { text: "   → n est positif (exposant positif).", y: 0.55, sz: 0.03, color: CW },
    { text: "Exemple : 4500 = 45 × 10² (2 zéros enlevés → n = 2).", y: 0.65, sz: 0.03, color: CG },

    { type: "question", isVerification: true, text: "Donc 7360 = 736 × 10¹, c'est bien ça ?", options: [
        { text: "Oui, on enlève 1 zéro, donc n = 1.", isCorrect: true },
        { text: "Non, c'est 736 × 10².", isCorrect: false },
    ]},
    { text: "Résultat : 7360 = 736 × 10¹ ✓", y: 0.5, sz: 0.03, color: CG },

    // ========== PHASE 5 : Exemples variés ==========
    { type: "SEP" },
    { text: "Exemples variés", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "0,7 = 7 × 10⁻¹", y: 0.29, sz: 0.03, color: CW },
    { text: "0,08 = 8 × 10⁻²", y: 0.37, sz: 0.03, color: CW },
    { text: "0,006 = 6 × 10⁻³", y: 0.45, sz: 0.03, color: CW },
    { text: "500 = 5 × 10²", y: 0.53, sz: 0.03, color: CW },
    { text: "80 000 = 8 × 10⁴", y: 0.61, sz: 0.03, color: CW },

    // ========== PHASE 6 : Remarque importante ==========
    { type: "SEP" },
    { text: "Remarque : plusieurs écritures possibles", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Un même nombre peut s'écrire de plusieurs façons.", y: 0.29, sz: 0.03, color: CW },
    { text: "4500 = 45 × 10²", y: 0.39, sz: 0.03, color: CW },
    { text: "4500 = 450 × 10¹", y: 0.47, sz: 0.03, color: CW },
    { text: "4500 = 4500 × 10⁰", y: 0.55, sz: 0.03, color: CW },
    { text: "4500 = 45 000 × 10⁻¹", y: 0.63, sz: 0.03, color: CW },
    { text: "Contrainte : a et n doivent être des entiers relatifs.", y: 0.73, sz: 0.028, bold: true, color: CY },

    // ========== PHASE 7 : Résolution du problème ==========
    { type: "SEP" },
    { text: "Résolution du problème : 0,45 L de sirop", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Étape 1 : a = 45 (nombre sans virgule).", y: 0.29, sz: 0.03, color: CW },
    { text: "Étape 2 : 2 chiffres après la virgule → n = −2.", y: 0.37, sz: 0.03, color: CW },
    { text: "0,45 = 45 × 10⁻²", y: 0.47, sz: 0.034, bold: true, color: CG },
    { text: "Résultat : 0,45 L = 45 × 10⁻² L, avec a = 45 et n = −2. ✓", y: 0.57, sz: 0.032, bold: true, color: CG },

    // ========== EXERCICES D'APPLICATION ==========
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Exercice 1 : Écris 0,073 sous la forme a × 10ⁿ.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "0,073 = 73 × 10⁻³, c'est bien ça ?", options: [
        { text: "Oui, a = 73 et n = −3.", isCorrect: true },
        { text: "Non, c'est 7,3 × 10⁻².", isCorrect: false },
        { text: "Non, c'est 73 × 10³.", isCorrect: false },
    ]},
    { text: "Résultat : 0,073 = 73 × 10⁻³ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 2 : Écris 2500 sous la forme a × 10ⁿ.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "2500 = 25 × 10², c'est bien ça ?", options: [
        { text: "Oui, on enlève 2 zéros, donc n = 2.", isCorrect: true },
        { text: "Non, 2500 = 250 × 10².", isCorrect: false },
        { text: "Non, 2500 = 25 × 10⁻².", isCorrect: false },
    ]},
    { text: "Résultat : 2500 = 25 × 10² ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 3 : La distance Terre-Lune est 384 000 000 m.", y: 0.29, sz: 0.03, color: CW },
    { text: "Écris cette distance sous la forme a × 10ⁿ.", y: 0.37, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "384 000 000 = 384 × 10⁶, c'est bien ça ?", options: [
        { text: "Oui, 6 zéros enlevés, donc n = 6.", isCorrect: true },
        { text: "Non, 384 × 10⁵.", isCorrect: false },
        { text: "Non, 384 × 10⁻⁶.", isCorrect: false },
    ]},
    { text: "Résultat : 384 000 000 m = 384 × 10⁶ m ✓", y: 0.55, sz: 0.03, color: CG },
];

// =====================================================================
// Notion S14 : Produit de deux nombres écrits sous la forme a × 10ⁿ
// =====================================================================
const S14_Events = [
    // ---------- Titre ----------
    { text: "Notion S_14 : Produit de deux nombres écrits sous la forme a × 10ⁿ", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ========== PHASE 1 : Situation réelle de la vie ==========
    { text: "Situation : ", x: 0.05, y: 0.19, sz: 0.03, color: CY },
    { text: "Un laboratoire commande des boîtes de comprimés.", x: 0.17, y: 0.19, sz: 0.03, color: CW },
    { text: "Chaque boîte contient 3 × 10⁴ comprimés (30 000).", x: 0.17, y: 0.27, sz: 0.03, color: CW },
    { text: "Le laboratoire commande 2 × 10² boîtes (200).", x: 0.17, y: 0.35, sz: 0.03, color: CW },
    { text: "Problème : ", x: 0.05, y: 0.43, sz: 0.03, color: CY },
    { text: "Combien de comprimés au total ? Calcule (3 × 10⁴) × (2 × 10²).", x: 0.17, y: 0.43, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
            { label: "6 × 10⁶", value: { isCorrect: true } },
            { label: "6 × 10⁸", value: { isCorrect: false } },
            { label: "5 × 10⁶", value: { isCorrect: false } },
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ========== PHASE 2 : Démonstration pas à pas ==========
    { type: "SEP" },
    { text: "Démontrons pas à pas", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "(3 × 10⁴) × (2 × 10²)", y: 0.29, sz: 0.034, color: CW },
    { text: "On enlève les parenthèses et on regroupe :", y: 0.39, sz: 0.028, color: CW },
    { text: "= (3 × 2) × (10⁴ × 10²)", y: 0.47, sz: 0.034, color: CW },
    { text: "= 6 × 10⁴⁺²  (on additionne les exposants, notion S12)", y: 0.55, sz: 0.034, color: CW },
    { text: "= 6 × 10⁶", y: 0.63, sz: 0.034, bold: true, color: CG },
    { text: "Vérification : 30 000 × 200 = 6 000 000 = 6 × 10⁶. ✓", y: 0.71, sz: 0.028, color: CW },

    // ========== PHASE 3 : Règle générale ==========
    { type: "SEP" },
    { text: "Règle générale", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ", y: 0.3, sz: 0.034, bold: true, color: CG },
    { text: "Autrement dit :", y: 0.4, sz: 0.028, color: CW },
    { text: "→ On multiplie les nombres a et b entre eux.", y: 0.48, sz: 0.03, color: CW },
    { text: "→ On additionne les exposants m et n.", y: 0.56, sz: 0.03, color: CW },
    { text: "C'est tout !", y: 0.64, sz: 0.028, bold: true, color: CY },

    { type: "question", isVerification: true, text: "Donc (4 × 10³) × (5 × 10²) = 20 × 10⁵. C'est bien ça ?", options: [
        { text: "Oui, 4 × 5 = 20 et 3 + 2 = 5.", isCorrect: true },
        { text: "Non, c'est 9 × 10⁵.", isCorrect: false },
        { text: "Non, c'est 20 × 10⁶.", isCorrect: false },
    ]},
    { text: "Résultat : (4 × 10³) × (5 × 10²) = 20 × 10⁵ ✓", y: 0.51, sz: 0.03, color: CG },

    // ========== PHASE 4 : Exemples variés (avec exposants négatifs) ==========
    { type: "SEP" },
    { text: "Exemples variés", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "(2 × 10³) × (3 × 10⁴) = 6 × 10⁷", y: 0.29, sz: 0.03, color: CW },
    { text: "(5 × 10⁻²) × (4 × 10³) = 20 × 10¹", y: 0.37, sz: 0.03, color: CW },
    { text: "(7 × 10⁻³) × (2 × 10⁻²) = 14 × 10⁻⁵", y: 0.45, sz: 0.03, color: CW },
    { text: "(6 × 10⁴) × (10 × 10²) = 60 × 10⁶", y: 0.53, sz: 0.03, color: CW },
    { text: "Astuce : la règle marche aussi avec des exposants négatifs !", y: 0.63, sz: 0.028, bold: true, color: CY },

    // ========== PHASE 5 : Remarque (réajustement parfois nécessaire) ==========
    { type: "SEP" },
    { text: "Remarque : parfois on doit réajuster", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Exemple : (8 × 10³) × (5 × 10²) = 40 × 10⁵", y: 0.3, sz: 0.03, color: CW },
    { text: "On peut l'écrire aussi 4 × 10⁶ (plus joli, plus simple).", y: 0.38, sz: 0.03, color: CW },
    { text: "Car 40 × 10⁵ = 4 × 10¹ × 10⁵ = 4 × 10⁶.", y: 0.46, sz: 0.03, color: CW },
    { text: "Mais 40 × 10⁵ reste correct : on a juste a = 40.", y: 0.56, sz: 0.028, color: CW },

    { type: "question", isVerification: true, text: "Donc (6 × 10²) × (3 × 10³) = 18 × 10⁵ = 1,8 × 10⁶. C'est juste ?", options: [
        { text: "Oui, 18 × 10⁵ = 1,8 × 10⁶.", isCorrect: true },
        { text: "Non, c'est 9 × 10⁵.", isCorrect: false },
    ]},
    { text: "Résultat : 18 × 10⁵ = 1,8 × 10⁶ ✓", y: 0.53, sz: 0.03, color: CG },

    // ========== PHASE 6 : Résolution du problème ==========
    { type: "SEP" },
    { text: "Résolution du problème : comprimés du laboratoire", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "(3 × 10⁴) × (2 × 10²) = (3 × 2) × 10⁴⁺²", y: 0.29, sz: 0.03, color: CW },
    { text: "= 6 × 10⁶", y: 0.37, sz: 0.034, bold: true, color: CG },
    { text: "Résultat : Le laboratoire reçoit 6 × 10⁶ = 6 000 000 comprimés. ✓", y: 0.48, sz: 0.032, bold: true, color: CG },

    // ========== EXERCICES D'APPLICATION ==========
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Exercice 1 : Calcule (7 × 10³) × (3 × 10⁴).", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Le résultat est 21 × 10⁷. C'est bien ça ?", options: [
        { text: "Oui, 7 × 3 = 21 et 3 + 4 = 7.", isCorrect: true },
        { text: "Non, c'est 10 × 10⁷.", isCorrect: false },
        { text: "Non, c'est 21 × 10¹².", isCorrect: false },
    ]},
    { text: "Résultat : (7 × 10³) × (3 × 10⁴) = 21 × 10⁷ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 2 : Calcule (5 × 10⁻²) × (6 × 10³).", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Le résultat est 30 × 10¹. C'est bien ça ?", options: [
        { text: "Oui, 5 × 6 = 30 et −2 + 3 = 1.", isCorrect: true },
        { text: "Non, c'est 30 × 10⁻⁶.", isCorrect: false },
        { text: "Non, c'est 11 × 10¹.", isCorrect: false },
    ]},
    { text: "Résultat : (5 × 10⁻²) × (6 × 10³) = 30 × 10¹ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 3 : Un astronome observe 4 × 10⁸ étoiles dans une galaxie.", y: 0.29, sz: 0.03, color: CW },
    { text: "Il y a 2 × 10³ galaxies semblables dans cet amas.", y: 0.37, sz: 0.03, color: CW },
    { text: "Combien d'étoiles au total ?", y: 0.45, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Le total est 8 × 10¹¹ étoiles. C'est bien ça ?", options: [
        { text: "Oui, 4 × 2 = 8 et 8 + 3 = 11.", isCorrect: true },
        { text: "Non, c'est 6 × 10¹¹.", isCorrect: false },
        { text: "Non, c'est 8 × 10²⁴.", isCorrect: false },
    ]},
    { text: "Résultat : 4 × 10⁸ × 2 × 10³ = 8 × 10¹¹ étoiles. ✓", y: 0.6, sz: 0.03, color: CG },
];

// =====================================================================
// Notion S15 : Encadrement d'un nombre écrit sous la forme a × 10ⁿ
// =====================================================================
const S15_Events = [
    // ---------- Titre ----------
    { text: "Notion_S15 : Encadrer un nombre écrit sous la forme a × 10ⁿ", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ========== PHASE 1 : Situation réelle de la vie ==========
    { text: "Situation : ", x: 0.05, y: 0.19, sz: 0.03, color: CY },
    { text: "Un journaliste écrit un article sur une ville.", x: 0.17, y: 0.19, sz: 0.03, color: CW },
    { text: "La population exacte est 384 000 habitants.", x: 0.17, y: 0.27, sz: 0.03, color: CW },
    { text: "Problème : ", x: 0.05, y: 0.35, sz: 0.03, color: CY },
    { text: "Entre quelles puissances de 10 consécutives se trouve ce nombre ?", x: 0.17, y: 0.35, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
            { label: "Entre 10⁵ et 10⁶", value: { isCorrect: true } },
            { label: "Entre 10⁴ et 10⁵", value: { isCorrect: false } },
            { label: "Entre 10⁶ et 10⁷", value: { isCorrect: false } },
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ========== PHASE 2 : Définition d'un encadrement ==========
    { type: "SEP" },
    { text: "Qu'est-ce qu'encadrer un nombre ?", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Encadrer un nombre, c'est trouver deux nombres :", y: 0.29, sz: 0.03, color: CW },
    { text: "→ un plus petit que lui (en dessous),", y: 0.37, sz: 0.03, color: CW },
    { text: "→ un plus grand que lui (au-dessus).", y: 0.45, sz: 0.03, color: CW },
    { text: "On écrit : plus petit < nombre < plus grand.", y: 0.55, sz: 0.03, color: CW },
    { text: "Exemple simple : 7 est encadré par 5 et 10 → 5 < 7 < 10.", y: 0.65, sz: 0.028, color: CW },

    { type: "question", isVerification: true, text: "Donc 25 est encadré par 20 et 30. C'est bien ça ?", options: [
        { text: "Oui, 20 < 25 < 30.", isCorrect: true },
        { text: "Non, 25 n'est pas entre 20 et 30.", isCorrect: false },
    ]},
    { text: "Résultat : 20 < 25 < 30 ✓", y: 0.5, sz: 0.03, color: CG },

    // ========== PHASE 3 : Encadrement par des puissances de 10 ==========
    { type: "SEP" },
    { text: "Encadrer par des puissances de 10 consécutives", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Rappel des puissances de 10 utiles :", y: 0.29, sz: 0.03, color: CW },
    { text: "10³ = 1 000 ; 10⁴ = 10 000 ; 10⁵ = 100 000 ; 10⁶ = 1 000 000.", y: 0.37, sz: 0.03, color: CW },
    { text: "Notre nombre : 384 000.", y: 0.47, sz: 0.03, color: CW },
    { text: "Il est plus grand que 100 000 (= 10⁵).", y: 0.55, sz: 0.03, color: CW },
    { text: "Il est plus petit que 1 000 000 (= 10⁶).", y: 0.63, sz: 0.03, color: CW },
    { text: "Donc : 10⁵ < 384 000 < 10⁶.", y: 0.71, sz: 0.034, bold: true, color: CG },

    // ========== PHASE 4 : Méthode avec l'écriture a × 10ⁿ ==========
    { type: "SEP" },
    { text: "Méthode avec l'écriture a × 10ⁿ", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Écrivons 384 000 sous la forme a × 10ⁿ :", y: 0.29, sz: 0.03, color: CW },
    { text: "384 000 = 384 × 10³", y: 0.37, sz: 0.034, color: CW },
    { text: "On regarde le nombre a = 384 :", y: 0.47, sz: 0.028, color: CW },
    { text: "100 < 384 < 1 000  donc  10² < 384 < 10³.", y: 0.55, sz: 0.03, color: CW },
    { text: "On multiplie tout par 10³ :", y: 0.63, sz: 0.028, color: CW },
    { text: "10² × 10³ < 384 × 10³ < 10³ × 10³", y: 0.69, sz: 0.034, color: CW },

    { type: "SEP" },
    { text: "On additionne les exposants (règle S12) :", y: 0.19, sz: 0.028, color: CW },
    { text: "10⁵ < 384 × 10³ < 10⁶", y: 0.29, sz: 0.034, bold: true, color: CG },
    { text: "Donc : 10⁵ < 384 000 < 10⁶. ✓", y: 0.39, sz: 0.034, bold: true, color: CG },
    { text: "Astuce : on compte le nombre total de chiffres du nombre.", y: 0.51, sz: 0.028, bold: true, color: CY },
    { text: "384 000 a 6 chiffres → il est entre 10⁵ et 10⁶.", y: 0.59, sz: 0.028, color: CW },

    // ========== PHASE 5 : Exemples variés ==========
    { type: "SEP" },
    { text: "Exemples variés", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "73 a 2 chiffres  →  10¹ < 73 < 10²", y: 0.29, sz: 0.03, color: CW },
    { text: "4 500 a 4 chiffres  →  10³ < 4 500 < 10⁴", y: 0.37, sz: 0.03, color: CW },
    { text: "0,07 a la forme 7 × 10⁻²  →  10⁻² < 0,07 < 10⁻¹", y: 0.45, sz: 0.03, color: CW },
    { text: "0,003 = 3 × 10⁻³  →  10⁻³ < 0,003 < 10⁻²", y: 0.53, sz: 0.03, color: CW },
    { text: "Pour les décimaux : la puissance inférieure est l'exposant de a × 10ⁿ.", y: 0.63, sz: 0.028, bold: true, color: CY },

    // ========== PHASE 6 : Résolution du problème ==========
    { type: "SEP" },
    { text: "Résolution du problème : la ville de 384 000 habitants", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "384 000 a 6 chiffres.", y: 0.29, sz: 0.03, color: CW },
    { text: "Donc il est entre 10⁵ et 10⁶.", y: 0.37, sz: 0.03, color: CW },
    { text: "10⁵ < 384 000 < 10⁶", y: 0.47, sz: 0.034, bold: true, color: CG },
    { text: "Résultat : La population est comprise entre 100 000 et 1 000 000. ✓", y: 0.57, sz: 0.032, bold: true, color: CG },

    // ========== EXERCICES D'APPLICATION ==========
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Exercice 1 : Encadre 25 000 par deux puissances de 10.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "10⁴ < 25 000 < 10⁵. C'est bien ça ?", options: [
        { text: "Oui, 25 000 a 5 chiffres → entre 10⁴ et 10⁵.", isCorrect: true },
        { text: "Non, entre 10³ et 10⁴.", isCorrect: false },
        { text: "Non, entre 10⁵ et 10⁶.", isCorrect: false },
    ]},
    { text: "Résultat : 10⁴ < 25 000 < 10⁵ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 2 : Encadre 0,008 par deux puissances de 10.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "10⁻³ < 0,008 < 10⁻². C'est bien ça ?", options: [
        { text: "Oui, 0,008 = 8 × 10⁻³, entre 10⁻³ et 10⁻².", isCorrect: true },
        { text: "Non, entre 10⁻² et 10⁻¹.", isCorrect: false },
        { text: "Non, entre 10⁻⁴ et 10⁻³.", isCorrect: false },
    ]},
    { text: "Résultat : 10⁻³ < 0,008 < 10⁻² ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 3 : La distance Terre-Soleil est 1,5 × 10¹¹ m.", y: 0.29, sz: 0.03, color: CW },
    { text: "Encadre cette distance par deux puissances de 10.", y: 0.37, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "10¹¹ < 1,5 × 10¹¹ < 10¹². C'est bien ça ?", options: [
        { text: "Oui, 1 < 1,5 < 10, donc entre 10¹¹ et 10¹².", isCorrect: true },
        { text: "Non, entre 10¹⁰ et 10¹¹.", isCorrect: false },
        { text: "Non, entre 10¹² et 10¹³.", isCorrect: false },
    ]},
    { text: "Résultat : 10¹¹ < 1,5 × 10¹¹ < 10¹² ✓", y: 0.6, sz: 0.03, color: CG },
];

// =====================================================================
// Notion S16 : Comparaison de deux nombres écrits sous la forme a × 10ⁿ
// =====================================================================
const S16_Events = [
    // ---------- Titre ----------
    { text: "Notion_S16 : Comparer deux nombres écrits sous la forme a × 10ⁿ", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ========== PHASE 1 : Situation réelle de la vie ==========
    { text: "Situation : ", x: 0.05, y: 0.19, sz: 0.03, color: CY },
    { text: "La ville A compte 45 × 10⁴ habitants.", x: 0.17, y: 0.19, sz: 0.03, color: CW },
    { text: "La ville B compte 320 × 10³ habitants.", x: 0.17, y: 0.27, sz: 0.03, color: CW },
    { text: "Problème : ", x: 0.05, y: 0.35, sz: 0.03, color: CY },
    { text: "Quelle ville est la plus peuplée ?", x: 0.17, y: 0.35, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
           { label: "La ville B (320 × 10³)", value: { isCorrect: false } },
            { label: "La ville A (45 × 10⁴)", value: { isCorrect: true } },
           { label: "Elles sont égales", value: { isCorrect: false } },
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ========== PHASE 2 : Démonstration (même puissance de 10) ==========
    { type: "SEP" },
    { text: "Écrivons les deux nombres avec la MÊME puissance de 10.", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "45 × 10⁴ = 45 × 10 × 10³ = 450 × 10³", y: 0.29, sz: 0.03, color: CW },
    { text: "320 × 10³ reste écrit : 320 × 10³", y: 0.37, sz: 0.03, color: CW },
    { text: "Maintenant, on compare les entiers : 450 > 320.", y: 0.47, sz: 0.03, color: CW },
    { text: "Donc : 450 × 10³ > 320 × 10³", y: 0.57, sz: 0.034, bold: true, color: CG },
    { text: "C'est-à-dire : 45 × 10⁴ > 320 × 10³.", y: 0.67, sz: 0.03, color: CW },

    // ========== PHASE 3 : La méthode en 3 étapes ==========
    { type: "SEP" },
    { text: "Méthode en 3 étapes", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "1. Écrire les deux nombres avec la même puissance de 10.", y: 0.29, sz: 0.03, color: CW },
    { text: "2. Comparer les entiers relatifs obtenus.", y: 0.39, sz: 0.03, color: CW },
    { text: "3. Conclure avec le même signe d'inégalité.", y: 0.49, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Si j'ai bien compris, il faut la même puissance de 10 pour comparer. C'est ça ?", options: [
        { text: "Non, on compare seulement les exposants.", isCorrect: false },
        { text: "Oui, puis on compare les entiers.", isCorrect: true },
        { text: "Non, on compare a et n séparément.", isCorrect: false },
    ]},
    { text: "Résultat : même puissance de 10 → on compare les entiers. ✓", y: 0.62, sz: 0.03, color: CG },

    // ========== PHASE 4 : Exemple avec exposants négatifs ==========
    { type: "SEP" },
    { text: "Exemple avec des exposants négatifs", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Comparons 736 × 10⁻² et 8 × 10⁻¹.", y: 0.29, sz: 0.03, color: CW },
    { text: "8 × 10⁻¹ = 80 × 10⁻² (même puissance 10⁻²).", y: 0.39, sz: 0.03, color: CW },
    { text: "On compare les entiers : 736 > 80.", y: 0.49, sz: 0.03, color: CW },
    { text: "Donc : 736 × 10⁻² > 8 × 10⁻¹.", y: 0.59, sz: 0.034, bold: true, color: CG },
    { text: "(Vérification : 7,36 > 0,8 ✓)", y: 0.69, sz: 0.028, color: CW },

    // ========== PHASE 5 : Résolution du problème ==========
    { type: "SEP" },
    { text: "Résolution du problème : les deux villes", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "45 × 10⁴ = 450 × 10³, et 450 > 320.", y: 0.29, sz: 0.03, color: CW },
    { text: "Résultat : La ville A est la plus peuplée (450 000 > 320 000). ✓", y: 0.41, sz: 0.032, bold: true, color: CG },

    // ========== EXERCICES D'APPLICATION ==========
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Exercice 1 : Compare 25 × 10⁵ et 3 × 10⁶.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "25 × 10⁵ < 3 × 10⁶, c'est bien ça ?", options: [
        { text: "Oui, car 3 × 10⁶ = 30 × 10⁵ et 25 < 30.", isCorrect: true },
        { text: "Non, 25 × 10⁵ > 3 × 10⁶.", isCorrect: false },
        { text: "Ils sont égaux.", isCorrect: false },
    ]},
    { text: "Résultat : 25 × 10⁵ < 3 × 10⁶ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 2 : Compare 7 × 10⁻³ et 700 × 10⁻⁵.", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "Ces deux nombres sont égaux, c'est bien ça ?", options: [
        { text: "Oui, car 7 × 10⁻³ = 700 × 10⁻⁵.", isCorrect: true },
        { text: "Non, 7 × 10⁻³ est plus grand.", isCorrect: false },
        { text: "Non, 700 × 10⁻⁵ est plus grand.", isCorrect: false },
    ]},
    { text: "Résultat : 7 × 10⁻³ = 700 × 10⁻⁵ ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 3 : Range dans l'ordre croissant :", y: 0.29, sz: 0.03, color: CW },
    { text: "5 × 10² ; 45 × 10¹ ; 3 × 10³.", y: 0.37, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "L'ordre est : 45 × 10¹ < 5 × 10² < 3 × 10³. C'est bien ça ?", options: [
        { text: "Oui, car 450 < 500 < 3 000.", isCorrect: true },
        { text: "Non, 5 × 10² est le plus petit.", isCorrect: false },
        { text: "Non, 3 × 10³ est le plus petit.", isCorrect: false },
    ]},
    { text: "Résultat : 45 × 10¹ < 5 × 10² < 3 × 10³ ✓", y: 0.55, sz: 0.03, color: CG },
];

// =====================================================================
// Notion S17 : Nombre décimal d'ordre n, troncature, consécutifs
// =====================================================================
const S17_Events = [
    // ---------- Titre ----------
    { text: "Notion_S17 : Nombre décimal d'ordre n", y: 0.07, sz: 0.042, bold: true, color: CY, isTitle: true },

    // ========== PHASE 1 : Situation réelle de la vie ==========
    { text: "Situation : ", x: 0.05, y: 0.19, sz: 0.03, color: CY },
    { text: "Au marché, la balance affiche 3,489371 kg.", x: 0.17, y: 0.19, sz: 0.03, color: CW },
    { text: "Le vendeur écrit 3,48 kg sur le ticket.", x: 0.17, y: 0.27, sz: 0.03, color: CW },
    { text: "Problème : ", x: 0.05, y: 0.35, sz: 0.03, color: CY },
    { text: "Quel est l'ordre de 7,36 ? C'est quoi une troncature ?", x: 0.17, y: 0.35, sz: 0.03, color: CW },

    { type: "question", text: "Tu as une idée ?", options: [
        { text: "Oui", value: { triggerNext: { text: "Génial ! Partage ton idée :", choices: [
          { label: "7,36 est d'ordre 0", value: { isCorrect: false } },
            { label: "7,36 est d'ordre 2", value: { isCorrect: true } },
            { label: "7,36 est d'ordre 1", value: { isCorrect: false } },
            
        ]}}},
        { text: "Non", value: { isCorrect: false } },
    ]},

    // ========== PHASE 2 : Définition de l'ordre n ==========
    { type: "SEP" },
    { text: "Définition : ", x: 0.05, y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Un nombre décimal d'ordre n s'écrit :", y: 0.29, sz: 0.03, color: CW },
    { text: "entier relatif × 10⁻ⁿ", y: 0.39, sz: 0.034, bold: true, color: CG, underline: true },
    { text: "Exemple : 7,36 = 736 × 10⁻² → il est d'ordre 2.", y: 0.51, sz: 0.03, color: CW },
    { text: "Car 736 est un entier et l'exposant est −2.", y: 0.59, sz: 0.028, color: CW },

    // ========== PHASE 3 : Un nombre a plusieurs ordres ==========
    { type: "SEP" },
    { text: "Un même nombre a plusieurs ordres !", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "7,36 = 736 × 10⁻² → ordre 2", y: 0.29, sz: 0.03, color: CW },
    { text: "7,36 = 7 360 × 10⁻³ → ordre 3", y: 0.37, sz: 0.03, color: CW },
    { text: "7,36 = 73 600 × 10⁻⁴ → ordre 4", y: 0.45, sz: 0.03, color: CW },
    { text: "7,36 est d'ordre tout entier supérieur ou égal à 2.", y: 0.55, sz: 0.03, bold: true, color: CG },
    { type: "question", isVerification: true, text: "Alors 7,36 = 736 000 × 10⁻⁵, donc il est aussi d'ordre 5 ?", options: [
        { text: "Oui, exactement !", isCorrect: true },
        { text: "Non, on s'arrête à l'ordre 4.", isCorrect: false },
    ]},
    { text: "Résultat : Oui, 7,36 est d'ordre 2, 3, 4, 5… et tout ordre ≥ 2. ✓", y: 0.68, sz: 0.03, color: CG },

    // ========== PHASE 4 : La troncature ==========
    { type: "SEP" },
    { text: "Troncature à n décimales", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "Définition : on garde seulement les n premiers chiffres", y: 0.29, sz: 0.03, color: CW },
    { text: "après la virgule, et on coupe le reste SANS arrondir.", y: 0.37, sz: 0.03, color: CW },
    { text: "Troncature à 1 décimale de 3,489371 : 3,4", y: 0.49, sz: 0.03, color: CW },
    { text: "Troncature à 2 décimales de 3,489371 : 3,48", y: 0.57, sz: 0.03, color: CW },
    { text: "C'est ce que fait le vendeur sur son ticket !", y: 0.67, sz: 0.028, bold: true, color: CY },

    // ========== PHASE 5 : Consécutifs d'ordre n ==========
    { type: "SEP" },
    { text: "Consécutifs d'ordre n", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "1,8 et 1,9 sont consécutifs d'ordre 1.", y: 0.29, sz: 0.03, color: CW },
    { text: "Écart : 1,9 − 1,8 = 0,1 = 10⁻¹.", y: 0.37, sz: 0.03, color: CW },
    { text: "1,85 et 1,86 sont consécutifs d'ordre 2.", y: 0.47, sz: 0.03, color: CW },
    { text: "Écart : 1,86 − 1,85 = 0,01 = 10⁻².", y: 0.55, sz: 0.03, color: CW },
    { text: "2 est le décimal d'ordre 1 qui suit 1,9.", y: 0.65, sz: 0.03, color: CW },

    // ========== PHASE 6 : Résolution du problème ==========
    { type: "SEP" },
    { text: "Résolution du problème", y: 0.19, sz: 0.03, bold: true, color: CY },
    { text: "7,36 = 736 × 10⁻² → ordre 2 (et tout ordre ≥ 2).", y: 0.29, sz: 0.03, color: CW },
    { text: "Troncature à 2 décimales de 3,489371 : 3,48.", y: 0.39, sz: 0.03, color: CW },
    { text: "Résultat : ordre n = exposant de 10⁻ⁿ ; troncature = couper sans arrondir. ✓", y: 0.51, sz: 0.032, bold: true, color: CG },

    // ========== EXERCICES D'APPLICATION ==========
    { type: "SEP" },
    { text: "Exercices d'application", y: 0.19, sz: 0.032, bold: true, color: CY },
    { text: "Exercice 1 : Quel est l'ordre de 5,27 ?", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "5,27 est d'ordre 2, car 5,27 = 527 × 10⁻². C'est bien ça ?", options: [
        { text: "Non, ordre 1.", isCorrect: false },
         { text: "Oui, ordre 2 (et tout ordre ≥ 2).", isCorrect: true },
        { text: "Non, ordre 3 seulement.", isCorrect: false },
    ]},
    { text: "Résultat : 5,27 est d'ordre 2 ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 2 : Troncature à 1 décimale de 6,783 ?", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "C'est 6,7, c'est bien ça ?", options: [
        { text: "Oui, on coupe après la 1ʳᵉ décimale.", isCorrect: true },
        { text: "Non, c'est 6,8 (arrondi).", isCorrect: false },
        { text: "Non, c'est 6,78.", isCorrect: false },
    ]},
    { text: "Résultat : Troncature à 1 décimale de 6,783 = 6,7 ✓", y: 0.5, sz: 0.03, color: CG },

    { type: "SEP" },
    { text: "Exercice 3 : Quel décimal d'ordre 2 suit 1,85 ?", y: 0.29, sz: 0.03, color: CW },
    { type: "question", isVerification: true, text: "C'est 1,86, c'est bien ça ?", options: [
        { text: "Oui, 1,85 + 0,01 = 1,86.", isCorrect: true },
        { text: "Non, c'est 1,9.", isCorrect: false },
        { text: "Non, c'est 1,84.", isCorrect: false },
    ]},
    { text: "Résultat : 1,86 suit 1,85 (consécutifs d'ordre 2) ✓", y: 0.5, sz: 0.03, color: CG },
];


export const programme = {
    SA0: {
        title: 'Introduction',
        sequences: {
            SEQ0: {
                title: 'Introduction',
                notions: [
                    { id: 'S0', title: 'Bienvenue', events: S0_Events, nextNotionId: 'S00' },
                    { id: 'S00', title: 'Introduction Camélia', events: S00_Events, nextNotionId: 'S1' },
                ]
            }
        }
    },
    SA1: {
        title: 'Géométrie',
        sequences: {
            SEQ1: {
                title: 'Le cercle',
                notions: [
                    { id: 'S4', title: 'Angles au centre d\'un cercle', events: S4_Events, nextNotionId: 'S5' },
                    { id: 'S5', title: 'La corde d\'un cercle', events: S5_Events, nextNotionId: 'S6' },
                ]
            },
            SEQ2: {
                title: 'Les droites',
                notions: [
                    { id: 'S6', title: 'Distance d\'un point à une droite', events: S6_Events, nextNotionId: 'S7' },
                    { id: 'S7', title: 'Distance entre deux droites parallèles', events: S7_Events, nextNotionId: 'S8' },
                    { id: 'S8', title: 'Points équidistants de deux droites parallèles', events: S8_Events, nextNotionId: 'S9' },
                    { id: 'S9', title: 'Points équidistants de deux droites sécantes', events: S9_Events, nextNotionId: 'S10' },
                    { id: 'S10', title: 'Axe de symétrie de deux droites sécantes', events: S10_Events, nextNotionId: 'S11' },
                ]
            },
            
        
            SEQ3: {
                title: 'Triangles',
                notions: [
                    { id: 'S11', title: 'Propriétés dans un triangle ', events: S11_Events, nextNotionId: 'S11' }
                     ]
            },

            
    
            SEQ5: {
                title: 'Nombre décimaux',
                notions: [
                    { id: 'S12', title: 'Puissances de 10 à exposants relatifs', events: S12_Events, nextNotionId: 'S13' },
                    { id: 'S13', title: 'Ecriture d\'un nombre décimal sous la forme a.10', events: S13_Events, nextNotionId: 'S14' },
                    { id: 'S14', title: 'Produit de deux nombres écrits a·10ⁿ', events: S14_Events, nextNotionId: 'S15' },
                    { id: 'S15', title: 'Encadrement d\'un nombre écrit a·10ⁿ', events: S15_Events, nextNotionId: 'S16' },
                    { id: 'S16', title: 'Comparaison de deux nombres écrits a·10ⁿ', events: S16_Events, nextNotionId: 'S17' },
                    { id: 'S17', title: 'Nombre décimal d\'ordre n', events: S17_Events, nextNotionId: 'S12' }

                ]
            }
        }
    },
    SA2: {
        title: 'Arithmétique',
        sequences: {
            SEQ3: {
                title: 'Divisibilité',
                notions: [
                    { id: 'S1', title: 'Les diviseurs d\'un nombre', events: S1_Events, nextNotionId: 'S2' },
                    { id: 'S2', title: 'Nombres Premiers', events: S2_Events, nextNotionId: 'S3' },
                    { id: 'S3', title: 'Décomposition en facteurs premiers', events: S3_Events, nextNotionId: 'S4' },
                ]
            }
        }
    }
};
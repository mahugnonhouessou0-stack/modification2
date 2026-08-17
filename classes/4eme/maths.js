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
    { text: 'Notion : Propriétés dans un triangle', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- INTRO (y=0.25) : consigne + question, tout en QCM ----------
    { text: "Traçons un triangle ABC tel que AB = AC.", id: 'consigne', y: 0.25, sz: 0.035, color: CW },
    { text: "Comment appelle-t-on ce triangle ?", id: 'question', y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Un triangle isocèle en A", isCorrect: true },
        { text: "Un triangle équilatéral", isCorrect: false },
        { text: "Un triangle quelconque", isCorrect: false } ] },

   
    // ---------- ÉTAPE 1 : figure propre ----------
    { type: 'point', x: 0.25, y: 0.38, label: 'A', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.13, y: 0.74, label: 'B', labelPos: 'left', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.37, y: 0.74, label: 'C', labelPos: 'right', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.25, y1: 0.38, x2: 0.13, y2: 0.74, color: '#ffffff', duration: 80 },
    { type: 'line', x1: 0.13, y1: 0.74, x2: 0.37, y2: 0.74, color: '#ffffff', duration: 80 },
    { type: 'line', x1: 0.37, y1: 0.74, x2: 0.25, y2: 0.38, color: '#ffffff', duration: 80 },
    { type: 'line', x1: 0.1838, y1: 0.5517, x2: 0.1963, y2: 0.5683, color: '#f5e5e5', duration: 40 },
    { type: 'line', x1: 0.3163, y1: 0.5517, x2: 0.3038, y2: 0.5683, color: '#f5e5e5', duration: 40 },

    // ---------- ÉTAPE 2 : consigne effacée → remplacée AU MÊME ENDROIT ----------
    { type: 'clear', id: 'consigne' },
    { type: 'clear', id: 'question' },
    { text: "Traçons la bissectrice de l'angle BAC.", y: 0.25, sz: 0.035, color: CW },
    { type: 'line', x1: 0.25, y1: 0.38, x2: 0.25, y2: 0.74, color: '#7af0a0', duration: 80 },
    { type: 'point', x: 0.25, y: 0.74, label: 'K', labelPos: 'bottom', color: '#f5e441', duration: 60 },
    { type: 'line', x1: 0.25, y1: 0.71, x2: 0.265, y2: 0.71, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.265, y1: 0.71, x2: 0.265, y2: 0.74, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.19, y1: 0.72, x2: 0.19, y2: 0.76, color: '#f5e5e5', duration: 40 },
    { type: 'line', x1: 0.31, y1: 0.72, x2: 0.31, y2: 0.76, color: '#f5e5e5', duration: 40 },

     // ---------- Séparation AU DÉBUT (sous l'intro, au-dessus des questions) ----------
    { type: 'line', x1: 0.43, y1: 0.17, x2: 0.43, y2: 0.90, color: '#ffffff', duration: 40 },

    // ---------- ÉTAPE 3 : questions EN BAS, en QCM, justifications à droite ----------
    { text: "(AK) est part de A et est perpendiculaire à (BC).", id: 'qA', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "Que représente-t-elle ?", id: 'qA', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La hauteur", isCorrect: true },
        { text: "La médiane", isCorrect: false },
        { text: "La médiatrice", isCorrect: false } ] },
    
    { type: 'text', text: "Il s'agit de la hauteur de ABC :", id: 'justificationA', x: 0.46, y: 0.35, sz: 0.035, color: CW },
    { type: 'text', text: "car (AK) est issue de A et ⊥ à (BC).", id: 'justificationA2', x: 0.50, y: 0.40, sz: 0.035, color: CW, pause: 400 },

    { type: 'clear', id: 'qA' },
    { type: 'clear', id: 'justificationA' },
    { type: 'clear', id: 'justificationA2' },
    { text: "(AK) joint le sommet A au milieu K de [BC]. ", id: 'qB', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "Que représente-t-elle ?", id: 'qB', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La médiane", isCorrect: true },
        { text: "La hauteur", isCorrect: false },
        { text: "La médiatrice", isCorrect: false } ] },
    
    { type: 'text', text: "Il s'agit de la médiane de ABC :", id: 'justificationB', x: 0.46, y: 0.35, sz: 0.035, color: CW },
    { type: 'text', text: "car (AK) joint A au milieu K.", id: 'justificationB2', x: 0.46, y: 0.40, sz: 0.035, color: CW, pause: 400 },

    { type: 'clear', id: 'qB' },
    { type: 'clear', id: 'justificationB' },
    { type: 'clear', id: 'justificationB2' },
    { text: "Enfin, (AK) est perpendiculaire à [BC] en son milieu K. ", id: 'qC', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "Que représente-t-elle ?", id: 'qC', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La médiatrice", isCorrect: true },
        { text: "La hauteur", isCorrect: false },
        { text: "La médiane", isCorrect: false } ] },
    
    { type: 'text', text: "Il s'agit de la médiatrice de [BC] :", id: 'justificationC', x: 0.46, y: 0.35, sz: 0.035, color: CW },
    { type: 'text', text: "car (AK) est ⊥ à [BC] en son milieu.", id: 'justificationC2', x: 0.46, y: 0.40, sz: 0.035, color: CW, pause: 250 },

    { type: 'clear', id: 'qC' },
    { type: 'clear', id: 'justificationC' },
    { type: 'clear', id: 'justificationC2' },
    { type: 'text', text: "Une seule droite, trois rôles !", id: 'justificationC3', x: 0.46, y: 0.25, sz: 0.035, bold: true, color: CW, pause: 250 },
    { type: 'text', text: "Dans le triangle isocèle ABC, la bissectrice de  ", id: 'justificationC4', x: 0.46, y: 0.30, sz: 0.035, bold: true, color: CW },
    { type: 'text', text: "l'angle enA est hauteur, médiane et médiatrice.", id: 'justificationC5', x: 0.46, y: 0.35, sz: 0.035, bold: true, color: CW, pause: 250 },

        // ================= TRIANGLE ÉQUILATÉRAL : MÊME MÉTHODE =================
    { type: 'SEP' },
    { text: "Triangle équilatéral", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Traçons un triangle équilatéral ABC.", id: 'consigneE', y: 0.25, sz: 0.035, color: CW },
    { text: "Que peut-on dire de ses trois côtés ?", id: 'questionE', y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Ils sont tous égaux", isCorrect: true },
        { text: "Deux seulement sont égaux", isCorrect: false } ] },
   
    // Figure à gauche
    { type: 'point', x: 0.25, y: 0.38, label: 'A', labelPos: 'top', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.13, y: 0.74, label: 'B', labelPos: 'left', color: '#ffffff', duration: 60 },
    { type: 'point', x: 0.37, y: 0.74, label: 'C', labelPos: 'right', color: '#ffffff', duration: 60 },
    { type: 'line', x1: 0.25, y1: 0.38, x2: 0.13, y2: 0.74, color: '#ffffff', duration: 80 },
    { type: 'line', x1: 0.13, y1: 0.74, x2: 0.37, y2: 0.74, color: '#ffffff', duration: 80 },
    { type: 'line', x1: 0.37, y1: 0.74, x2: 0.25, y2: 0.38, color: '#ffffff', duration: 80 },
    { type: 'line', x1: 0.1838, y1: 0.5517, x2: 0.1963, y2: 0.5683, color: '#f5e5e5', duration: 40 },
    { type: 'line', x1: 0.3163, y1: 0.5517, x2: 0.3038, y2: 0.5683, color: '#f5e5e5', duration: 40 },
    { type: 'line', x1: 0.25, y1: 0.727, x2: 0.25, y2: 0.753, color: '#f5e5e5', duration: 40 },
    // Consigne effacée → remplacée AU MÊME ENDROIT ; on trace la médiane
    { type: 'clear', id: 'consigneE' },
    { type: 'clear', id: 'questionE' },
    { text: "Traçons la médiane (AK) issue de A.", y: 0.25, sz: 0.035, color: CW },
    { type: 'line', x1: 0.25, y1: 0.38, x2: 0.25, y2: 0.74, color: '#7af0a0', duration: 80 },
    { type: 'point', x: 0.25, y: 0.74, label: 'K', labelPos: 'bottom', color: '#f5e441', duration: 60 },
    { type: 'line', x1: 0.25, y1: 0.71, x2: 0.265, y2: 0.71, color: '#ff4444', duration: 40 },
    { type: 'line', x1: 0.265, y1: 0.71, x2: 0.265, y2: 0.74, color: '#ff4444', duration: 40 },

     // Séparation AU DÉBUT, comme l'isocèle
    { type: 'line', x1: 0.43, y1: 0.17, x2: 0.43, y2: 0.90, color: '#ffffff', duration: 40 },
    // Cycle 1 → médiane
    { text: "(AK) joint A au milieu K de [BC].", id: 'qE1', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "Que représente-t-elle ?", id: 'qE1', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La médiane", isCorrect: true },
        { text: "La hauteur", isCorrect: false },
        { text: "La médiatrice", isCorrect: false } ] },
    { type: 'text', text: "Il s'agit de la médiane de ABC :", id: 'justificationE1', x: 0.46, y: 0.35, sz: 0.035, color: CW },
    { type: 'text', text: "car (AK) joint A au milieu K.", id: 'justificationE2', x: 0.46, y: 0.40, sz: 0.035, color: CW, pause: 400 },
    { type: 'clear', id: 'qE1' },
    { type: 'clear', id: 'justificationE1' },
    { type: 'clear', id: 'justificationE2' },

    // Cycle 2 → hauteur
    { text: "(AK) est aussi perpendiculaire à (BC).", id: 'qE2', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "Que représente-t-elle ?", id: 'qE2', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La hauteur", isCorrect: true },
        { text: "La médiane", isCorrect: false },
        { text: "La bissectrice", isCorrect: false } ] },
    { type: 'text', text: "Il s'agit de la hauteur de ABC :", id: 'justificationE3', x: 0.46, y: 0.35, sz: 0.035, color: CW },
    { type: 'text', text: "car (AK) est issue de A et ⊥ à (BC).", id: 'justificationE4', x: 0.46, y: 0.40, sz: 0.035, color: CW, pause: 400 },
    { type: 'clear', id: 'qE2' },
    { type: 'clear', id: 'justificationE3' },
    { type: 'clear', id: 'justificationE4' },

    // Cycle 3 → médiatrice + bissectrice
    { text: "Enfin,(AK) est ⊥ à [BC] en son milieu K.", id: 'qE3', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "Que représente-t-elle encore ?", id: 'qE3', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La médiatrice", isCorrect: true },
        { text: "La médiane", isCorrect: false } ] },
    { type: 'text', text: "C'est aussi la médiatrice de [BC],", id: 'justificationE5', x: 0.46, y: 0.35, sz: 0.035, color: CW, pause: 400 },
    { type: 'text', text: "et la bissectrice de l'angle en A.", id: 'justificationE6', x: 0.46, y: 0.40, sz: 0.035, color: CW, pause: 400 },
    { type: 'clear', id: 'qE3' },
    { type: 'clear', id: 'justificationE5' },
    { type: 'clear', id: 'justificationE6' },

    // Cycle 4 → les angles
    { text: "Combien mesure chaque angle", id: 'qE4', x: 0.46, y: 0.25, sz: 0.035, color: CW },
    { text: "de ce triangle équilatéral ?", id: 'qE4', x: 0.46, y: 0.30, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "60°", isCorrect: true },
        { text: "90°", isCorrect: false },
        { text: "45°", isCorrect: false } ] },
    { type: 'text', text: "60° chacun : 180° ÷ 3.", id: 'justificationE7', x: 0.46, y: 0.35, sz: 0.035, color: CW, pause: 400 },
    { type: 'clear', id: 'qE4' },
    { type: 'clear', id: 'justificationE7' },
    { type: 'clear', id: 'justificationE8' },

    // Conclusion en gras à droite
    { type: 'text', text: "Une médiane = quatre rôles !", x: 0.46, y: 0.25, sz: 0.035, bold: true, color: CW, pause: 400 },
    { type: 'text', text: "Chaque angle vaut 60°.", x: 0.46, y: 0.30, sz: 0.035, bold: true, color: CW, pause: 400 },
   

        // ================= FIN : REMARQUE puis EN RÉSUMÉ =================
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "Dans le triangle isocèle ABC, la bissectrice de l'angle au sommet ", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "est aussi la médiane du côté opposé, ainsi que sa médiatrice.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. Dans un triangle isocèle, la bissectrice qui passe par le sommet principal est à la fois", x: 0.05, y: 0.40, sz: 0.035, color: CW },  
    { text:"hauteur, médiane et médiatrice.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "2. Réciproque :Dans un triangle, si la bissectrice d'un angle est aussi la médiane relative au côté", x: 0.05, y: 0.50, sz: 0.035, color: CW },  
    { text:"opposé de cet angle, alors ce triangle est isocèle.", x: 0.05, y: 0.55, sz: 0.035, color: CW },
    { text: "3. Dans un triangle équilatéral, chaque médiatrice est à la fois médiane", x: 0.05, y: 0.60, sz: 0.035, color: CW },  
    { text:"bissectrice et hauteur.", x: 0.05, y: 0.65, sz: 0.035, color: CW },
];
    // =====================================================================
// Notion S12 : Puissances de 10 à exposants entiers relatifs (10⁻ⁿ)
// =====================================================================
// =====================================================================
// S12 — Puissances de 10 à exposants entiers relatifs
// =====================================================================
const S12_Events = [
    { text: 'Notion : Puissances de 10 à exposants entiers relatifs', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- Fait réel + question (y=0.25, marge 0.15) ----------
    { text: "Le diamètre d'un cheveu mesure environ 0,0001 m.", id: 'intro1', y: 0.25, sz: 0.035, color: CW },
    { text: "La distance Terre-Soleil : 150 000 000 000 m.", id: 'intro2', y: 0.30, sz: 0.035, color: CW },
    { text: "Comment écrire 0,0001 simplement avec une puissance de 10 ?", y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "0,0001 = 10⁻⁴", isCorrect: true },
        { text: "0,0001 = 10⁴", isCorrect: false },
        { text: "0,0001 = 10⁻³", isCorrect: false } ] },

    // ---------- Pré-requis basique : puissances positives ----------
    { type: 'SEP' },
    { text: "Rappel : les puissances positives de 10", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "10¹ = 10", id: 'p1', x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "10² = 10 × 10 = 100", id: 'p2', x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "10³ = 10 × 10 × 10 = 1 000", id: 'p3', x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "10⁴ = 10 000 (1 suivi de 4 zéros)", id: 'p4', x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "10⁵ = 100 000 (1 suivi de 5 zéros)", id: 'p5', x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "L'exposant indique le nombre de zéros après le 1.", id: 'regle', x: 0.05, y: 0.55, sz: 0.035, bold: true, color: CW },
    { text: "Question : 10⁶, c'est bien 1 000 000 ?", id: 'qR', x: 0.05, y: 0.65, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Oui, un 1 suivi de 6 zéros", isCorrect: true },
        { text: "Non, 10⁶ = 60", isCorrect: false },
        { text: "Non, 10⁶ = 106", isCorrect: false } ] },
    { type: 'text', text: "Oui : 10⁶ = 1 000 000.", x: 0.05, y: 0.70, sz: 0.035, color: CW, pause: 400 },

    // ---------- Pattern en descendant (consigne effacée/remplacée) ----------
    { type: 'SEP' },
    { text: "Observons : que se passe-t-il quand on divise par 10 ?", id: 'consigne', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "10⁴ = 10 000", id: 'd1', x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "10³ = 1 000  (on enlève un zéro)", id: 'd2', x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "10² = 100  (on enlève encore un zéro)", id: 'd3', x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "10¹ = 10  (on enlève encore un zéro)", id: 'd4', x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { type: 'clear', id: 'consigne' },
    { type: 'clear', id: 'd1' },
    { type: 'clear', id: 'd2' },
    { type: 'clear', id: 'd3' },
    { type: 'clear', id: 'd4' },
    { text: "Et si on continue à diviser par 10 ?", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "10¹ ÷ 10 = 10 ÷ 10 = 1", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Question : 10⁰, ça donne combien ?", id: 'q0', x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "1", isCorrect: true },
        { text: "0", isCorrect: false },
        { text: "10", isCorrect: false } ] },
    { type: 'text', text: "10⁰ = 1. C'est la règle.", x: 0.05, y: 0.55, sz: 0.035, color: CW, pause: 400 },

    // ---------- Introduction des exposants négatifs ----------
    { type: 'SEP' },
    { text: "Continuons à diviser par 10", id: 'consigneN', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "10⁻¹ = 1 ÷ 10 = 0,1", id: 'n1', x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "10⁻² = 0,1 ÷ 10 = 0,01", id: 'n2', x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "10⁻³ = 0,01 ÷ 10 = 0,001", id: 'n3', x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "10⁻⁴ = 0,001 ÷ 10 = 0,0001", id: 'n4', x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },
    { type: 'clear', id: 'consigneN' },
    { type: 'clear', id: 'n1' },
    { type: 'clear', id: 'n2' },
    { type: 'clear', id: 'n3' },
    { type: 'clear', id: 'n4' },
    { text: "À chaque exposant −1, on divise par 10.", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "L'exposant négatif = nombre de chiffres après la virgule.", y: 0.25, sz: 0.035, color: CW },
    { text: "Question : combien de chiffres après la virgule dans 10⁻⁵ ?", id: 'qN', x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "5 chiffres", isCorrect: true },
        { text: "−5 chiffres", isCorrect: false },
        { text: "50 chiffres", isCorrect: false } ] },
    { type: 'text', text: " On a 5 chiffres : 10⁻⁵ = 0,00001.", x: 0.05, y: 0.55, sz: 0.035, color: CW, pause: 400 },

    // ---------- Définition formelle ----------
    { type: 'SEP' },
    { text: "Définition : 10⁻ⁿ = 1 / 10ⁿ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Pour tout entier positif n :", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "10⁻ⁿ est l'inverse de 10ⁿ.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "En décimal : 0,00…01 avec n chiffres après la virgule.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Exemples : ", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CW },
    { text: "10⁻¹ = 0,1", x: 0.05, y: 0.50, sz: 0.035, color: CW },
    { text: "10⁻² = 0,01", x: 0.05, y: 0.55, sz: 0.035, color: CW },
    { text: "10⁻³ = 0,001", x: 0.05, y: 0.60, sz: 0.035, color: CW },
    { text: "10⁻⁶ = 0,000 001", x: 0.05, y: 0.65, sz: 0.035, color: CW },

    // ---------- Résolution du problème ----------
    { type: 'SEP' },
    { text: "Résolution : 0,0001 = ?", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "0,0001 a 4 chiffres après la virgule.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Donc l'exposant est −4.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "0,0001 = 10⁻⁴.", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CG },
    { text: "Le diamètre du cheveu s'écrit 10⁻⁴ m.", x: 0.05, y: 0.40, sz: 0.035, color: CW },

    // ---------- Remarque + En résumé ----------
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "On observe que l'exposant négatif indique directement", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "combien de chiffres après la virgule possède le nombre.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. 10⁰ = 1 ; 10⁻ⁿ = 1 / 10ⁿ.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "2. 10⁻ⁿ s'écrit 0,00…01 avec n chiffres après la virgule.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "3. À chaque fois qu'on divise par 10, l'exposant diminue de 1.", x: 0.05, y: 0.50, sz: 0.035, color: CW },
];

// =====================================================================
// S13 — Écriture d'un nombre décimal sous la forme a × 10ⁿ
// =====================================================================
const S13_Events = [
    { text: 'Notion : Écriture sous la forme a × 10ⁿ d\'un nombre décimal', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- Fait réel + question ----------
    { text: "Un flacon contient 0,45 L de sirop.", id: 'intro1', y: 0.25, sz: 0.035, color: CW },
    { text: "La masse de la Lune : 73 000 000 000 000 000 000 000 kg.", id: 'intro2', y: 0.30, sz: 0.035, color: CW },
    { text: "Comment écrire 0,45 sous la forme a × 10ⁿ (a et n entiers) ?", y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "0,45 = 45 × 10⁻²", isCorrect: true },
        { text: "0,45 = 45 × 10²", isCorrect: false },
        { text: "0,45 = 4,5 × 10⁻¹", isCorrect: false } ] },

    // ---------- Démonstration par les fractions ----------
    { type: 'SEP' },
    { text: "Démontrons pas à pas", id: 'consigne', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "0,45, c'est 45 centièmes.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Donc 0,45 = 45 / 100.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Or 1 / 100 = 10⁻² (notion S12).", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Donc 0,45 = 45 × 10⁻².", x: 0.05, y: 0.40, sz: 0.035, bold: true, color: CG },
    { type: 'clear', id: 'consigne' },
    { text: "Méthode en 2 étapes", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Étape 1 : trouver a (le nombre sans la virgule).", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Pour 0,45 : a = 45.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Étape 2 : trouver n (combien de fois on a décalé la virgule).", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "De 0,45 à 45 : décalage de 2 rangs vers la droite.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Donc n = −2 (décalage à droite → exposant négatif).", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CW },
    { text: "Question : 7360 = 736 × 10¹, c'est bien ça ?", id: 'qM', x: 0.05, y: 0.65, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Oui, on enlève 1 zéro, donc n = 1", isCorrect: true },
        { text: "Non, 7360 = 736 × 10²", isCorrect: false },
        { text: "Non, 7360 = 736 × 10⁻¹", isCorrect: false } ] },
    { type: 'clear', id: 'qM' },
    { type: 'text', text: "Oui : 7360 = 736 × 10¹.", x: 0.05, y: 0.65, sz: 0.035, color: CW, pause: 400 },

    // ---------- Règle pratique ----------
    { type: 'SEP' },
    { text: "Règle pratique", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Si le nombre est plus petit que 1 (virgule) :", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "→ n est négatif.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Si le nombre est grand (zéros à la fin) :", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "→ n est positif.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Exemples : ", x: 0.05, y: 0.50, sz: 0.035, bold: true, color: CW },
    { text: "0,7 = 7 × 10⁻¹", x: 0.05, y: 0.55, sz: 0.035, color: CW },
    { text: "0,08 = 8 × 10⁻²", x: 0.05, y: 0.60, sz: 0.035, color: CW },
    { text: "500 = 5 × 10²", x: 0.05, y: 0.65, sz: 0.035, color: CW },
    { text: "80 000 = 8 × 10⁴", x: 0.05, y: 0.70, sz: 0.035, color: CW },

    // ---------- Résolution du problème ----------
    { type: 'SEP' },
    { text: "Résolution : 0,45 L de sirop", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Étape 1 : a = 45 (nombre sans virgule).", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Étape 2 : 2 chiffres après la virgule → n = −2.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "0,45 = 45 × 10⁻².", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CG },
    { text: "Le flacon contient 45 × 10⁻² L.", x: 0.05, y: 0.40, sz: 0.035, color: CW },

    // ---------- Remarque + En résumé ----------
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "un même nombre a plusieurs écritures possibles :", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "4500 = 45 × 10² = 450 × 10¹ = 4500 × 10⁰.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. Tout décimal peut s'écrire a × 10ⁿ avec a et n entiers.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "2. n > 0 si on enlève des zéros, n < 0 si on décale la virgule.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "3. L'écriture n'est pas unique, sauf si on impose 1 ≤ a < 10.", x: 0.05, y: 0.50, sz: 0.035, color: CW },
];

// =====================================================================
// S14 — Produit de deux nombres écrits sous la forme a × 10ⁿ
// =====================================================================
const S14_Events = [
    { text: 'Notion : Produit de deux nombres décimaux écrits sous la forme a × 10ⁿ', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- Fait réel + question ----------
    { text: "Un laboratoire commande 2 × 10² boîtes.", id: 'intro1', y: 0.25, sz: 0.035, color: CW },
    { text: "Chaque boîte contient 3 × 10⁴ comprimés.", id: 'intro2', y: 0.30, sz: 0.035, color: CW },
    { text: "Combien de comprimés au total ?", y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "6 × 10⁶", isCorrect: true },
        { text: "6 × 10⁸", isCorrect: false },
        { text: "5 × 10⁶", isCorrect: false } ] },

    // ---------- Démonstration pas à pas ----------
    { type: 'SEP' },
    { text: "Démontrons pas à pas", id: 'consigne', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "(3 × 10⁴) × (2 × 10²)", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "On regroupe les nombres et les puissances :", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "= (3 × 2) × (10⁴ × 10²)", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "= 6 × 10⁴⁺²  (on additionne les exposants).", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "= 6 × 10⁶.", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },
    { text: "Vérification : 30 000 × 200 = 6 000 000. ✓", x: 0.05, y: 0.50, sz: 0.035, color: CW },

    // ---------- Règle générale ----------
    { type: 'clear', id: 'consigne' },
    { text: "Règle générale", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ", x: 0.05, y: 0.25, sz: 0.035, bold: true, color: CG },
    { text: "On multiplie les nombres a et b entre eux.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "On additionne les exposants m et n.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Exemples : ", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CW },
    { text: "(2 × 10³) × (3 × 10⁴) = 6 × 10⁷", x: 0.05, y: 0.50, sz: 0.035, color: CW },
    { text: "(5 × 10⁻²) × (4 × 10³) = 20 × 10¹", x: 0.05, y: 0.55, sz: 0.035, color: CW },
    { text: "(7 × 10⁻³) × (2 × 10⁻²) = 14 × 10⁻⁵", x: 0.05, y: 0.60, sz: 0.035, color: CW },
    { text: "Question : (4 × 10³) × (5 × 10²) = 20 × 10⁵, c'est bien ça ?", id: 'qR', x: 0.05, y: 0.75, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Oui, 4 × 5 = 20 et 3 + 2 = 5", isCorrect: true },
        { text: "Non, c'est 9 × 10⁵", isCorrect: false },
        { text: "Non, c'est 20 × 10⁶", isCorrect: false } ] },
    { type: 'clear', id: 'qR' },
    { type: 'text', text: "Oui : (4 × 10³) × (5 × 10²) = 20 × 10⁵.", x: 0.05, y: 0.75, sz: 0.035, color: CW, pause: 400 },

    // ---------- Réajustement parfois nécessaire ----------
    { type: 'SEP' },
    { text: "Parfois on réajuste", id: 'consigneR', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Exemple : (8 × 10³) × (5 × 10²) = 40 × 10⁵", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "On peut écrire : 40 × 10⁵ = 4 × 10¹ × 10⁵ = 4 × 10⁶.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Les deux écritures sont correctes.", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CW },
    { type: 'clear', id: 'consigneR' },

    // ---------- Résolution du problème ----------
    { text: "Résolution : les comprimés du laboratoire", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "(3 × 10⁴) × (2 × 10²) = (3 × 2) × 10⁴⁺²", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "= 6 × 10⁶.", x: 0.05, y: 0.30, sz: 0.035, bold: true, color: CG },
    { text: "Le laboratoire reçoit 6 000 000 comprimés.", x: 0.05, y: 0.35, sz: 0.035, color: CW },

    // ---------- Remarque + En résumé ----------
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "on observe que la règle fonctionne aussi", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "avec des exposants négatifs.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. (a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "2. On multiplie les entiers et on additionne les exposants.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "3. On peut réajuster l'écriture à la fin si besoin.", x: 0.05, y: 0.50, sz: 0.035, color: CW },
];

// =====================================================================
// S15 — Encadrement par deux puissances de 10 consécutives
// =====================================================================
const S15_Events = [
    { text: 'Notion : Encadrement par deux puissances de 10', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- Fait réel + question ----------
    { text: "Un journaliste parle d'une ville de 384 000 habitants.", id: 'intro1', y: 0.25, sz: 0.035, color: CW },
    { text: "Il veut situer ce nombre entre deux puissances de 10.", id: 'intro2', y: 0.30, sz: 0.035, color: CW },
    { text: "Entre quelles puissances de 10 consécutives se trouve-t-il ?", y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Entre 10⁵ et 10⁶", isCorrect: true },
        { text: "Entre 10⁴ et 10⁵", isCorrect: false },
        { text: "Entre 10⁶ et 10⁷", isCorrect: false } ] },

    // ---------- Définition d'un encadrement ----------
    { type: 'SEP' },
    { text: "Qu'est-ce qu'encadrer un nombre ?", id: 'consigne', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "C'est trouver deux nombres :", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "→ un plus petit (en dessous),", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "→ un plus grand (au-dessus).", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "On écrit : petit < nombre < grand.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Exemple : 5 < 7 < 10.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { type: 'clear', id: 'consigne' },
    { text: "Encadrer par des puissances de 10 consécutives", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Puissances utiles : ", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "10³ = 1 000 ; 10⁴ = 10 000 ; 10⁵ = 100 000 ; 10⁶ = 1 000 000.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Notre nombre : 384 000.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "100 000 < 384 000 < 1 000 000.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Donc 10⁵ < 384 000 < 10⁶.", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },

    // ---------- Méthode avec a × 10ⁿ ----------
    { type: 'SEP' },
    { text: "Méthode avec l'écriture a × 10ⁿ", id: 'consigneM', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Écrivons 384 000 = 384 × 10³.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "On encadre a = 384 : 100 < 384 < 1 000.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Donc 10² < 384 < 10³.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "On multiplie tout par 10³ :", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "10² × 10³ < 384 × 10³ < 10³ × 10³.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "Donc 10⁵ < 384 000 < 10⁶.", x: 0.05, y: 0.50, sz: 0.035, bold: true, color: CG },
    { type: 'clear', id: 'consigneM' },
    { text: "Astuce : compter les chiffres du nombre.", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "384 000 a 6 chiffres → entre 10⁵ et 10⁶.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "4 500 a 4 chiffres → entre 10³ et 10⁴.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "73 a 2 chiffres → entre 10¹ et 10².", x: 0.05, y: 0.35, sz: 0.035, color: CW },

    // ---------- Cas des décimaux ----------
    { type: 'SEP' },
    { text: "Cas des décimaux", id: 'consigneD', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "0,07 = 7 × 10⁻².", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Donc 10⁻² < 0,07 < 10⁻¹.", x: 0.05, y: 0.30, sz: 0.035, bold: true, color: CG },
    { text: "0,003 = 3 × 10⁻³.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Donc 10⁻³ < 0,003 < 10⁻².", x: 0.05, y: 0.40, sz: 0.035, bold: true, color: CG },
    { type: 'clear', id: 'consigneD' },

    // ---------- Résolution du problème ----------
    { text: "Résolution : la ville de 384 000 habitants", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "384 000 a 6 chiffres.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Donc 10⁵ < 384 000 < 10⁶.", x: 0.05, y: 0.30, sz: 0.035, bold: true, color: CG },
    { text: "La population est entre 100 000 et 1 000 000.", x: 0.05, y: 0.35, sz: 0.035, color: CW },

    // ---------- Remarque + En résumé ----------
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "on observe que le nombre de chiffres d'un entier", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "donne directement l'exposant de la borne supérieure.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. Encadrer = trouver un plus petit et un plus grand.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "2. Pour un entier à k chiffres : 10ᵏ⁻¹ < N < 10ᵏ.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "3. Pour un décimal a × 10ⁿ (1 ≤ a < 10) : 10ⁿ < N < 10ⁿ⁺¹.", x: 0.05, y: 0.50, sz: 0.035, color: CW },
];

// =====================================================================
// S16 — Comparaison de deux nombres écrits sous la forme a × 10ⁿ
// =====================================================================
const S16_Events = [
    { text: 'Notion : Comparer deux nombres décimaux écrits sous la forme a × 10ⁿ', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- Fait réel + question ----------
    { text: "La ville A : 45 × 10⁴ habitants.", id: 'intro1', y: 0.25, sz: 0.035, color: CW },
    { text: "La ville B : 320 × 10³ habitants.", id: 'intro2', y: 0.30, sz: 0.035, color: CW },
    { text: "Quelle ville est la plus peuplée ?", y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "La ville A (45 × 10⁴)", isCorrect: true },
        { text: "La ville B (320 × 10³)", isCorrect: false },
        { text: "Elles sont égales", isCorrect: false } ] },

    // ---------- Démonstration ----------
    { type: 'SEP' },
    { text: "Même puissance de 10, puis comparaison", id: 'consigne', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Écrivons les deux nombres avec la même puissance :", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "45 × 10⁴ = 450 × 10³.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "320 × 10³ reste : 320 × 10³.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "On compare les entiers : 450 > 320.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Donc 450 × 10³ > 320 × 10³.", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },
    { text: "C'est-à-dire : 45 × 10⁴ > 320 × 10³.", x: 0.05, y: 0.50, sz: 0.035, color: CW },

    // ---------- Méthode en 3 étapes ----------
    { type: 'clear', id: 'consigne' },
    { text: "Méthode en 3 étapes", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "1. Écrire les deux nombres avec la même puissance de 10.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "2. Comparer les entiers obtenus.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "3. Conclure avec le même signe.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Question : il faut la même puissance de 10 pour comparer ?", id: 'qM', x: 0.05, y: 0.55, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Oui, puis on compare les entiers", isCorrect: true },
        { text: "Non, on compare seulement les exposants", isCorrect: false },
        { text: "Non, on compare a et n séparément", isCorrect: false } ] },
    { type: 'clear', id: 'qM' },
    { type: 'text', text: "Oui : même puissance → on compare les entiers.", x: 0.05, y: 0.55, sz: 0.035, color: CW, pause: 400 },

    // ---------- Cas avec exposants négatifs ----------
    { type: 'SEP' },
    { text: "Exemple avec des exposants négatifs", id: 'consigneN', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Comparons 736 × 10⁻² et 8 × 10⁻¹.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "8 × 10⁻¹ = 80 × 10⁻² (même puissance).", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "On compare : 736 > 80.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Donc 736 × 10⁻² > 8 × 10⁻¹.", x: 0.05, y: 0.40, sz: 0.035, bold: true, color: CG },
    { text: "Vérification : 7,36 > 0,8. ✓", x: 0.05, y: 0.45, sz: 0.035, color: CW },

    // ---------- Résolution du problème ----------
    { type: 'clear', id: 'consigneN' },
    { text: "Résolution : les deux villes", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "45 × 10⁴ = 450 × 10³, et 450 > 320.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "La ville A est la plus peuplée (450 000 > 320 000).", x: 0.05, y: 0.30, sz: 0.035, bold: true, color: CG },

    // ---------- Remarque + En résumé ----------
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "on observe que la comparaison devient simple", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "dès que les deux écritures partagent la même puissance de 10.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. Pour comparer, on met la même puissance de 10.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "2. On compare ensuite les entiers.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "3. Le signe d'inégalité est conservé.", x: 0.05, y: 0.50, sz: 0.035, color: CW },
];

// =====================================================================
// S17 — Nombre décimal d'ordre n, troncature, décimaux consécutifs
// =====================================================================
const S17_Events = [
    { text: 'Notion : Nombre décimal d\'ordre n, troncature', y: 0.10, sz: 0.06, bold: true, color: CY, isTitle: true },

    // ---------- Fait réel + question ----------
    { text: "Au marché, la balance affiche 3,489371 kg.", id: 'intro1', y: 0.25, sz: 0.035, color: CW },
    { text: "Le vendeur écrit 3,48 kg sur le ticket.", id: 'intro2', y: 0.30, sz: 0.035, color: CW },
    { text: "Quel est l'ordre de 7,36 ? C'est quoi une troncature ?", y: 0.35, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "7,36 est d'ordre 2", isCorrect: true },
        { text: "7,36 est d'ordre 0", isCorrect: false },
        { text: "7,36 est d'ordre 1", isCorrect: false } ] },

    // ---------- Définition de l'ordre n ----------
    { type: 'SEP' },
    { text: "Définition : nombre décimal d'ordre n", id: 'consigne', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Un nombre décimal d'ordre n s'écrit :", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "entier relatif × 10⁻ⁿ.", x: 0.05, y: 0.30, sz: 0.035, bold: true, color: CG },
    { text: "Exemple : 7,36 = 736 × 10⁻².", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "736 est un entier, l'exposant est −2.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Donc 7,36 est d'ordre 2.", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },
    { type: 'clear', id: 'consigne' },

    // ---------- Un nombre a plusieurs ordres ----------
    { text: "Un même nombre a plusieurs ordres !", y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "7,36 = 736 × 10⁻² → ordre 2", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "7,36 = 7 360 × 10⁻³ → ordre 3", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "7,36 = 73 600 × 10⁻⁴ → ordre 4", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "7,36 est d'ordre tout entier ≥ 2.", x: 0.05, y: 0.40, sz: 0.035, bold: true, color: CG },
    { text: "Question : 5,27 est d'ordre 2, c'est bien ça ?", id: 'qO', x: 0.05, y: 0.60, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "Oui, ordre 2 (et tout ordre ≥ 2)", isCorrect: true },
        { text: "Non, ordre 1", isCorrect: false },
        { text: "Non, ordre 3 seulement", isCorrect: false } ] },
    { type: 'clear', id: 'qO' },
    { type: 'text', text: "Oui : 5,27 = 527 × 10⁻², ordre 2.", x: 0.05, y: 0.60, sz: 0.035, color: CW, pause: 400 },

    // ---------- La troncature ----------
    { type: 'SEP' },
    { text: "Troncature à n décimales", id: 'consigneT', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "Définition : on garde les n premiers chiffres", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "après la virgule, on coupe le reste SANS arrondir.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "Exemple : 3,489371.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Troncature à 1 décimale : 3,4", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Troncature à 2 décimales : 3,48", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },
    { text: "C'est ce que fait le vendeur sur le ticket !", x: 0.05, y: 0.50, sz: 0.035, color: CW },
    { text: "Question : troncature à 1 décimale de 6,783 = ?", id: 'qT', x: 0.05, y: 0.65, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "6,7", isCorrect: true },
        { text: "6,8 (arrondi)", isCorrect: false },
        { text: "6,78", isCorrect: false } ] },
    { type: 'clear', id: 'qT' },
    { type: 'clear', id: 'consigneT' },
    { type: 'text', text: "6,7 : on coupe après la 1ʳᵉ décimale.", x: 0.05, y: 0.65, sz: 0.035, color: CW, pause: 400 },

    // ---------- Décimaux consécutifs d'ordre n ----------
    { type: 'SEP' },
    { text: "Décimaux consécutifs d'ordre n", id: 'consigneC', y: 0.20, sz: 0.035, bold: true, color: CW },
    { text: "1,8 et 1,9 sont consécutifs d'ordre 1.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "Écart : 1,9 − 1,8 = 0,1 = 10⁻¹.", x: 0.05, y: 0.30, sz: 0.035, color: CW },
    { text: "1,85 et 1,86 sont consécutifs d'ordre 2.", x: 0.05, y: 0.35, sz: 0.035, color: CW },
    { text: "Écart : 1,86 − 1,85 = 0,01 = 10⁻².", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "Le décimal d'ordre 2 qui suit 1,85 est 1,86.", x: 0.05, y: 0.45, sz: 0.035, bold: true, color: CG },
    { text: "Question : quel décimal d'ordre 2 suit 1,85 ?", id: 'qC', x: 0.05, y: 0.60, sz: 0.035, color: CW },
    { type: 'question', text: "As-tu une idée ?", options: [
        { text: "1,86", isCorrect: true },
        { text: "1,9", isCorrect: false },
        { text: "1,84", isCorrect: false } ] },
    { type: 'clear', id: 'qC' },
    { type: 'clear', id: 'consigneC' },
    { type: 'text', text: "1,86 : on ajoute 0,01 = 10⁻².", x: 0.05, y: 0.60, sz: 0.035, color: CW, pause: 400 },

    // ---------- Remarque + En résumé ----------
    { type: 'SEP' },
    { text: "Remarque : ", x: 0.05, y: 0.20, sz: 0.035, bold: true, color: CY },
    { text: "on observe que la troncature coupe sans arrondir,", x: 0.20, y: 0.20, sz: 0.035, color: CW },
    { text: "contrairement à l'arrondi qui regarde le chiffre suivant.", x: 0.05, y: 0.25, sz: 0.035, color: CW },
    { text: "En résumé (à retenir) : ", x: 0.05, y: 0.35, sz: 0.035, bold: true, color: CY },
    { text: "1. Un décimal d'ordre n s'écrit entier × 10⁻ⁿ.", x: 0.05, y: 0.40, sz: 0.035, color: CW },
    { text: "2. Troncature à n décimales = couper sans arrondir.", x: 0.05, y: 0.45, sz: 0.035, color: CW },
    { text: "3. Deux décimaux consécutifs d'ordre n ont pour écart 10⁻ⁿ.", x: 0.05, y: 0.50, sz: 0.035, color: CW },
];
const S18_Events = [
  {
    text: "Notion : La hauteur d'un triangle",
    y: 0.08,
    sz: 0.055,
    bold: true,
    color: CY,
    isTitle: true,
  },
  {
    text: "Voici un triangle ABC.",
    x: 0.05,
    y: 0.16,
    sz: 0.032,
    color: CW,
  },

  // --- Triangle ABC (base BC horizontale) ---
  {
    type: "line",
    x1: 0.27,
    y1: 0.22,
    x2: 0.14,
    y2: 0.58,
    color: CW,
    duration: 45,
  }, // AB
  {
    type: "line",
    x1: 0.14,
    y1: 0.58,
    x2: 0.42,
    y2: 0.58,
    color: CW,
    duration: 45,
  }, // BC
  {
    type: "line",
    x1: 0.42,
    y1: 0.58,
    x2: 0.27,
    y2: 0.22,
    color: CW,
    duration: 45,
  }, // CA
  { text: "A", x: 0.265, y: 0.185, sz: 0.032, color: CY },
  { text: "B", x: 0.115, y: 0.605, sz: 0.032, color: CY },
  { text: "C", x: 0.43, y: 0.605, sz: 0.032, color: CY },

  {
    type: "question",
    text: "Sais-tu ce qu'est la hauteur d'un triangle ?",
    options: [
      { text: "Oui, je crois", isCorrect: true },
      { text: "Non, aucune idée", isCorrect: false },
    ],
  },
  { text: "Définition :", x: 0.05, y: 0.7, sz: 0.032, bold: true, color: CY },
  {
    text: "La hauteur issue d'un sommet coupe",
    x: 0.05,
    y: 0.75,
    sz: 0.028,
    color: CW,
  },
  {
    text: "à angle droit le côté opposé.",
    x: 0.05,
    y: 0.79,
    sz: 0.028,
    color: CW,
  },

  // --- Hauteur issue de A, pied sur (BC) ---
  {
    type: "question",
    text: "La hauteur issue de A doit tomber sur quel côté ?",
    options: [
      { text: "Sur (BC)", isCorrect: true },
      { text: "Sur (AB)", isCorrect: false },
      { text: "Sur (AC)", isCorrect: false },
    ],
  },
  {
    type: "line",
    x1: 0.27,
    y1: 0.22,
    x2: 0.27,
    y2: 0.58,
    color: CG,
    duration: 70,
  },
  {
    type: "line",
    x1: 0.27,
    y1: 0.566,
    x2: 0.278,
    y2: 0.566,
    color: "#ffffff",
    duration: 12,
  },
  {
    type: "line",
    x1: 0.278,
    y1: 0.58,
    x2: 0.278,
    y2: 0.566,
    color: "#ffffff",
    duration: 12,
  },

  // --- Hauteur issue de B, pied sur (AC) ---
  {
    type: "question",
    text: "Et la hauteur issue de B, sur quel côté tombe-t-elle ?",
    options: [
      { text: "Sur (AC)", isCorrect: true },
      { text: "Sur (BC)", isCorrect: false },
      { text: "Sur (AB)", isCorrect: false },
    ],
  },
  {
    type: "line",
    x1: 0.14,
    y1: 0.58,
    x2: 0.321,
    y2: 0.342,
    color: CG,
    duration: 70,
  },
  {
    type: "line",
    x1: 0.314,
    y1: 0.35,
    x2: 0.319,
    y2: 0.361,
    color: "#ffffff",
    duration: 12,
  },
  {
    type: "line",
    x1: 0.325,
    y1: 0.353,
    x2: 0.319,
    y2: 0.361,
    color: "#ffffff",
    duration: 12,
  },

  // --- Hauteur issue de C, pied sur (AB) ---
  {
    type: "question",
    text: "Enfin, la hauteur issue de C, sur quel côté tombe-t-elle ?",
    options: [
      { text: "Sur (AB)", isCorrect: true },
      { text: "Sur (BC)", isCorrect: false },
      { text: "Sur (AC)", isCorrect: false },
    ],
  },
  {
    type: "line",
    x1: 0.42,
    y1: 0.58,
    x2: 0.222,
    y2: 0.354,
    color: CG,
    duration: 70,
  },
  {
    type: "line",
    x1: 0.228,
    y1: 0.361,
    x2: 0.224,
    y2: 0.373,
    color: "#ffffff",
    duration: 12,
  },
  {
    type: "line",
    x1: 0.217,
    y1: 0.365,
    x2: 0.224,
    y2: 0.373,
    color: "#ffffff",
    duration: 12,
  },

  // --- Point de concours ---
  {
    type: "question",
    isVerification: true,
    text: "Regarde bien les 3 hauteurs : que remarques-tu ?",
    options: [
      { text: "Elles sont parallèles", isCorrect: false },
      { text: "Elles se croisent toutes au même point", isCorrect: true },
      { text: "Elles ne se touchent jamais", isCorrect: false },
    ],
    retryStart: 260,
  },
  {
    type: "line",
    x1: 0.264,
    y1: 0.403,
    x2: 0.276,
    y2: 0.415,
    color: "#ffffff",
    duration: 15,
  },
  {
    type: "line",
    x1: 0.264,
    y1: 0.415,
    x2: 0.276,
    y2: 0.403,
    color: "#ffffff",
    duration: 15,
  },
  { text: "O", x: 0.24, y: 0.4, sz: 0.032, color: "#ffffff" },

  {
    text: "Remarque : les trois hauteurs se coupent en un même point.",
    x: 0.05,
    y: 0.86,
    sz: 0.03,
    color: CB,
  },
  {
    text: "Ce point s'appelle l'ORTHOCENTRE du triangle.",
    x: 0.05,
    y: 0.91,
    sz: 0.032,
    color: CG,
    bold: true,
  },
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
                    { id: 'S17', title: 'Nombre décimal d\'ordre n', events: S17_Events, nextNotionId: 'S12' },
                    { id: 'S18', title: 'Hauteur d\'un triangle', events: S18_Events, nextNotionId: 'S12' }

                

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
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
    { type: 'text', text: 'Le cercle', x: 0.05, y: 0.08, sz: 0.05, bold: true, color: '#f5e441', start: 0, isTitle: true },
    { type: 'cercle_pedagogique', x: 0.50, y: 0.52, r: 0.28, color: '#4a9eff', angle: 45, start: 30, duration: 1200, stop: 1250 },
    { type: 'move_cercle', xStart: 0.50, xEnd: 0.25, y: 0.52, r: 0.28, angle: 45, color: '#4a9eff', start: 1250, duration: 80 },
    { type: 'detached_angle', xStart: 0.25, xEnd: 0.70, y: 0.52, r: 0.28, angle: 45, color: '#ff4444', start: 1350, duration: 100 },
    { text: "Voici l'angle au centre d'un cercle.", x: 0.55, y: 0.80, sz: 0.035, color: '#8dd0f0' },
    { 
        type: 'question', 
        isVerification: true,
        text: "Pourquoi dit-on que cet angle est 'au centre' ?", 
        options: [
            { text: "Parce que son sommet est le point O", isCorrect: true },
            { text: "Parce qu'il est joli", isCorrect: false },
            { text: "Parce qu'il touche le bord", isCorrect: false }
        ],
        retryStart: 5
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

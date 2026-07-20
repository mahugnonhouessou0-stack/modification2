export const CW = '#f2ede4';
export const CY = '#f5e441';
export const CG = '#7af0a0';
export const CB = '#8dd0f0';

const S0_Events = [
  { text: 'Bienvenue dans le cours de Physique-Chimie et Technologie pour la Première D (D).', x: 0.5, y: 0.22, sz: 0.055, bold: true, color: CY, align: 'center' },
  { text: 'L’objectif est de comprendre une notion, de l’appliquer puis de vérifier sa compréhension.', x: 0.5, y: 0.35, sz: 0.035, color: CW, align: 'center' },
  { text: 'Chaque activité suit une logique simple : observation, exemple, pratique et correction.', x: 0.5, y: 0.46, sz: 0.034, color: CB, align: 'center' },
  {
    type: 'question',
    isIntro: true,
    text: 'Prêt à commencer cette séance ?'
  }
];

export const notions = {
  S0: {
    id: 'S0',
    title: 'Découverte',
    events: S0_Events,
    nextNotionId: null
  }
};

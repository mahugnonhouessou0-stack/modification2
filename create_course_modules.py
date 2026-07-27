from pathlib import Path

root = Path(r'c:\Users\BAKPE G.S. Espéro\Desktop\maths\classes')
subjects = ['maths', 'pct']

base_folders = [
    ('6eme', 'la 6e', ''),
    ('5eme', 'la 5e', ''),
    ('4eme', 'la 4e', ''),
    ('3eme', 'la 3e', ''),
    ('premiere/a1', 'la Première A1', ' (A1)'),
    ('premiere/a2', 'la Première A2', ' (A2)'),
    ('premiere/b', 'la Première B', ' (B)'),
    ('premiere/c', 'la Première C', ' (C)'),
    ('premiere/d', 'la Première D', ' (D)'),
    ('seconde/a', 'la Seconde A', ' (A)'),
    ('seconde/cd', 'la Seconde C/D', ' (C/D)'),
    ('terminale/a1', 'la Terminale A1', ' (A1)'),
    ('terminale/a2', 'la Terminale A2', ' (A2)'),
    ('terminale/b', 'la Terminale B', ' (B)'),
    ('terminale/c', 'la Terminale C', ' (C)'),
    ('terminale/d', 'la Terminale D', ' (D)'),
]

for folder, class_label, series_label in base_folders:
    dir_path = root / folder
    dir_path.mkdir(parents=True, exist_ok=True)
    for subject in subjects:
        subject_title = 'Mathématiques' if subject == 'maths' else 'Physique-Chimie et Technologie'
        file_path = dir_path / f'{subject}.js'
        content = f"""export const CW = '#f2ede4';
export const CY = '#f5e441';
export const CG = '#7af0a0';
export const CB = '#8dd0f0';

const S0_Events = [
  {{ text: 'Bienvenue dans le cours de {subject_title} pour {class_label}{series_label}.', x: 0.5, y: 0.22, sz: 0.055, bold: true, color: CY, align: 'center' }},
  {{ text: 'L’objectif est de comprendre une notion, de l’appliquer puis de vérifier sa compréhension.', x: 0.5, y: 0.35, sz: 0.035, color: CW, align: 'center' }},
  {{ text: 'Chaque activité suit une logique simple : observation, exemple, pratique et correction.', x: 0.5, y: 0.46, sz: 0.034, color: CB, align: 'center' }},
  {{
    type: 'question',
    isIntro: true,
    text: 'Prêt à commencer cette séance ?'
  }}
];

export const notions = {{
  S0: {{
    id: 'S0',
    title: 'Découverte',
    events: S0_Events,
    nextNotionId: null
  }}
}};
"""
        file_path.write_text(content, encoding='utf-8')

print('Modules created successfully')

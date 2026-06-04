# 3o

Ce projet est un moteur de "Storytelling Pédagogique". Contrairement à une application de quiz classique, il simule une séance de travail réelle sur tableau noir où l'élève interagit avec **Camélia**, une IA (scénarisée) qui apprend en même temps que lui.

## 🚀 Stack Technique
- **Langage** : JavaScript (ES6+ Modules)
- **Rendu** : HTML5 Canvas API
- **Style** : CSS3 avec Variables pour le support de thèmes (Tableau Vert/Noir)
- **Sons** : Audio spatialisé (simulé) pour l'immersion (craie, brosse)

## 📂 Anatomie du Système (Séparation des Pouvoirs)

Pour comprendre le code, il faut voir le projet comme un spectacle de marionnettes :

### 1. 🧠 Le Cerveau : `moteur.js` (L'Orchestrateur)
C'est lui qui possède la **Timeline**.
- **Fonctionnement** : Il transforme une liste d'événements statiques en une séquence fluide. Il incrémente un `timer` global.
- **La `DrawingLibrary`** : C'est le dictionnaire des capacités du moteur. Si vous voulez dessiner un triangle, c'est ici qu'on ajoute la fonction de rendu.
- **Gestion du Flux** : Il gère les interruptions (pauses, questions). Le moteur s'arrête (`isPaused = true`) dès qu'une question est posée et attend un signal de `dialogue.js` pour repartir.

### 2. ✍️ La Main : `tableau.js` (Le Rendu Physique)
Il s'occupe de la "matière".
- **Responsive Canvas** : La fonction `sizeBoard` gère le **DPR (Device Pixel Ratio)**. Un dessin à 0.5 (milieu) sera toujours au milieu, que l'écran soit un iPhone ou un écran 4K.
- **État Physique** : Il stocke la couleur du tableau, la position de l'effaceur et la vitesse de lecture.
- **Audio** : Il déclenche `chalkSound` et `eraserSound`. **Important** : Le son est asservi à l'animation. Si rien ne bouge, le son se coupe.

### 3. 📜 Le Scénario : `contenu.js` (La Base de Connaissances)
C'est le fichier le plus "humain".
- **Le DSL (Domain Specific Language)** : Les leçons sont écrites en JSON. 
- **Coordination relative** : On ne dit pas "Dessine à 400px", on dit `{ x: 0.4, y: 0.2 }`. 
- **Enchaînement** : La propriété `nextNotionId` permet de créer des embranchements ou des suites logiques entre les chapitres.

### 4. 💬 La Voix : `dialogue.js` (L'Interface Humaine)
Contrairement au tableau (Canvas), cette partie est en **HTML/CSS pur**.
- **Pourquoi ?** Pour l'accessibilité, la sélection de texte et la facilité de mise en forme (bulles de chat).
- **Effet Machine à écrire** : Gère le rythme de lecture de l'élève.

---

## ⚙️ Concepts Clés pour les Développeurs

### Le Cycle de Vie d'un Dessin
1. Le `moteur` lit un événement : `{ type: 'cercle', x: 0.5, y: 0.5, r: 0.2, start: 100, duration: 60 }`.
2. À `timer = 100`, il appelle `DrawingLibrary.cercle`.
3. La fonction calcule le `progress` (de 0 à 1) basé sur `(timer - start) / duration`.
4. Elle dessine une portion d'arc proportionnelle à ce `progress`.
5. Elle renvoie `true` tant que `progress < 1` pour maintenir le son de la craie actif.

### Le Système de "Nettoyage Sélectif"
Le moteur ne fait pas qu'effacer tout le tableau. Il gère des couches :
- `{ text: "Titre", isTitle: true }` : Ne sera pas effacé par un `SEP` (séparateur).
- `{ type: 'clear', target: 'traits_groupes' }` : Efface uniquement l'animation des traits pour laisser place à la conclusion textuelle.

---

## 🛠️ Guide du Contributeur

### Ajouter une nouvelle animation (ex: un Carré)
1. Ouvrez `moteur.js`.
2. Dans `DrawingLibrary`, ajoutez :
   ```javascript
   carre: (ev) => {
       const p = Math.min(1, (timer - ev.start) / (ev.duration || 60));
       ctx.strokeRect(boardWidth * ev.x, boardHeight * ev.y, ev.w * boardWidth * p, ev.h * boardHeight * p);
       return p < 1;
   }
   ```
3. Utilisez-le dans `contenu.js` : `{ type: 'carre', x: 0.1, y: 0.1, w: 0.2, h: 0.2 }`.

### Ajouter une nouvelle Notion
1. Dans `contenu.js`, créez un tableau `S5_Events`.
2. Déclarez la notion dans l'objet `notions`.
3. **Lien** : N'oubliez pas de mettre à jour le `nextNotionId` de la notion précédente pour pointer vers `S5`.

---

## 🎨 Standards Visuels (Design Tokens)

| Constante | Couleur | Usage |
| :--- | :--- | :--- |
| `CW` | `#f2ede4` | Texte standard (Craie Blanche) |
| `CY` | `#f5e441` | Titres et emphase (Craie Jaune) |
| `CG` | `#7af0a0` | Succès et validation (Craie Verte) |
| `CB` | `#8dd0f0` | Indices et notes (Craie Bleue) |

**Positionnement** : Toujours utiliser des multiples de `0.05` pour la grille imaginaire (ex: `x: 0.05`, `x: 0.10`) pour garder un alignement propre.

## 🚀 Installation Rapide

1. **Serveur Local Requis** : À cause des modules JS, le double-clic sur `index.html` ne fonctionnera pas.
   - VS Code : Installez **Live Server**.
   - Terminal : `npx serve .` ou `python -m http.server`.
2. **Identifiants** : Passez par `auth.html` pour configurer votre nom, il sera injecté dynamiquement dans les dialogues via `{{name}}`.

## 🛤️ Évolutions & Suivi
La liste des tâches techniques, les bugs identifiés et la roadmap de modernisation sont centralisés dans le fichier TODO.md.

Consultez ce fichier avant toute nouvelle contribution pour voir les priorités (notamment la migration vers une architecture pilotée par les données).

---
*3o - Chaque élève compte*
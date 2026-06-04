# 📋 Roadmap & Tâches (TODO)

Ce fichier centralise les chantiers prioritaires pour transformer ce prototype en une plateforme EdTech robuste.

## 🗄️ 1. Modernisation de la Data (Priorité Haute)
*L'objectif est de passer d'un contenu statique à un contenu dynamique.*
- [ ] **Base de données (Backend)** 
 - La gestion de auth.html...
- [ ] **Migration vers une API (Backend)** : 
    - Remplacer l'import de `contenu.js` par un `fetch()` vers une base de données.
    - **Choix technologique conseillé** : **Supabase** ou **Firebase** (pour la rapidité et la gestion native du JSON).
    - **Pourquoi ?** Permettre la mise à jour des cours en temps réel sans re-déployer l'application.
- [ ] **Schema NoSQL** : Structurer la base pour supporter les types d'événements (text, question, simulation).
- [ ] **Persistance Utilisateur** : Stocker la progression (`currentNotionId`) en base de données pour que l'élève puisse reprendre sa leçon sur un autre appareil.

## 🤖 2. Intelligence Pédagogique (Camélia)
*Améliorer l'interaction pour la rendre plus humaine.*
- [x] **Compréhension Sémantique** : Intégration de Transformers.js pour valider le sens des phrases.L 
Le Modèle (MiniLM) : C'est une version miniature de l'intelligence qui alimente les moteurs de recherche. Il transforme chaque phrase en une liste de nombres (un vecteur).
La Comparaison (cos_sim) : L'IA compare l'angle entre les deux vecteurs. Si l'élève dit "C'est un nombre premier" et que tu attendais "Un nombre qui n'a que deux diviseurs", l'IA verra que ces phrases vivent dans le même "espace mathématique" et validera la réponse.
Liberté totale : L'élève peut écrire une phrase très longue, l'IA cherchera l'intention principale.
- [ ] **Gestion de l'incertitude** : Si le score de similarité est entre 0.5 et 0.7, faire dire à Camélia : "Je crois comprendre, tu veux dire que... ?"
- [ ] **Système de "Hints" (Indices)** : Si l'élève échoue 2 fois, Camélia doit déclencher un événement de type `hint` (petit texte d'aide au tableau).
- [ ] **Learning Analytics** : Enregistrer chaque erreur de l'élève en base pour générer un rapport de compréhension destiné à l'enseignant.

## 📱 3. Expérience Utilisateur (UX) & Mobilité
*S'adapter aux réalités de terrain (connexions instables, petits écrans).*

- [ ] **Mode Offline (PWA)** : Transformer l'app en Progressive Web App. L'élève doit pouvoir charger sa leçon à l'école et la terminer à la maison sans internet.
- [ ] **Optimisation Mobile** : Revoir la taille des boutons de dialogue pour les pouces sur smartphone.
- [ ] **Dashboard Enseignant** : Créer une interface simple pour voir la liste des élèves et leur avancée dans les "Notions".

## 🎨 4. Moteur Graphique (Canvas)
*Ajouter des outils visuels.*

- [ ] **Nouveaux types de dessins** : 
    - `carre`, `triangle`, `fraction_visuelle` (un gâteau coupé en parts).
- [ ] **Support Multi-couleurs** : Permettre à un événement de changer la couleur de la craie dynamiquement au milieu d'une phrase.

---

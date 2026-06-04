// Import de la bibliothèque Transformers.js (via CDN pour plus de simplicité)
import { pipeline, cos_sim } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

import { 
    canvas, ctx, boardWidth, boardHeight, boardColor, particles, 
    isPaused, isTransitioning, getNextPhase, getCurrentNotionId, animationSpeed, eraserX, getFont, drawBoardBackground, drawEraser, createConfetti,
    chalkSound, eraserSound, setCurrentNotionId, setPaused, setIsTransitioning, setNextPhase, setAnimationSpeed, setBoardColor, setEraserX
} from './tableau.js';

import { notions, CW, CY, CG, CB } from './contenu.js';
// On garde les constantes de style mais on ne récupère plus 'notions' ici
import { CW, CY, CG, CB } from './contenu.js';

// Variable globale pour stocker les leçons récupérées
let notions = {};

import {
    createDialogue, updateDialogueToSuccess, openDialogueBox, closeDialogueBox, clearDialogueHistory
} from './dialogue.js';

/**
 * Fonction utilitaire pour ajouter un temps de pause (dwell time) à un événement.
 * Utilisable dans contenu.js pour rendre les simulations scalables.
 */
export function dwell(event, pauseDuration) {
    return { ...event, pause: pauseDuration };
}

let timer = 0, events = [], maxTime = 0;
let pendingQuestionTimeout = null;
let extractor = null; // Le modèle d'IA

/**
 * Simule un appel API pour charger les notions
 * C'est le contournement gratuit : on charge un fichier JSON local
 */
async function loadData() {
    try {
        const response = await fetch('./notions.json');
        notions = await response.json();
        initEvents(); // On initialise le moteur une fois les données reçues
    } catch (e) {
        console.error("Erreur de chargement des leçons : ", e);
    }
}

/**
 * Charge le modèle d'IA sémantique en arrière-plan
 */
async function loadSemanticModel() {
    if (extractor) return;
    console.log("[IA] Chargement du modèle sémantique...");
    // Utilisation d'un modèle léger optimisé pour le français et la similarité
    extractor = await pipeline('feature-extraction', 'Xenova/paraphrase-multilingual-MiniLM-L12-v2');
    console.log("[IA] Modèle prêt.");
}
loadSemanticModel();

/**
 * Vérifie si deux phrases ont le même sens
 */
async function arePhrasesSimilar(input, target) {
    if (!extractor) return fuzzyMatch(input, target); // Fallback si le modèle n'est pas prêt

    // Génération des "empreintes digitales" (embeddings) des phrases
    const output1 = await extractor(input, { pooling: 'mean', normalize: true });
    const output2 = await extractor(target, { pooling: 'mean', normalize: true });

    // Calcul du score de similarité cosinus (de 0 à 1)
    const similarity = cos_sim(output1.data, output2.data);
    console.log(`[IA] Score de similarité : ${similarity.toFixed(2)}`);
    
    return similarity > 0.75; // Seuil de tolérance (ajustable)
}

const REPLAY_LIMIT_PER_NOTION = 3;
const TOTAL_REPLAY_LIMIT_MS = 15 * 60 * 1000;
let notionReplayCounts = {};
let totalReplayTimeMs = 0;
let currentReplayStartMs = null;
let currentReplayNotionId = null;
let lastCompletedNotionId = getCurrentNotionId();
let lastNotionUnderstood = true;

// --- PERSISTANCE GRATUITE (LocalStorage) ---
function saveProgress(notionId) {
    localStorage.setItem('user_progress', notionId);
}

function loadProgress() {
    return localStorage.getItem('user_progress') || 'S0';
}

function evaluateNotionUnderstood() {
    const questionEvents = events.filter(ev => ev.type === 'question');
    if (questionEvents.length === 0) return true;
    return questionEvents.every(ev => ev.correctlyAnswered === true);
}

function finishReplaySessionIfActive() {
    if (currentReplayStartMs !== null && currentReplayNotionId === getCurrentNotionId()) {
        totalReplayTimeMs += Date.now() - currentReplayStartMs;
        currentReplayStartMs = null;
        currentReplayNotionId = null;
    }
}

// --- LOGIQUE DE TRANSITION ---
// Identifie l'ID de la notion suivante
const getNextNotionId = () => {
    const currentId = getCurrentNotionId();
    const notion = notions[currentId];
    const nextId = notion ? notion.nextNotionId : 'S1';
    console.log(`[Moteur] Calcul de la suite : ${currentId} -> ${nextId}`);
    return nextId;
};

// Déclenche l'animation de transition (effaceur) vers la notion suivante
const transitionToNextNotion = () => {
    if (pendingQuestionTimeout) {
        clearTimeout(pendingQuestionTimeout);
        pendingQuestionTimeout = null;
    }
    closeDialogueBox();
    const nextId = getNextNotionId();
    setEraserX(-100);
    saveProgress(nextId); // Sauvegarde automatique et gratuite
    setIsTransitioning(true);
    setNextPhase(nextId);
    setPaused(false); // On s'assure que le moteur tourne pour l'animation de l'effaceur
};

function showReplayLimitMessage(text) {
    createDialogue({
        text,
        author: 'Camélia',
        choices: [{ label: "D’accord", value: 'ok' }],
        onChoice: () => closeDialogueBox()
    });
    openDialogueBox();
}

function requestReplay() {
    if (isTransitioning) {
        showReplayLimitMessage("Je termine d'abord la transition actuelle avant de rejouer.");
        return;
    }

    const targetNotion = (!lastNotionUnderstood && lastCompletedNotionId) ? lastCompletedNotionId : getCurrentNotionId();
    const replayCount = notionReplayCounts[targetNotion] || 0;

    if (replayCount >= REPLAY_LIMIT_PER_NOTION) {
        showReplayLimitMessage("Tu as déjà repris cette leçon 3 fois. On continue avec la suite.");
        return;
    }
    if (totalReplayTimeMs >= TOTAL_REPLAY_LIMIT_MS) {
        showReplayLimitMessage("Tu as déjà utilisé 15 minutes de reprise. On continue avec la suite.");
        return;
    }

    notionReplayCounts[targetNotion] = replayCount + 1;
    if (currentReplayStartMs === null) {
        currentReplayStartMs = Date.now();
        currentReplayNotionId = targetNotion;
    }

    performReset(targetNotion, true);
}

window.onReplayRequest = requestReplay;

// --- BIBLIOTHÈQUE DE DESSIN ---
const DrawingLibrary = {
    text: (ev) => {
        const elapsed = timer - ev.start;
        const duration = ev.duration || (ev.text ? ev.text.length * 2 : 1);
        const progress = Math.min(1, elapsed / duration);
        
        const count = Math.floor(progress * (ev.text ? ev.text.length : 0));
        const safeCount = Math.max(count, progress > 0 ? 1 : 0);
        if (safeCount <= 0 && progress <= 0) return false;

        ctx.fillStyle = ev.color || CW;
        ctx.font = getFont(ev.sz || 0.045, ev.bold, ev.italic);
        ctx.textAlign = ev.align || 'left';
        const textX = boardWidth * (ev.x || 0.05);
        const textY = (ev.y || 0.5) * boardHeight;
        const textToDraw = ev.text.slice(0, Math.max(safeCount, progress === 1 ? ev.text.length : 0));
        ctx.fillText(textToDraw, textX, textY);
        ctx.textAlign = 'left'; // Réinitialisation pour les autres éléments

        // Gestion du soulignement (spécifique à l'arithmétique)
        if (ev.underline && timer >= ev.start + duration) {
            const uStart = ev.start + duration;
            const uProgress = Math.min(1, (timer - uStart) / 30);
            ctx.save();
            const contentText = ev.text.trimStart();
            const contentWidth = ctx.measureText(contentText).width;
            const leadingSpacesWidth = ctx.measureText(ev.text.substring(0, ev.text.indexOf(contentText))).width;
            const underlineStartX = textX + leadingSpacesWidth;
            const fontSize = Math.round(boardHeight * (ev.sz || 0.045));
            ctx.strokeStyle = ev.color; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(underlineStartX, textY + fontSize * 0.15);
            ctx.lineTo(underlineStartX + contentWidth * uProgress, textY + fontSize * 0.15); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(underlineStartX, textY + fontSize * 0.3);
            ctx.lineTo(underlineStartX + contentWidth * uProgress, textY + fontSize * 0.3); ctx.stroke();
            ctx.restore();
            return uProgress < 1;
        }
        return progress < 1;
    },
    line: (ev) => {
        const progress = Math.min(1, (timer - ev.start) / (ev.duration || 60));
        ctx.strokeStyle = ev.color || CW;
        ctx.lineWidth = 2;
        // Si x1/y1 ne sont pas définis, on utilise les valeurs par défaut de la barre de division
        const x1 = (ev.x1 !== undefined ? ev.x1 : 0.2) * boardWidth;
        const y1 = (ev.y1 !== undefined ? ev.y1 : (ev.y || 0.25)) * boardHeight;
        const x2 = (ev.x2 !== undefined ? ev.x2 : 0.2) * boardWidth;
        const y2 = (ev.y2 !== undefined ? ev.y2 : 0.75) * boardHeight;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + (x2 - x1) * progress, y1 + (y2 - y1) * progress);
        ctx.stroke();
        return progress < 1;
    },
    cercle: (ev) => {
        const progress = Math.min(1, (timer - ev.start) / (ev.duration || 80));
        ctx.strokeStyle = ev.color || '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(boardWidth * ev.x, boardHeight * ev.y, ev.r * boardHeight, 0, Math.PI * 2 * progress);
        ctx.stroke();
        return progress < 1;
    },
    arc: (ev) => {
    const progress = Math.min(1, (timer - ev.start) / (ev.duration || 80));
    ctx.strokeStyle = ev.color || '#ffffff';
    ctx.lineWidth = ev.lineWidth || 3;
    const startAngle = ev.startAngle !== undefined ? ev.startAngle : 0;
    const endAngle = ev.endAngle !== undefined ? ev.endAngle : Math.PI * 2;
    const span = endAngle - startAngle;
    ctx.beginPath();
    ctx.arc(
        boardWidth * ev.x,
        boardHeight * ev.y,
        ev.r * boardHeight,
        startAngle,
        startAngle + span * progress
    );
    ctx.stroke();
    return progress < 1;
    },
cercle_pedagogique: (ev) => {
    const cx = ev.x * boardWidth;
    const cy = ev.y * boardHeight;
    const R  = ev.r * boardHeight;
    const angleDeg = ev.angle || 45;
    const angleRad = angleDeg * Math.PI / 180;

    // Points exacts sur le cercle — R s'applique directement en pixels
    const bx = cx + R;                              // B : droite
    const by = cy;
    const ax = cx + R * Math.cos(angleRad);         // A : angle
    const ay = cy - R * Math.sin(angleRad);
    const lx = cx - R;                              // gauche du diamètre
    const s  = boardWidth * 0.012;

    const p = Math.min(1, (timer - ev.start) / (ev.duration || 900));
    const t = (step) => Math.min(1, Math.max(0, (p - step / 10) * 10));

    ctx.lineWidth = 2;

   // Étape 0 : Croix × — les deux lignes se dessinent l'une après l'autre
    if (t(0) > 0) {
        const ss = s * 0.5; // plus petite croix
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;

        // Première diagonale (\ ) se dessine en premier
        const prog1 = Math.min(1, t(0) * 2); // occupe la première moitié de t(0)
        ctx.beginPath();
        ctx.moveTo(cx - ss, cy - ss);
        ctx.lineTo(cx - ss + (cx + ss - (cx - ss)) * prog1, cy - ss + (cy + ss - (cy - ss)) * prog1);
        ctx.stroke();

        // Deuxième diagonale ( / ) se dessine après
        const prog2 = Math.min(1, Math.max(0, (t(0) - 0.5) * 2)); // occupe la deuxième moitié
        if (prog2 > 0) {
            ctx.beginPath();
            ctx.moveTo(cx + ss, cy - ss);
            ctx.lineTo(cx + ss + (cx - ss - (cx + ss)) * prog2, cy - ss + (cy + ss - (cy - ss)) * prog2);
            ctx.stroke();
        }
    }

    // Étape 1 : Label O
    if (t(1) > 0) {
        ctx.fillStyle = '#ff4444';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText('O', cx - s*2.5, cy - s*0.5);
    }

    // Étape 2 : Rayon horizontal O → B (touche le cercle en bx, by)
    if (t(2) > 0) {
        ctx.strokeStyle = '#ff4444';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + (bx - cx) * t(2), cy);
        ctx.stroke();
    }

    // Étape 3 : Cercle complet
    if (t(3) > 0) {
        ctx.strokeStyle = ev.color || '#4a9eff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2 * t(3));
        ctx.stroke();
        ctx.lineWidth = 2;
        if (t(3) === 1) {
            ctx.fillStyle = ev.color || '#4a9eff';
            ctx.font = getFont(0.04, true, false);
            ctx.fillText('(C)', bx + s*2, cy - R * 0.25);
        }
    }

    // Étape 4 : Rayon à l'angle O → A (touche le cercle en ax, ay)
    if (t(4) > 0) {
        ctx.strokeStyle = '#ff4444';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + (ax - cx) * t(4), cy + (ay - cy) * t(4));
        ctx.stroke();
    }

    // Étape 5 : Petit arc jaune
    if (t(5) > 0) {
        ctx.strokeStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(cx, cy, R * 0.20, -angleRad * t(5), 0);
        ctx.stroke();
    }

    // Étape 6 : Label angle au milieu
    if (t(6) > 0) {
        ctx.fillStyle = '#ffff00';
        ctx.font = getFont(0.035, false, false);
        const midAngle = -angleRad / 2;
        const labelR = R * 0.20;
        ctx.fillText(
            angleDeg + '°',
            cx + labelR * Math.cos(midAngle) + 4,
            cy + labelR * Math.sin(midAngle) - 4
        );
    }

    // Étape 7 : Labels A et B aux extrémités exactes
    if (t(7) > 0) {
        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText('A', ax + s, ay - s);
        ctx.fillText('B', bx + s, by + s*0.5);
    }

    // Étape 8 : Label r au milieu de OB

    if (t(8) > 0) {
        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.038, false, false);
        ctx.fillText('r', cx + (bx - cx) * 0.7 - s, cy - s * 0.3); // très proche du segment
    }

   // Étape 9 : Double flèche diamètre
    if (t(9) > 0) {
        const fy = cy + R * 0.05;
        const prog = t(9);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;

        // Ligne
        ctx.beginPath();
        ctx.moveTo(lx, fy);
        ctx.lineTo(lx + (bx - lx) * prog, fy);
        ctx.stroke();

        // Flèches — étape séparée basée sur p directement
        if (p > 0.99) {
            const hs = 10;
            ctx.beginPath();
            ctx.moveTo(lx, fy); ctx.lineTo(lx + hs, fy - 5); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(lx, fy); ctx.lineTo(lx + hs, fy + 5); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(bx, fy); ctx.lineTo(bx - hs, fy - 5); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(bx, fy); ctx.lineTo(bx - hs, fy + 5); ctx.stroke();
            // Label d
            ctx.fillStyle = '#ffffff';
            ctx.font = getFont(0.038, false, false);
            ctx.fillText('d', cx - s * 0.5, fy + s * 2);
        }
    }
    return p < 1;
},
    arrow: (ev) => {
        const progress = Math.min(1, (timer - ev.start) / (ev.duration || 60));
        ctx.strokeStyle = ev.color || '#ffffff';
        ctx.lineWidth = 2;
        const x1 = ev.x1 * boardWidth, y1 = ev.y1 * boardHeight;
        const x2 = ev.x2 * boardWidth, y2 = ev.y2 * boardHeight;
        const cx = x1 + (x2 - x1) * progress;
        const cy = y1 + (y2 - y1) * progress;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const hs = 12; // taille des flèches

        // Ligne principale
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(cx, cy); ctx.stroke();

        // Flèche au bout droit (seulement quand progress = 1)
        if (progress === 1) {
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - hs * Math.cos(angle - 0.4), y2 - hs * Math.sin(angle - 0.4));
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - hs * Math.cos(angle + 0.4), y2 - hs * Math.sin(angle + 0.4));
            ctx.stroke();

            // Flèche au bout gauche
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1 + hs * Math.cos(angle - 0.4), y1 + hs * Math.sin(angle - 0.4));
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1 + hs * Math.cos(angle + 0.4), y1 + hs * Math.sin(angle + 0.4));
            ctx.stroke();
        }
        return progress < 1;
    },
    move_cercle: (ev) => {
        const p = Math.min(1, (timer - ev.start) / (ev.duration || 60));
        const cx = (ev.xStart + (ev.xEnd - ev.xStart) * p) * boardWidth;
        const cy = ev.y * boardHeight;
        const R = ev.r * boardHeight;
        const angleRad = (ev.angle || 45) * Math.PI / 180;
        const s = boardWidth * 0.012;

        ctx.save();
        if (ev.fadeStart && timer >= ev.fadeStart) {
            ctx.globalAlpha = 0.4;
        }

        // Dessin du cercle complet et de ses composants à la position cx
        ctx.strokeStyle = ev.color || '#4a9eff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.stroke();

        // Rayons et labels (statiques pendant le mouvement)
        ctx.strokeStyle = '#ff4444';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + R * Math.cos(angleRad), cy - R * Math.sin(angleRad)); ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText('O', cx - s*2.5, cy - s*0.5);
        ctx.fillText('B', cx + R + s, cy + s*0.5);
        ctx.fillText('A', cx + R * Math.cos(angleRad) + s, cy - R * Math.sin(angleRad) - s);

        ctx.restore();

        return p < 1;
    },
    detached_angle: (ev) => {
        const elapsed = timer - ev.start;
        const p = Math.min(1, elapsed / (ev.duration || 60));
        const cx = (ev.xStart + (ev.xEnd - ev.xStart) * p) * boardWidth;
        const cy = ev.y * boardHeight;
        const R = ev.r * boardHeight;
        const angleRad = (ev.angle || 45) * Math.PI / 180;
        const s = boardWidth * 0.012;

        ctx.strokeStyle = ev.color || '#ff4444';
        ctx.lineWidth = 2;

        // Rayons
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(angleRad), cy - R * Math.sin(angleRad));
        ctx.stroke();

        // Arc jaune
        ctx.strokeStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(cx, cy, R * 0.20, -angleRad, 0);
        ctx.stroke();

        // Labels A, B, O
        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText('O', cx - s*2.5, cy - s*0.5);
        ctx.fillText('B', cx + R + s, cy + s*0.5);
        ctx.fillText('A', cx + R * Math.cos(angleRad) + s, cy - R * Math.sin(angleRad) - s);

        return p < 1;
    },
    traits_groupes: (ev) => {
        const elapsed = timer - ev.start;
        const p = Math.min(1, elapsed / (ev.duration || 900));

        const nTraits = ev.nTraits || 12;
        const groupSize = ev.groupSize || 3;
        const nGroups = Math.ceil(nTraits / groupSize);
        const x0 = (ev.x0 !== undefined ? ev.x0 : 0.10) * boardWidth;
        const yTop = (ev.yTop !== undefined ? ev.yTop : 0.30) * boardHeight;
        const yBottom = (ev.yBottom !== undefined ? ev.yBottom : 0.60) * boardHeight;
        const color = ev.color || '#7af0a0';
        const traitW = ev.traitW !== undefined ? ev.traitW : 4;
        const traitH = ev.traitH !== undefined ? ev.traitH : 0.12 * boardHeight;
        const traitSpacing = (ev.traitSpacing !== undefined ? ev.traitSpacing : 0.022) * boardWidth;

        // Calcul automatique de l'espacement pour que tous les groupes rentrent dans la largeur
        let groupSpacing;
        if (ev.groupSpacing !== undefined) {
            groupSpacing = ev.groupSpacing * boardWidth;
        } else {
            const xMax = 0.92 * boardWidth; // On s'arrête à 92% de la largeur max
            const availableSpace = xMax - x0 - (groupSize - 1) * traitSpacing;
            groupSpacing = nGroups > 1 ? Math.min(0.18 * boardWidth, availableSpace / (nGroups - 1)) : 0.18 * boardWidth;
        }

        const appearStage = 0.6;
        const pPull = Math.min(1, Math.max(0, (p - appearStage) / (1 - appearStage)));

        const traitDuration = (appearStage / nTraits) * 0.5;
        const traitGap = appearStage / nTraits;

        for (let i = 0; i < nTraits; i++) {
            const groupIndex = Math.floor(i / groupSize);
            const idxInGroup = i % groupSize;

            const traitStagger = i * traitGap;
            const traitP = Math.min(1, Math.max(0, (p - traitStagger) / traitDuration));
            if (traitP <= 0) continue;

            // Position initiale : chaque trait sous son numéro
            const xInit = x0 + i * (ev.initialSpacing !== undefined ? ev.initialSpacing : 0.05) * boardWidth;
            const yInit = yTop;

            // Position cible dans le groupe
            const xTarget = x0 + groupIndex * groupSpacing + idxInGroup * traitSpacing;
            const yTarget = yBottom;

            const x = xInit + (xTarget - xInit) * pPull;
            const y = yInit + (yTarget - yInit) * pPull;

            // Dessin du trait
            ctx.strokeStyle = color;
            ctx.lineWidth = traitW;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + traitH * traitP);
            ctx.stroke();

            // Label numéro au-dessus du trait — disparaît pendant le regroupement
            if (pPull < 0.1) {
                const labelAlpha = 1 - (pPull / 0.1);
                ctx.globalAlpha = labelAlpha;
                ctx.fillStyle = '#f2ede4';
                ctx.font = getFont(0.035, true, false);
                ctx.textAlign = 'center';
                ctx.fillText(`${i + 1}`, xInit, yTop - 0.03 * boardHeight);
                ctx.globalAlpha = 1;
                ctx.textAlign = 'left';
            }
        }

        // Labels G1, G2... après regroupement
        if (pPull > 0.85) {
            const labelAlpha = Math.min(1, (pPull - 0.85) / 0.15);
            ctx.globalAlpha = labelAlpha;
            ctx.fillStyle = '#f2ede4';
            ctx.font = getFont(0.038, true, false);
            for (let g = 0; g < nGroups; g++) {
                const groupCenterX = x0 + g * groupSpacing + ((groupSize - 1) * traitSpacing) / 2;
                const labelY = yTop + traitH + 0.06 * boardHeight;
                ctx.fillText(`G${g + 1}`, groupCenterX, labelY);
            }
            ctx.globalAlpha = 1;
        }

        return p < 1;
    },
    fraction: (ev) => {
        const progress = Math.min(1, (timer - ev.start) / (ev.duration || 60));
        if (progress < 0) return false;
        
        const cx = ev.x * boardWidth;
        const cy = ev.y * boardHeight;
        const sz = ev.sz || 0.04;
        const fontSize = Math.round(boardHeight * sz);
        
        ctx.save();
        ctx.fillStyle = ev.color || '#ffffff';
        ctx.font = getFont(sz, ev.bold, false);
        ctx.textAlign = 'center';
        
        // Numérateur
        ctx.fillText(ev.num, cx, cy - fontSize * 0.2);
        
        // Barre de fraction
        const barWidth = Math.max(
            ctx.measureText(ev.num).width,
            ctx.measureText(ev.den).width
        ) + 10;
        ctx.strokeStyle = ev.color || '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx - barWidth/2, cy + fontSize * 0.15);
        ctx.lineTo(cx + barWidth/2, cy + fontSize * 0.15);
        ctx.stroke();
        
        // Dénominateur
        ctx.fillText(ev.den, cx, cy + fontSize * 0.7);
        
        ctx.restore();
        return progress < 1;
    },
    vibrating_fraction: (ev) => {
        const progress = Math.min(1, (timer - ev.start) / (ev.duration || 1200));
        if (progress < 0) return false;
        
        const cx = ev.x * boardWidth;
        const cy = ev.y * boardHeight;
        const sz = ev.sz || 0.06;
        const fontSize = Math.round(boardHeight * sz);
        
        // Vibration effet
        const vibrationAmount = 8;
        const vibrationSpeed = 0.15;
        const vibration = Math.sin(timer * vibrationSpeed) * vibrationAmount * Math.min(1, progress);
        
        ctx.save();
        ctx.fillStyle = ev.color || '#ffffff';
        ctx.font = getFont(sz, ev.bold, false);
        ctx.textAlign = 'center';
        
        // Numérateur avec vibration
        ctx.fillText(ev.num, cx + vibration, cy - fontSize * 0.2);
        
        // Barre de fraction
        const barWidth = Math.max(
            ctx.measureText(ev.num).width,
            ctx.measureText(ev.den).width
        ) + 10;
        ctx.strokeStyle = ev.color || '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx - barWidth/2 + vibration, cy + fontSize * 0.15);
        ctx.lineTo(cx + barWidth/2 + vibration, cy + fontSize * 0.15);
        ctx.stroke();
        
        // Dénominateur avec vibration
        ctx.fillText(ev.den, cx + vibration, cy + fontSize * 0.7);
        
        // Résultat = si fourni
        if (ev.result) {
            ctx.textAlign = 'left';
            ctx.fillText('=' + ev.result, cx + barWidth/2 + fontSize * 0.5 + vibration, cy + fontSize * 0.2);
        }
        
        ctx.restore();
        return progress < 1;
    },
    question: (ev) => {
        if (!ev.triggered && timer >= ev.start) {
            ev.triggered = true;
            showQuestionBox(ev);
        }
        return false;
    }
};

function showNotUnderstoodMessage() {
    createDialogue({
        text: "Je n'ai pas compris. Si tu veux, appuie sur Rejouer pour reprendre cette leçon.",
        author: 'Camélia',
        choices: [{ label: "D'accord", value: 'ok' }],
        onChoice: () => closeDialogueBox()
    });
    openDialogueBox();
}

function performReset(targetNotionId, isReplay = false) {
    if (pendingQuestionTimeout) {
        clearTimeout(pendingQuestionTimeout);
        pendingQuestionTimeout = null;
    }

    if (!isReplay) {
        lastCompletedNotionId = getCurrentNotionId();
        lastNotionUnderstood = evaluateNotionUnderstood();
        finishReplaySessionIfActive();
        console.log(`[Moteur] Notion terminée : ${lastCompletedNotionId}, comprise=${lastNotionUnderstood}`);
    }

    console.log(`[Moteur] Reset du tableau vers : ${targetNotionId} (replay=${isReplay})`);
    closeDialogueBox();
    setCurrentNotionId(targetNotionId);
    timer = 0;
    initEvents(targetNotionId);
    if (!chalkSound.paused) { chalkSound.pause(); chalkSound.currentTime = 0; }
    if (!eraserSound.paused) { eraserSound.pause(); eraserSound.currentTime = 0; }
    // On n'affiche pas le message d'échec pour les phases d'introduction S0 et S00
    if (!isReplay && !lastNotionUnderstood && lastCompletedNotionId !== 'S0' && lastCompletedNotionId !== 'S00') {
        showNotUnderstoodMessage();
    }
}

function normalizeForMatch(s) {
    return (s || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // accents
        .replace(/[“”]/g, '"')
        .replace(/[’]/g, "'")
        .replace(/[^\p{L}\p{N}\s'".,;:-]/gu, ' ') // retire char spéciaux (garde lettres/chiffres)
        .replace(/\s+/g, ' ')
        .trim();
}

function escapeRegExp(str) {
    return (str || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tokenPresence(textNorm, keywordNorm) {
    // Cas numérique: on veut matcher "2" sans casser sur 20, 12, etc.
    // On utilise des bornes sur les tokens (séparés par espaces / ponctuation).
    if (keywordNorm !== '' && /^-?\d+(\.\d+)?$/.test(keywordNorm)) {
        const num = escapeRegExp(keywordNorm);
        const re = new RegExp(`(^|[^\\d])${num}([^\\d]|$)`, 'g');
        return re.test(textNorm);
    }
    // Sinon, simple inclusion sur texte normalisé (tolérant ponctuation/espaces)
    return textNorm.includes(keywordNorm);
}

function showQuestionBox(ev) {
    // Arrête IMMÉDIATEMENT
    if (isTransitioning) return;

    // Mettre le moteur en pause pendant que Camélia parle
    setPaused(true);

    // Affiche la boîte APRÈS 2000ms
    pendingQuestionTimeout = setTimeout(() => {
        pendingQuestionTimeout = null;

        // Gère la réponse de l'élève (flux principal)
        const handleChoice = async (choice, contextEv = ev) => {
            // Exemption pour les questions d'introduction (S0, S00) : pas de validation "Ok" ou "Doute"
            if (contextEv.isIntro) {
                contextEv.answered = true;
                contextEv.correctlyAnswered = true;
                if (contextEv !== ev) { ev.answered = true; ev.correctlyAnswered = true; }
                closeDialogueBox();
                setPaused(false);
                return;
            }

            const isNoIdeaQuestion = contextEv.text && contextEv.text.toLowerCase().includes("tu as une idée");
            const label = choice && choice._label ? choice._label.toString().trim().toLowerCase() : '';

            const showContinueDialogue = (text, onContinue) => {
                createDialogue({
                    text,
                    author: 'Camélia',
                    choices: [{ label: 'Continuer', value: 'cont' }],
                    onChoice: () => { closeDialogueBox(); if (onContinue && typeof onContinue === 'function') onContinue(); else setPaused(false); }
                });
                openDialogueBox();
            };

            if (choice && choice.triggerNext) {
                // Affiche la question de suivi demandant la méthode
                createDialogue({
                    text: choice.triggerNext.text,
                    author: 'Camélia',
                    choices: choice.triggerNext.choices.map(opt => ({ 
                        label: opt.label, 
                        value: opt.value ? { ...opt.value, _label: opt.label } : { isCorrect: opt.isCorrect, _label: opt.label } 
                    })),
                    onChoice: (inner) => handleChoice(inner)
                });
                openDialogueBox();
            } else {
                let isCorrect = choice && choice.isCorrect;
                
                // Si l'élève tape une réponse libre (non prévue dans les boutons)
                if (typeof choice === 'string' && contextEv.expectedAnswer) {
                    isCorrect = await arePhrasesSimilar(choice, contextEv.expectedAnswer);
                }

                if (isCorrect && !(label === 'non' && isNoIdeaQuestion)) {
                    contextEv.answered = true; contextEv.correctlyAnswered = true;
                    if (contextEv !== ev) { ev.answered = true; ev.correctlyAnswered = true; }
                    
                    showContinueDialogue('Ok. Merci beaucoup', () => {
                        if (contextEv.nextQuestion) {
                            createDialogue({
                                text: contextEv.nextQuestion.text,
                                author: 'Camélia',
                                choices: (contextEv.nextQuestion.options || []).map(opt => ({ 
                                    label: opt.text, 
                                    value: opt.value ? { ...opt.value, _label: opt.text } : { isCorrect: opt.isCorrect, _label: opt.text } 
                                })),
                                onChoice: (c) => handleChoice(c, contextEv.nextQuestion)
                            });
                            openDialogueBox();
                        } else {
                            setPaused(false);
                        }
                    });
                } else {
                    contextEv.answered = true; contextEv.correctlyAnswered = false;
                    showContinueDialogue("J'ai un doute, voyons voir ce qui est fait au tableau", () => {
                        if (contextEv.retryStart !== undefined && contextEv.isVerification) {
                            performReset(getCurrentNotionId(), true);
                        } else {
                            setPaused(false);
                        }
                    });
                }
            }
        };

        // Préparation des données pour dialogue.js (question initiale)
        const dialogueData = {
            text: ev.text,
            author: ev.author || "Camélia",
            choices: ev.options ? ev.options.map(opt => ({ label: opt.text, value: opt.value ? { ...opt.value, _label: opt.text } : { isCorrect: opt.isCorrect, _label: opt.text } })) :
                     (ev.isIntro ? [{ label: "C'est parti !", value: 'next' }] : [{ label: "Continuer", value: 'next' }]),
            onChoice: handleChoice
        };

        createDialogue(dialogueData);
        openDialogueBox();

    }, 2000);
}

function initEvents(notionId) {
    events = [];
    const currentId = notionId || getCurrentNotionId();
    clearDialogueHistory(); // Vider l'historique du dialogue à chaque chargement de nouvelle notion
    console.log(`[Moteur] Chargement des événements pour : ${currentId}`);
    let autoAdvanceTime = 20; // Cette variable suit le temps pour les événements sans 'start' explicite
    
    // Sélection de la source de données selon la phase
    const notion = notions[currentId];
    const source = notion ? notion.events : [];
    const currentName = localStorage.getItem('welcomeUser') || "l'ami";

    source.forEach((line, index) => {
        if (line.text === 'SEP') {
            // Restauration du comportement original : SEP nettoie tout ce qui n'est pas un titre
            events.forEach(ev => {
                if (ev.stop === undefined && !ev.isTitle) ev.stop = autoAdvanceTime;
            });
            autoAdvanceTime += 60; // Petit délai de transition pour l'œil
            return;
        }

        // Nouveau : Nettoyage ciblé par type (ex: pour effacer les traits sans le texte)
        if (line.type === 'clear') {
            events.forEach(ev => {
                if (ev.type === line.target && ev.stop === undefined) {
                    ev.stop = autoAdvanceTime;
                }
            });
            return;
        }
        
        let processedText = line.text ? line.text.replace("{{name}}", currentName) : ""; // Traitement du texte dynamique
        let eventDuration;
        const actualStartTime = (line.start !== undefined) ? line.start : autoAdvanceTime; // Utilise 'start' si défini, sinon autoAdvanceTime
        let eventToAdd = { ...line, start: actualStartTime, isLastInNotion: false };

        if (line.type === 'text') {
            eventDuration = line.duration || (processedText.length * 2 || 1);
            eventToAdd = { ...eventToAdd, text: processedText, duration: eventDuration };
        } else if (line.type === 'question') {
            eventDuration = 10; // Petite durée pour éviter le chevauchement technique
            eventToAdd = { ...eventToAdd, answered: false, correctlyAnswered: false };
        } else if (line.type && DrawingLibrary[line.type]) {
            // Harmonisation des durées par défaut avec la DrawingLibrary
            if (line.type === 'traits_groupes' || line.type === 'cercle_pedagogique') {
                eventDuration = line.duration || 900;
            } else if (line.type === 'vibrating_fraction') {
                eventDuration = line.duration || 1200;
            } else {
                eventDuration = line.duration || 150;
            }
        } else { // Fallback pour les types inconnus ou si le type est manquant mais le texte est présent
            eventDuration = line.duration || (processedText.length * 2 || 1);
            eventToAdd = { type: 'text', ...eventToAdd, text: processedText, duration: eventDuration };
        }
        events.push(eventToAdd);

        // Gestion de la respiration (dwell time) automatique et modulable
        // Si c'est un élément graphique (DrawingLibrary) ou un mouvement (move),
        // on applique une pause plus longue (200) pour laisser l'élève digérer.
        let defaultPause = 50;
        const isVisualAnimation = (line.type && DrawingLibrary[line.type] && line.type !== 'text' && line.type !== 'question') || line.type === 'move';
        if (isVisualAnimation) defaultPause = 200;

        // Priorité absolue à la propriété 'pause' définie manuellement dans contenu.js
        const finalPause = (line.pause !== undefined) ? line.pause : defaultPause;
        autoAdvanceTime = Math.max(autoAdvanceTime, actualStartTime + eventDuration + finalPause);
    });

    // On marque le dernier événement REELLEMENT ajouté comme étant le dernier de la notion
    if (events.length > 0) events[events.length - 1].isLastInNotion = true;

    maxTime = autoAdvanceTime + 100; // S'assure que maxTime est correctement calculé basé sur le dernier événement

    // On fait en sorte que chaque calcul de brouillon reste jusqu'au début du suivant
    const bEvents = events.filter(e => e.type === 'brouillon');
    bEvents.forEach((be, idx) => {
        be.endAt = (idx < bEvents.length - 1) ? bEvents[idx + 1].start : maxTime;
    });
}

function animate() {
    if (isPaused && particles.length === 0) { requestAnimationFrame(animate); return; } // Pause logic

    if (isTransitioning && !isPaused) {
        if (eraserSound.paused) eraserSound.play().catch(e => {});
        setEraserX(eraserX + 15 * animationSpeed);
        if (eraserX > boardWidth + 150) {
            eraserSound.pause();
            eraserSound.currentTime = 0;
            performReset(getNextPhase());
            setIsTransitioning(false);
            setEraserX(-100);
        }
    }

    ctx.fillStyle = boardColor; ctx.fillRect(0, 0, boardWidth, boardHeight);
    
    const currentId = getCurrentNotionId();
    // Dessin de la zone brouillon statique (cadre et titre) durant la phase exemple
    if (currentId === 'S3') {
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.fillRect(boardWidth*0.6, boardHeight*0.1, boardWidth*0.35, boardHeight*0.15);
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.strokeRect(boardWidth*0.6, boardHeight*0.1, boardWidth*0.35, boardHeight*0.15);
        ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = getFont(0.03, true, false);
        ctx.fillText("BROUILLON", boardWidth*0.62, boardHeight*0.14);
    }

    let currentlyWriting = false;

    events.forEach(ev => {
        // Ne pas dessiner les événements marqués comme "skipped"
        if (ev.skipped) return;

        if (timer >= ev.start && (ev.stop === undefined || timer < ev.stop) && DrawingLibrary[ev.type]) {
            if (DrawingLibrary[ev.type](ev)) currentlyWriting = true;
        } else if (ev.type === 'move' && timer >= ev.start) {
            // Cas spécial pour le déplacement du résultat
            const progress = Math.min(1, (timer - ev.start) / ev.duration);
            const curX = ev.startX + (ev.endX - ev.startX) * progress;
            const curY = ev.startY + (ev.endY - ev.startY) * progress;
            ctx.fillStyle = ev.color || CW; ctx.font = getFont(0.045, false, false);
            ctx.fillText(ev.text, boardWidth * curX, curY * boardHeight);
            if (progress < 1) currentlyWriting = true;
        } else if (ev.type === 'brouillon' && timer >= ev.start && timer < ev.endAt) {
            if (DrawingLibrary.text({...ev, x: 0.62, y: 0.2, sz: 0.04})) currentlyWriting = true;
        }
    });

    // Dessin des particules (confettis/étoiles)
    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.x += p.vx; p.y += p.vy; p.vy += 0.25; p.life--;
        if (p.life <= 0) particles.splice(i, 1);
    }

    // Gestion du son
    if (currentlyWriting && !isPaused && !isTransitioning) {
        if (chalkSound.paused) chalkSound.play().catch(e => {});
    } else {
        chalkSound.pause();
    }

    if (!isPaused && timer >= maxTime && !isTransitioning) {
        transitionToNextNotion();
    }

    if (isTransitioning) {
        drawEraser(eraserX);
    }

    if (!isPaused) timer += animationSpeed;
    requestAnimationFrame(animate);
}

initEvents();
animate();
// Lancement du projet
loadData().then(() => {
    // On restaure la progression si elle existe
    const saved = loadProgress();
    setCurrentNotionId(saved);
    animate();
});

import { sceneCordeSaut } from './scene3d.js';
import { evaluateAnswer, normalizeForAiMatch, hasKeyword } from './aiService.js';
import { 
    canvas, ctx, boardWidth, boardHeight, boardColor, particles, 
    isPaused, isTransitioning, getNextPhase, getCurrentNotionId, animationSpeed, eraserX, getFont, drawBoardBackground, drawEraser, createConfetti,
    setCurrentNotionId, setPaused, setIsTransitioning, setNextPhase, setAnimationSpeed, setBoardColor, setEraserX,
    startNotionCountdown, setCountdownEndCallback
} from './tableau.js';

import { loadCourseContent, getDefaultCourseSelection } from './contentLoader.js';

// Variable globale pour stocker les leçons récupérées
let notions = {};
let currentCourse = null;

import {
    createDialogue, updateDialogueToSuccess, openDialogueBox, closeDialogueBox, clearDialogueHistory, appendUserMessage
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

function buildNotionsFromProgramme(programmeData = {}, fallbackNotions = {}) {
    const builtNotions = { ...(fallbackNotions || {}) };

    const addNotion = (notion) => {
        if (!notion) return;
        const notionId = typeof notion === 'string' ? notion : notion.id;
        if (!notionId) return;

        if (typeof notion === 'string') {
            if (!builtNotions[notionId] && (fallbackNotions || {})[notionId]) {
                builtNotions[notionId] = fallbackNotions[notionId];
            }
            return;
        }

        builtNotions[notionId] = {
            ...(fallbackNotions[notionId] || {}),
            ...notion,
        };
    };

    Object.values(programmeData || {}).forEach((saData) => {
        Object.values(saData?.sequences || {}).forEach((seqData) => {
            (seqData?.notions || []).forEach(addNotion);
        });
    });

    return builtNotions;
}

/**
 * Simule un appel API pour charger les notions
 * C'est le contournement gratuit : on charge un fichier JSON local
 */
async function loadData() {
    try {
        const course = await loadCourseContent();
        currentCourse = course;
        const { notions: courseNotions, CW: courseCW, CY: courseCY, CG: courseCG, CB: courseCB, programme } = course;
        notions = buildNotionsFromProgramme(programme, courseNotions || {});
        if (typeof window !== 'undefined' && window.setSearchCourseContext) {
            window.setSearchCourseContext({ notions, programme });
        }
        if (courseCW) globalThis.COURSE_CW = courseCW;
        if (courseCY) globalThis.COURSE_CY = courseCY;
        if (courseCG) globalThis.COURSE_CG = courseCG;
        if (courseCB) globalThis.COURSE_CB = courseCB;
    } catch (e) {
        console.warn("Chargement du contenu de cours impossible, utilisation du contenu statique.", e);
    }
}

async function arePhrasesSimilar(input, target) {
    return evaluateAnswer(input, target);
}

/**
 * Convertit le LaTeX basique en texte lisible pour l'IA
 */
function mathToText(latex) {
    if (!latex) return "";
    return latex
        .replace(/\\frac{([^}]*)}{([^}]*)}/g, '$1/$2')
        .replace(/\\vec{([^}]*)}/g, 'vecteur $1')
        .replace(/\\sqrt{([^}]*)}/g, 'racine de $1')
        .replace(/\\hat{([^}]*)}/g, 'angle $1')
        .replace(/[\{\}]/g, '')
        .replace(/\\/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
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

function getNotionCountdownSeconds(notion) {
    if (!notion || !Array.isArray(notion.events)) return null;
    const override = notion.events.find(ev => ev.compteur !== undefined);
    if (!override) return null;
    const minutes = Number(override.compteur);
    return Number.isFinite(minutes) && minutes > 0 ? Math.round(minutes * 60) : null;
}

function applyNotionCountdown(notion) {
    const seconds = getNotionCountdownSeconds(notion);
    startNotionCountdown(seconds);
}

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
        ctx.font = getFont((ev.sz || 0.045) * 0.3, ev.bold, ev.italic);
        ctx.textAlign = ev.align || 'left';
        const textX = boardWidth * (ev.x || 0.05);
        const textY = (ev.y || 0.5) * boardHeight;
        const textToDraw = ev.text.slice(0, Math.max(safeCount, progress === 1 ? ev.text.length : 0));

        // --- Rendu intelligent : texte + fractions + arcs ---
        const renderMixed = (text, startX, baseY) => {
            const parts = [];
            let remaining = text;

            while (remaining.length > 0) {
                const fracIdx  = remaining.indexOf('frac(');
                const arcIdx   = remaining.search(/p\.arc\(\w+\)/);

                const firstFrac = fracIdx >= 0 ? fracIdx : Infinity;
                const firstArc  = arcIdx  >= 0 ? arcIdx  : Infinity;

                if (firstFrac === Infinity && firstArc === Infinity) {
                    parts.push({ type: 'text', content: remaining });
                    break;
                }

                if (firstFrac < firstArc) {
                    if (fracIdx > 0) parts.push({ type: 'text', content: remaining.slice(0, fracIdx) });

                    const closeIdx = remaining.indexOf(')', fracIdx);
                    if (closeIdx === -1) {
                        parts.push({ type: 'text', content: remaining });
                        break;
                    }
                    const inner = remaining.slice(fracIdx + 5, closeIdx);
                    const [num, den] = inner.split(';');
                    parts.push({ type: 'frac', num: num.trim(), den: den.trim() });
                    remaining = remaining.slice(closeIdx + 1);

                } else {
                    if (arcIdx > 0) parts.push({ type: 'text', content: remaining.slice(0, arcIdx) });

                    const arcMatch = remaining.slice(arcIdx).match(/^p\.arc\((\w+)\)/);
                    if (arcMatch) {
                        parts.push({ type: 'arc', letters: arcMatch[1] });
                        remaining = remaining.slice(arcIdx + arcMatch[0].length);
                    } else {
                        parts.push({ type: 'text', content: remaining });
                        break;
                    }
                }
            }

            // --- Dessiner les parties ---
            const fontSize = Math.round(boardHeight * (ev.sz || 0.045));
            let currentX = startX;

            parts.forEach(part => {
                ctx.font = getFont(ev.sz || 0.045, ev.bold, ev.italic);
                ctx.fillStyle = ev.color || CW;

                if (part.type === 'text') {
                    ctx.fillText(part.content, currentX, baseY);
                    currentX += ctx.measureText(part.content).width;

                } else if (part.type === 'frac') {
                    ctx.font = getFont((ev.sz || 0.045) * 0.85, ev.bold, ev.italic);
                    const numWidth = ctx.measureText(part.num).width;
                    const denWidth = ctx.measureText(part.den).width;
                    const barWidth = Math.max(numWidth, denWidth) + 4;
                    const fracH = fontSize * 0.55;

                    ctx.fillStyle = ev.color || CW;
                    ctx.textAlign = 'center';
                    ctx.fillText(part.num, currentX + barWidth / 2, baseY - fracH * 0.55);

                    ctx.strokeStyle = ev.color || CW;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(currentX, baseY - fracH * 0.10);
                    ctx.lineTo(currentX + barWidth, baseY - fracH * 0.10);
                    ctx.stroke();

                    ctx.fillText(part.den, currentX + barWidth / 2, baseY + fracH * 0.65);
                    ctx.textAlign = ev.align || 'left';

                    currentX += barWidth + 4;

                } else if (part.type === 'arc') {
                    const letters = part.letters;
                    ctx.font = getFont(ev.sz || 0.045, ev.bold, ev.italic);
                    const partWidth = ctx.measureText(letters).width;

                    ctx.fillStyle = ev.color || CW;
                    ctx.fillText(letters, currentX, baseY);

                    const arcY = baseY - fontSize * 0.85;
                    const arcHeight = fontSize * 0.25;
                    ctx.strokeStyle = ev.color || CW;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(currentX, arcY);
                    ctx.quadraticCurveTo(currentX + partWidth / 2, arcY + arcHeight, currentX + partWidth, arcY);
                    ctx.stroke();

                    currentX += partWidth;
                }
            });
        };

        renderMixed(textToDraw, textX, textY);
        ctx.textAlign = 'left';

        // Gestion du soulignement
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
        const cx = ev.x * boardWidth;
        const cy = ev.y * boardHeight;
        const R  = ev.r * boardHeight;
        const s  = boardWidth * 0.012;

        const p = Math.min(1, (timer - ev.start) / (ev.duration || 300));
        const t = (step) => Math.min(1, Math.max(0, (p - step / 3) * 3));

        // Étape 0 : Croix ×
        if (t(0) > 0) {
            const ss = s * 0.5;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;

            const prog1 = Math.min(1, t(0) * 2);
            ctx.beginPath();
            ctx.moveTo(cx - ss, cy - ss);
            ctx.lineTo(cx - ss + (cx + ss - (cx - ss)) * prog1, cy - ss + (cy + ss - (cy - ss)) * prog1);
            ctx.stroke();

            const prog2 = Math.min(1, Math.max(0, (t(0) - 0.5) * 2));
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
            ctx.fillText('O', cx - s * 2.5, cy - s * 0.5);
        }

        // Étape 2 : Cercle complet
        if (t(2) > 0) {
            ctx.strokeStyle = ev.color || '#4a9eff';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2 * t(2));
            ctx.stroke();
        }

        return p < 1;
    },
   
    arc: (ev) => {
        const progress = Math.min(1, (timer - ev.start) / (ev.duration || 80));
        ctx.strokeStyle = ev.color || '#ffffff';
        ctx.lineWidth = ev.lineWidth || 3;
        const startAngle = ev.startAngle !== undefined ? ev.startAngle : 0;
        const endAngle = ev.endAngle !== undefined ? ev.endAngle : Math.PI * 2;
        const anticlockwise = ev.anticlockwise || false;
        const span = anticlockwise ? (startAngle - endAngle + Math.PI * 2) % (Math.PI * 2) : (endAngle - startAngle + Math.PI * 2) % (Math.PI * 2);
        const cx = boardWidth * ev.x;
        const cy = boardHeight * ev.y;
        const R = ev.r * boardHeight;
        const s = boardWidth * 0.012;

        ctx.beginPath();
        ctx.arc(cx, cy, R, startAngle, startAngle + span * progress, anticlockwise);
        ctx.stroke();

        if (progress === 1 && ev.labelStart) {
            ctx.fillStyle = '#ffffff';
            ctx.font = getFont(0.04, true, false);
            const ax = cx + R * Math.cos(startAngle);
            const ay = cy + R * Math.sin(startAngle);
            ctx.fillText(ev.labelStart, ax + s, ay - s);
        }
        if (progress === 1 && ev.labelEnd) {
            ctx.fillStyle = '#ffffff';
            ctx.font = getFont(0.04, true, false);
            const bx = cx + R * Math.cos(endAngle);
            const by = cy + R * Math.sin(endAngle);
            ctx.fillText(ev.labelEnd, bx + s, by + s);
        }

        // NOUVEAU : label L(arc) au-dessus de l'arc, optionnel
        if (ev.labelArc && progress === 1) {
            const midAngle = anticlockwise
                ? startAngle - span / 2
                : startAngle + span / 2;
            const lx = cx + (R + s * 3) * Math.cos(midAngle);
            const ly = cy + (R + s * 3) * Math.sin(midAngle);
            ctx.fillStyle = ev.labelColor || '#ffffff';
            ctx.font = getFont(0.035, false, false);
            ctx.fillText(ev.labelArc, lx, ly);
        }

        return progress < 1;
    },
    insert_arc: (ev) => {
        const elapsed = timer - ev.start;
        const dur = ev.duration || 60;
        const p = Math.min(1, elapsed / dur);

        const targetX = ev.targetX * boardWidth;
        const targetY = ev.targetY * boardHeight;
        const startX = ev.xStart * boardWidth;
        const startY = ev.y * boardHeight;

        const cx = startX + (targetX - startX) * p;
        const cy = startY + (targetY - startY) * p;
        const R = ev.r * boardHeight;
        const s = boardWidth * 0.012;

        const startAngle = ev.startAngle !== undefined ? ev.startAngle : 0;
        const endAngle = ev.endAngle !== undefined ? ev.endAngle : Math.PI * 2;
        const anticlockwise = ev.anticlockwise || false;
        const span = anticlockwise
            ? (startAngle - endAngle + Math.PI * 2) % (Math.PI * 2)
            : (endAngle - startAngle + Math.PI * 2) % (Math.PI * 2);

        ctx.strokeStyle = ev.color || '#ff9900';
        ctx.lineWidth = ev.lineWidth || 6;
        ctx.beginPath();
        ctx.arc(cx, cy, R, startAngle, startAngle + span, anticlockwise);
        ctx.stroke();

        if (p === 1 && ev.labelStart) {
            ctx.fillStyle = '#ffffff';
            ctx.font = getFont(0.04, true, false);
            const ax = cx + R * Math.cos(startAngle);
            const ay = cy + R * Math.sin(startAngle);
            ctx.fillText(ev.labelStart, ax + s, ay - s);
        }
        if (p === 1 && ev.labelEnd) {
            ctx.fillStyle = '#ffffff';
            ctx.font = getFont(0.04, true, false);
            const bx = cx + R * Math.cos(endAngle);
            const by = cy + R * Math.sin(endAngle);
            ctx.fillText(ev.labelEnd, bx + s, by + s);
        }

        return p < 1;
        },
    arc_angle_growth: (ev) => {
        const elapsed = timer - ev.start;
        const dur = ev.duration || 300;
        const p = Math.min(1, elapsed / dur);

        const cx = ev.x * boardWidth;
        const cy = ev.y * boardHeight;
        const R = ev.r * boardHeight;
        const s = boardWidth * 0.012;

        const maxAngleDeg = ev.maxAngle || 270;
        const maxAngleRad = maxAngleDeg * Math.PI / 180;
        const currentAngleRad = maxAngleRad * p;
        const currentAngleDeg = Math.round(maxAngleDeg * p);

        // NOUVEAU : offset de départ optionnel
        const offsetRad = ev.startAngle !== undefined ? ev.startAngle : 0;

        // Arc qui grandit en sens antihoraire
        ctx.strokeStyle = ev.color || '#f5e441';
        ctx.lineWidth = ev.lineWidth || 6;
        ctx.beginPath();
        ctx.arc(cx, cy, R, offsetRad, offsetRad - currentAngleRad, true);
        ctx.stroke();

        // Rayon fixe (premier côté de l'angle)
        ctx.strokeStyle = '#ff4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(offsetRad), cy + R * Math.sin(offsetRad));
        ctx.stroke();

        // Rayon qui tourne en sens antihoraire
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(offsetRad - currentAngleRad), cy + R * Math.sin(offsetRad - currentAngleRad));
        ctx.stroke();

        // Petit arc de l'angle au centre
        ctx.strokeStyle = '#ffff00';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 0.20, offsetRad, offsetRad - currentAngleRad, true);
        ctx.stroke();

        // Nombre de degrés qui augmente
        ctx.fillStyle = '#ffff00';
        ctx.font = getFont(0.04, true, false);
        const midAngle = offsetRad - currentAngleRad / 2;
        ctx.fillText(
            currentAngleDeg + '°',
            cx + R * 0.30 * Math.cos(midAngle),
            cy + R * 0.30 * Math.sin(midAngle)
        );

        // Labels fixes
        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText('O', cx - s * 2.5, cy - s * 0.5);

        // NOUVEAU : labels personnalisables, défaut B et A
        const labelFixed = ev.labelFixed || 'B';
        const labelMoving = ev.labelMoving || 'A';
        ctx.fillText(labelFixed, cx + R * Math.cos(offsetRad) + s, cy + R * Math.sin(offsetRad) + s);
        ctx.fillText(labelMoving, cx + R * Math.cos(offsetRad - currentAngleRad) + s, cy + R * Math.sin(offsetRad - currentAngleRad) + s);

        // NOUVEAU : label L(arc) au-dessus de l'arc qui augmente, optionnel
        if (ev.labelArc) {
            const arcMid = offsetRad - currentAngleRad / 2;
            const lx = cx + (R + s * 3) * Math.cos(arcMid);
            const ly = cy + (R + s * 3) * Math.sin(arcMid);
            const maxLength = ev.maxLength || 10;
            const currentLength = (maxLength * p).toFixed(1);
            ctx.fillStyle = ev.labelColor || '#ffffff';
            ctx.font = getFont(0.032, false, false);
            ctx.fillText(`L(${ev.labelArc}) = ${currentLength} cm`, lx, ly);
        }

        return p < 1;
    },

    detached_arc: (ev) => {
        const elapsed = timer - ev.start;
        const dur = ev.duration || 60;
        const p = Math.min(1, elapsed / dur);

        const targetX = ev.targetX * boardWidth;
        const targetY = ev.targetY * boardHeight;
        const startX = ev.xStart * boardWidth;
        const startY = ev.y * boardHeight;

        const cx = targetX + (startX - targetX) * p;
        const cy = targetY + (startY - targetY) * p;
        const R = ev.r * boardHeight;
        const angleRad = (ev.angle || 45) * Math.PI / 180;

        ctx.strokeStyle = ev.color || '#ff9900';
        ctx.lineWidth = ev.lineWidth || 6;
        ctx.beginPath();
        ctx.arc(cx, cy, R, -angleRad, 0);
        ctx.stroke();

        return p < 1;
    },
    angle: (ev) => {
        const cx = ev.x * boardWidth;
        const cy = ev.y * boardHeight;
        const R = ev.r * boardHeight;
        const angleDeg = ev.angle || 45;
        const angleRad = angleDeg * Math.PI / 180;
        const startAngleDeg = ev.startAngle || 0;  // Nouveau : 0 par défaut
        const startAngleRad = startAngleDeg * Math.PI / 180;
        const s = boardWidth * 0.012;
        const vertex = ev.vertex || 'C';
        const labelLeft = ev.labelLeft || 'A';
        const labelRight = ev.labelRight || 'B';
        const color = ev.color || '#ff4444';

        const bx = cx + R * Math.cos(startAngleRad);
        const by = cy - R * Math.sin(startAngleRad);
        const ax = cx + R * Math.cos(startAngleRad + angleRad);
        const ay = cy - R * Math.sin(startAngleRad + angleRad);

        const p = Math.min(1, (timer - ev.start) / (ev.duration || 180));
        const t = (step) => Math.min(1, Math.max(0, (p - step / 4) * 4));

        // Étape 0 : Point sommet
        if (t(0) > 0) {
            ctx.fillStyle = '#ffffff';
            ctx.font = getFont(0.04, true, false);
            ctx.fillText(vertex, cx - s * 2.5, cy - s * 0.5);
        }

        // Étape 1 : Premier rayon
        if (t(1) > 0) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + (bx - cx) * t(1), cy + (by - cy) * t(1));
            ctx.stroke();
            if (t(1) === 1) {
                ctx.fillStyle = '#ffffff';
                ctx.font = getFont(0.04, true, false);
                ctx.fillText(labelRight, bx + s, by + s * 0.5);
            }
        }

        // Étape 2 : Deuxième rayon
        if (t(2) > 0) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + (ax - cx) * t(2), cy + (ay - cy) * t(2));
            ctx.stroke();
            if (t(2) === 1) {
                ctx.fillStyle = '#ffffff';
                ctx.font = getFont(0.04, true, false);
                ctx.fillText(labelLeft, ax + s, ay - s);
            }
        }

        // Étape 3 : Arc + mesure
        if (t(3) > 0) {
            const arcR = R * 0.25;
            ctx.strokeStyle = '#ffff00';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(cx, cy, arcR * t(3), -startAngleRad - angleRad, -startAngleRad);
            ctx.stroke();

            if (t(3) === 1) {
                const midAngle = -startAngleRad - angleRad / 2;
                ctx.fillStyle = '#ffff00';
                ctx.font = getFont(0.030, false, false);
                ctx.fillText(
                    angleDeg + '°',
                    cx + (arcR + s) * Math.cos(midAngle),
                    cy + (arcR + s) * Math.sin(midAngle)
                );
            }
        }

        return p < 1;
    },
    cercle_angle: (ev) => {
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
    insert_angle: (ev) => {
        const elapsed = timer - ev.start;
        const dur = ev.duration || 60;
        const p = Math.min(1, elapsed / dur);
        const cx = (ev.xStart + (ev.xEnd - ev.xStart) * p) * boardWidth;
        const cy = ev.y * boardHeight;
        const R = ev.r * boardHeight;
        const angleRad = (ev.angle || 45) * Math.PI / 180;
        const s = boardWidth * 0.012;

        ctx.strokeStyle = ev.color || '#ff4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(angleRad), cy - R * Math.sin(angleRad));
        ctx.stroke();

        ctx.strokeStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(cx, cy, R * 0.20, -angleRad, 0);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText(ev.vertex || 'C', cx - s*2.5, cy - s*0.5);
        ctx.fillText(ev.labelRight || 'B', cx + R + s, cy + s*0.5);
        ctx.fillText(ev.labelLeft || 'A', cx + R * Math.cos(angleRad) + s, cy - R * Math.sin(angleRad) - s);

        return p < 1;
    },

    detached_angle: (ev) => {
        const elapsed = timer - ev.start;
        const dur = ev.duration || 60;
        const p = Math.min(1, elapsed / dur);
        const cx = (ev.xStart + (ev.xEnd - ev.xStart) * p) * boardWidth;
        const cy = ev.y * boardHeight;
        const R = ev.r * boardHeight;
        const angleRad = (ev.angle || 45) * Math.PI / 180;
        const s = boardWidth * 0.012;

        ctx.strokeStyle = ev.color || '#ff4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(angleRad), cy - R * Math.sin(angleRad));
        ctx.stroke();

        ctx.strokeStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(cx, cy, R * 0.20, -angleRad, 0);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = getFont(0.04, true, false);
        ctx.fillText(ev.vertex || 'C', cx - s*2.5, cy - s*0.5);
        ctx.fillText(ev.labelRight || 'B', cx + R + s, cy + s*0.5);
        ctx.fillText(ev.labelLeft || 'A', cx + R * Math.cos(angleRad) + s, cy - R * Math.sin(angleRad) - s);

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
    },
    scene3d: (ev) => {
    if (!ev.triggered) {
        ev.triggered = true;
        if (ev.scene === 'corde_saut') {
            setPaused(true);
            sceneCordeSaut(() => {
                setPaused(false);
            });
        }
    }
    return false;
},
    point: (ev) => {
            const p = Math.min(1, (timer - ev.start) / (ev.duration || 60));
            if (p <= 0) return true;

            const cx = ev.x * boardWidth;
            const cy = ev.y * boardHeight;
            const s = boardWidth * 0.008;
            const label = ev.label || '';
            const labelPos = ev.labelPos || 'top'; // top, bottom, left, right

            // Croix ×
            ctx.strokeStyle = ev.color || '#ffffff';
            ctx.lineWidth = 1.5;

            const prog1 = Math.min(1, p * 2);
            ctx.beginPath();
            ctx.moveTo(cx - s, cy - s);
            ctx.lineTo(cx - s + (cx + s - (cx - s)) * prog1, cy - s + (cy + s - (cy - s)) * prog1);
            ctx.stroke();

            const prog2 = Math.min(1, Math.max(0, (p - 0.5) * 2));
            if (prog2 > 0) {
                ctx.beginPath();
                ctx.moveTo(cx + s, cy - s);
                ctx.lineTo(cx + s + (cx - s - (cx + s)) * prog2, cy - s + (cy + s - (cy - s)) * prog2);
                ctx.stroke();
            }

            // Label
            if (p === 1 && label) {
                ctx.fillStyle = ev.color || '#ffffff';
                ctx.font = getFont(ev.sz || 0.035, true, false);
                const offset = s * 2.5;
                let lx = cx, ly = cy;
                if (labelPos === 'top')    { lx = cx - s; ly = cy - offset; }
                if (labelPos === 'bottom') { lx = cx - s; ly = cy + offset * 2; }
                if (labelPos === 'left')   { lx = cx - offset * 3; ly = cy + s; }
                if (labelPos === 'right')  { lx = cx + offset; ly = cy + s; }
                ctx.fillText(label, lx, ly);
            }

            return p < 1;
        },
    signe_angle: (ev) => {
        const p = Math.min(1, (timer - ev.start) / (ev.duration || 60));
        if (p <= 0) return true;

        const cx = ev.x * boardWidth;
        const cy = ev.y * boardHeight;
        const R = (ev.r || 0.06) * boardHeight;

        const a1 = -(ev.angle1 * Math.PI / 180);
        const a2 = -(ev.angle2 * Math.PI / 180);
        const anticlockwise = ev.anticlockwise || false;

        // Animation progressive
        const currentEnd = a1 + (a2 - a1) * p;

        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, R, a1, currentEnd, anticlockwise);
        ctx.strokeStyle = ev.color || '#f5e441';
        ctx.lineWidth = ev.lineWidth || 2;
        ctx.stroke();
        ctx.restore();

        // Label au milieu
        if (p === 1 && ev.label) {
            const midAngle = anticlockwise
                ? a1 - Math.abs(a2 - a1) / 2
                : a1 + Math.abs(a2 - a1) / 2;
            const labelR = R * 1.5;
            ctx.save();
            ctx.fillStyle = ev.color || '#f5e441';
            ctx.font = getFont(ev.sz || 0.028, false, false);
            ctx.textAlign = 'center';
            ctx.fillText(ev.label, cx + labelR * Math.cos(midAngle), cy + labelR * Math.sin(midAngle));
            ctx.restore();
        }

        return p < 1;
    },
    reflet: (ev) => {
        const p = Math.min(1, (timer - ev.start) / (ev.duration || 120));
        if (p <= 0) return true;

        const ox = ev.ox * boardWidth;
        const oy = ev.oy * boardHeight;

        // Point original
        const ax = ev.ax * boardWidth;
        const ay = ev.ay * boardHeight;

        // Direction de l'axe de symétrie (normalisée en pixels réels)
        const axeX = ev.axe_x2 * boardWidth - ev.axe_x1 * boardWidth;
        const axeY = ev.axe_y2 * boardHeight - ev.axe_y1 * boardHeight;
        const axeLen = Math.sqrt(axeX * axeX + axeY * axeY);
        const ux = axeX / axeLen;
        const uy = axeY / axeLen;

        // Vecteur OP
        const px = ax - ox;
        const py = ay - oy;

        // Réflexion de P par rapport à la droite passant par O de direction u
        const dot = px * ux + py * uy;
        const rx = 2 * dot * ux - px; // coordonnées du reflet par rapport à O
        const ry = 2 * dot * uy - py;

        // Position finale du reflet
        const finalX = ox + rx;
        const finalY = oy + ry;

        // Animation : interpolation angulaire du segment original vers le reflet
        const currentX = ax + (finalX - ax) * p;
        const currentY = ay + (finalY - ay) * p;

        // Segment original (atténué)
        ctx.save();
        ctx.globalAlpha = 1 - p * 0.6;
        ctx.strokeStyle = ev.color || '#ffffff';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ax, ay);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Segment animé (tourne vers le reflet)
        ctx.save();
        ctx.strokeStyle = ev.colorReflet || '#f5e441';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        ctx.restore();

        // Label du reflet à la fin
        if (p === 1 && ev.label) {
            const s = boardWidth * 0.012;
            ctx.fillStyle = ev.colorReflet || '#f5e441';
            ctx.font = getFont(0.035, true, false);
            ctx.fillText(ev.label, finalX + s, finalY - s);
        }

        return p < 1;
    },
};
    


function showNotUnderstoodMessage(onConfirm) {
    setPaused(true);
    createDialogue({
        text: "Je n'ai pas bien compris. Reprenons",
        author: 'Camélia',
        choices: [{ label: "D'accord", value: 'ok' }],
        onChoice: () => {
            closeDialogueBox();
            if (onConfirm) onConfirm();
            setPaused(false);
        }
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
                const pendingLaunchId = typeof window !== 'undefined' ? window.__pendingLaunchNotionId : null;
                if (pendingLaunchId && pendingLaunchId !== 'S0' && pendingLaunchId !== 'S00') {
                    delete window.__pendingLaunchNotionId;
                    performReset(pendingLaunchId, false);
                } else {
                    setPaused(false);
                }
                return;
            }

        // Cas spécial : L'élève a cliqué sur "Autre" pour ouvrir le cahier
        if (choice && choice.useCahier) {
            if (window.openCahier) window.openCahier();
            // On branche l'envoi du cahier sur cette même question
            window.onCahierSend = async (rawText) => {
                const text = typeof rawText === 'string' ? rawText : '';
                if (text) appendUserMessage(text, 'Vous');
                const normalized = mathToText(text);
                const isCorrect = await arePhrasesSimilar(normalized, contextEv.expectedAnswer || '');
                handleChoice({ isCorrect }, contextEv);
            };
            return;
        }

            const isNoIdeaQuestion = contextEv.text && contextEv.text.toLowerCase().includes("tu as une idée");
            const label = choice && choice._label ? choice._label.toString().trim().toLowerCase() : '';

            const getFeedbackText = (correct, context) => {
                if (correct) {
                    return "Ok. Merci beaucoup.";
                }

                if (context && context.proposedAnswer) {
                    return context.proposedAnswer;
                }

                if (context && context.expectedAnswer) {
                    return `J'ai un doute, voyons voir ce qui est fait au tableau. La bonne réponse est : ${context.expectedAnswer}`;
                }

                if (context && context.options) {
                    const correctOption = context.options.find(opt => opt.isCorrect);
                    if (correctOption) {
                        return `J'ai un doute, voyons voir ce qui est fait au tableau. La bonne réponse est : ${correctOption.text}`;
                    }
                }

                return "J'ai un doute, voyons voir ce qui est fait au tableau.";
            };

            const showContinueDialogue = (text, onContinue) => {
                createDialogue({
                    text,
                    author: 'Camélia',
                    choices: [{ label: 'Continuer', value: 'cont' }],
                    onChoice: () => { closeDialogueBox(); if (onContinue && typeof onContinue === 'function') onContinue(); else setPaused(false); }
                });
                openDialogueBox();
            };

            const showNextQuestion = (nextEvent) => {
                if (!nextEvent) {
                    setPaused(false);
                    return;
                }

                let dialogueChoices = nextEvent.freeAnswer ? [] : (nextEvent.options ? nextEvent.options.map(opt => ({ 
                    label: opt.text, 
                    value: opt.value ? { ...opt.value, _label: opt.text } : { isCorrect: opt.isCorrect, _label: opt.text } 
                })) : (nextEvent.isIntro ? [{ label: "C'est parti !", value: 'next' }] : [{ label: "Continuer", value: 'next' }]));

                if (nextEvent.addOther && !nextEvent.freeAnswer) {
                    dialogueChoices.push({ label: "Autre...", value: { useCahier: true } });
                }

                const dialogueData = {
                    text: nextEvent.text,
                    author: nextEvent.author || 'Camélia',
                    choices: dialogueChoices,
                    onChoice: (c) => handleChoice(c, nextEvent)
                };

                if (nextEvent.freeAnswer) {
                    dialogueData.input = {
                        label: 'Écris ta réponse',
                        placeholder: 'Écris ton texte ici...',
                        buttonLabel: 'Envoyer',
                        rows: 4
                    };
                    dialogueData.onSubmit = async (value) => {
                        handleChoice(value, nextEvent);
                    };
                }

                createDialogue(dialogueData);
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

                    if (contextEv.nextQuestion) {
                        showNextQuestion(contextEv.nextQuestion);
                    } else {
                        showContinueDialogue(getFeedbackText(true, contextEv), () => setPaused(false));
                    }
                } else {
                    contextEv.answered = true; contextEv.correctlyAnswered = false;

                    // Si une question suivante est alignée, afficher le feedback
                    // puis enchaîner directement sur la question suivante.
                    if (contextEv.nextQuestion) {
                        createDialogue({
                            text: getFeedbackText(false, contextEv),
                            author: 'Camélia',
                            choices: []
                        });
                        openDialogueBox();
                        // Petit délai pour laisser le feedback s'afficher avant la suivante
                        setTimeout(() => showNextQuestion(contextEv.nextQuestion), 600);
                    } else {
                        showContinueDialogue(getFeedbackText(false, contextEv), () => {
                            setPaused(false);
                        });
                    }
                }
            }
        };

        // Préparation des données pour dialogue.js (question initiale)
        let dialogueChoices = ev.freeAnswer ? [] : (ev.options ? ev.options.map(opt => ({ 
            label: opt.text, 
            value: opt.value ? { ...opt.value, _label: opt.text } : { isCorrect: opt.isCorrect, _label: opt.text } 
        })) : (ev.isIntro ? [{ label: "C'est parti !", value: 'next' }] : [{ label: "Continuer", value: 'next' }]));

        // Ajout automatique de l'option "Autre" si demandée dans le contenu
        if (ev.addOther && !ev.freeAnswer) {
            dialogueChoices.push({ label: "Autre...", value: { useCahier: true } });
        }

        const dialogueData = {
            text: ev.text,
            author: ev.author || "Camélia",
            choices: dialogueChoices,
            onChoice: handleChoice
        };

        if (ev.freeAnswer) {
            dialogueData.input = {
                label: 'Écris ta réponse',
                placeholder: 'Écris ton texte ici...',
                buttonLabel: 'Envoyer',
                rows: 4
            };
            dialogueData.onSubmit = async (value) => {
                handleChoice(value, ev);
            };
        }

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
    applyNotionCountdown(notion);

    source.forEach((line, index) => {
        if (line.type === 'SEP' || line.text === 'SEP') {
            // Restauration du comportement original : SEP nettoie tout ce qui n'est pas un titre
            events.forEach(ev => {
                if (ev.stop === undefined && !ev.isTitle) ev.stop = autoAdvanceTime;
            });
            autoAdvanceTime += 60; // Petit délai de transition pour l'œil
            return;
        }

        // Nettoyage ciblé : par type (target), par identifiant unique (id) ou par groupe (tag)
        if (line.type === 'clear') {
            events.forEach(ev => {
                const matchType = line.target && ev.type === line.target;
                const matchId = line.id && ev.id === line.id;
                const matchTag = line.tag && ev.tag === line.tag;

                if ((matchType || matchId || matchTag) && ev.stop === undefined && !ev.isTitle) {
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
}

function animate() {
    if (isPaused && particles.length === 0) { requestAnimationFrame(animate); return; } // Pause logic

    if (isTransitioning && !isPaused) {
        setEraserX(eraserX + 15 * animationSpeed);
        if (eraserX > boardWidth + 150) {
            performReset(getNextPhase());
            setIsTransitioning(false);
            setEraserX(-100);
        }
    }

    ctx.fillStyle = boardColor; ctx.fillRect(0, 0, boardWidth, boardHeight);
    
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

    if (!isPaused && timer >= maxTime && !isTransitioning) {
        const currentId = getCurrentNotionId();
        const understood = evaluateNotionUnderstood();

        if (!understood && currentId !== 'S0' && currentId !== 'S00') {
            showNotUnderstoodMessage(() => {
                performReset(currentId, true); // Rejoue la notion actuelle
            });
        } else {
            transitionToNextNotion();
        }
    }

    if (isTransitioning) {
        drawEraser(eraserX);
    }

    if (!isPaused) timer += animationSpeed;
    requestAnimationFrame(animate);
}

// =====================================================================
// LANCEMENT DU PROJET (GO LIVE) — VERSION CORRIGÉE
// =====================================================================
loadData().then(() => {
    // 1) FINI le "Bienvenue l'ami" forcé au démarrage :
    //    on démarre sur la dernière notion jouée (ou S1), jamais sur S0/S00.
    const saved = localStorage.getItem('user_progress');
    setCurrentNotionId(saved && saved !== 'S0' && saved !== 'S00' ? saved : 'S1');
    initEvents();
    animate();

    // 2) La barre de navigation/recherche s'ouvre TOUTE SEULE au go live,
    //    exactement comme si l'enseignant cliquait sur "Changer de scène".
    setTimeout(() => {
        // Si search.js possède une fonction d'ouverture, on l'utilise :
        if (typeof window.openSearch === 'function')   { window.openSearch();   return; }
        if (typeof window.toggleSearch === 'function') { window.toggleSearch(); return; }
        // Sinon, on simule un clic sur le bouton "Changer de scène" :
        const btn = [...document.querySelectorAll('button, [onclick], [role="button"]')]
            .find(el => (el.textContent || '').trim().toLowerCase().includes('changer de scène'));
        if (btn) btn.click();
    }, 300);
});
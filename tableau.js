export const canvas = document.getElementById('boardCanvas');
export const ctx = canvas.getContext('2d');
export let boardWidth, boardHeight;
export let boardColor = '#1a1a1a';

export let particles = [];
export let notionCountdownSeconds = 0;
let countdownTimer = null;
let countdownActive = false;
// Global state variables, shared with moteur.js
export let isPaused = false;
export let isTransitioning = false;
export let nextPhase = 'S0';
export let currentNotionId = 'S0'; // Initial notion
export let animationSpeed = 1;
export let eraserX = -100; // Position de l'effaceur

const overlayLockState = { dialogue: false, cahier: false };
let tableauControlsLocked = false;

function applyTableauControlsState() {
    const controls = [
        document.getElementById('replayBtn'),
        document.getElementById('switchBtn'),
        document.getElementById('pausePlayBtn'),
        document.getElementById('speedSlider')
    ].filter(Boolean);

    controls.forEach((el) => {
        el.disabled = tableauControlsLocked;
    });
}

window.setTableauControlsLocked = function(locked, source = 'generic') {
    if (source === 'dialogue') overlayLockState.dialogue = Boolean(locked);
    else if (source === 'cahier') overlayLockState.cahier = Boolean(locked);

    tableauControlsLocked = overlayLockState.dialogue || overlayLockState.cahier;
    applyTableauControlsState();
};

window.getTableauControlsLocked = function() {
    return tableauControlsLocked;
};

applyTableauControlsState();

function sizeBoard() {
    const dpr = window.devicePixelRatio || 1;
    const w = Math.min(window.innerWidth - (window.innerWidth > 768 ? 120 : 40), 940);
    const h = Math.round(w * 9 / 16);
    boardWidth = w; boardHeight = h;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', sizeBoard);
sizeBoard();

export function getFont(sz, isBold, isItalic) { 
    return `${isItalic ? 'italic ' : ''}${isBold ? 'bold ' : ''}${Math.round(boardHeight * sz)}px Georgia, serif`; 
}

export function getCurrentNotionId() {
    return currentNotionId;
}

function formatCountdown(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

function updateTopBar() {
    const topbarEl = document.getElementById('tableau-topbar');
    const countdownEl = document.getElementById('tableau-countdown');
    if (!topbarEl || !countdownEl) return;
    if (!countdownActive) {
        topbarEl.style.display = 'none';
        return;
    }
    topbarEl.style.display = 'flex';
    countdownEl.textContent = formatCountdown(notionCountdownSeconds);
}

function resetNotionCountdown(seconds = null) {
    if (seconds === null || seconds === undefined) {
        countdownActive = false;
        notionCountdownSeconds = 0;
    } else {
        countdownActive = true;
        notionCountdownSeconds = Math.max(0, Number(seconds) || 0);
    }
    updateTopBar();
}

export let countdownEndCallback = null;

export function startNotionCountdown(initialSeconds) {
    if (countdownTimer) clearInterval(countdownTimer);
    resetNotionCountdown(initialSeconds);
    if (!countdownActive) return;
    countdownTimer = setInterval(() => {
        notionCountdownSeconds = Math.max(0, notionCountdownSeconds - 1);
        updateTopBar();
        if (notionCountdownSeconds <= 0) {
            clearInterval(countdownTimer);
            countdownTimer = null;
            countdownActive = false;
            updateTopBar();
            if (typeof countdownEndCallback === 'function') {
                countdownEndCallback();
            }
        }
    }, 1000);
}

export function setCountdownEndCallback(callback) {
    countdownEndCallback = typeof callback === 'function' ? callback : null;
}

export function setNotionCountdownSeconds(seconds) {
    resetNotionCountdown(seconds);
}

export function setCurrentNotionId(newId) {
    console.log(`[Tableau] Mise à jour de la notion actuelle : ${currentNotionId} -> ${newId}`);
    currentNotionId = newId;
    resetNotionCountdown();
}

export function setPaused(value) {
    isPaused = value;
}

export function setIsTransitioning(value) {
    isTransitioning = value;
}

export function getNextPhase() {
    return nextPhase;
}

export function setNextPhase(value) {
    console.log(`[Tableau] Phase suivante programmée : ${value}`);
    nextPhase = value;
}

export function setAnimationSpeed(value) {
    animationSpeed = value;
}

export function setBoardColor(value) {
    boardColor = value;
}

export function setEraserX(value) {
    eraserX = value;
}

export function drawBoardBackground() {
    ctx.fillStyle = boardColor;
    ctx.fillRect(0, 0, boardWidth, boardHeight);

}

export function drawEraser(x) {
    if (x <= -100) return;
    
    // Effacement visuel derrière la brosse
    ctx.fillStyle = boardColor;
    ctx.fillRect(0, 0, x, boardHeight);

    // Dessin de la Brosse
    ctx.save();
    ctx.shadowBlur = 20; 
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    
    // Corps en bois
    ctx.fillStyle = '#5d4037';
    ctx.fillRect(x, 0, 50, boardHeight);
    
    // Éponge
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(x - 10, 0, 10, boardHeight);

    // Poussière de craie
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(x - 12, 0, 2, boardHeight);
    
    ctx.restore();
}

function togglePause() {
    setPaused(!isPaused);
    const button = document.getElementById('pausePlayBtn');
    if (isPaused) {
        button.textContent = 'Lecture';
    } else {
        button.textContent = 'Pause';
    }
}

document.getElementById('replayBtn').addEventListener('click', () => {
    if (window.onReplayRequest) {
        window.onReplayRequest();
    } else {
        setIsTransitioning(true);
        setPaused(false);
        setNextPhase('S1');
    }
});

import { notions } from './contenu.js';
import { openSearch, setSearchCourseContext } from './search.js';
import { isDialogueOpen } from './dialogue.js';

document.getElementById('switchBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (isDialogueOpen()) return;
    openSearch();
});

document.getElementById('speedSlider').addEventListener('input', (event) => {
    setAnimationSpeed(parseFloat(event.target.value));
});

document.getElementById('pausePlayBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    togglePause();
});

window.addEventListener('click', (e) => {
    if (window.getTableauControlsLocked && window.getTableauControlsLocked()) return;
    if (document.getElementById('shell').style.display === 'block') return;
    if (!['BUTTON', 'INPUT', 'SELECT'].includes(e.target.tagName)) {
        togglePause();
    }
});

document.getElementById('colorSelect').addEventListener('change', (e) => {
    setBoardColor(e.target.value);
    document.documentElement.style.setProperty('--board-bg', e.target.value);
});

export function createConfetti() {
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: boardWidth / 2, y: boardHeight / 2,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.5) * 12 - 4,
            size: Math.random() * 6 + 3,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
            life: 100
        });
    }
}

// Expose global variables/functions needed by moteur.js
// Note: In a non-module setup, these are automatically global if not wrapped in an IIFE.
// Explicitly listing them here for clarity, but not strictly necessary for functionality.
// window.canvas = canvas;
// window.ctx = ctx;
// window.boardWidth = boardWidth;
// window.boardHeight = boardHeight;
// window.boardColor = boardColor;
// window.getFont = getFont;
// window.drawBoardBackground = drawBoardBackground;
// window.drawEraser = drawEraser;
// window.chalkSound = chalkSound;
// window.eraserSound = eraserSound;
// window.isPaused = isPaused;
// window.isTransitioning = isTransitioning;
// window.nextPhase = nextPhase;
// window.phase = phase;
// window.animationSpeed = animationSpeed;
// window.eraserX = eraserX;
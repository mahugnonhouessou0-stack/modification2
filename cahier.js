// ============================================================
// CAHIER.JS
// ============================================================

// Défauts sûrs pour éviter les plantages si le script est mal chargé
window.openCahier = function() {
    console.warn('[Cahier] openCahier appelé avant initialisation complète.');
};
window.onCahierSend = null;

document.addEventListener('DOMContentLoaded', () => {

    const cahier   = document.getElementById('cahier');
    const formulaField = document.getElementById('cahier-math-input');
    const keyboard = document.getElementById('cahier-keyboard');

    // --- Configuration de MathLive ---
    function initKeyboard() {
        if (window.mathVirtualKeyboard && keyboard) {
            window.mathVirtualKeyboard.container = keyboard;
        }
    }

    if (window.mf) {
        mf.mathVirtualKeyboardPolicy = 'manual';
        if (window.MathfieldElement) window.MathfieldElement.computeEngine = null;

        // Configuration des layouts personnalisés (Collège à Terminale)
        mf.virtualKeyboardLayouts = [
            {
                label: 'Maths Générale',
                rows: [
                    ['\\frac', '\\sqrt', 'x^2', 'x^n', '\\pi', '\\degree'],
                    ['\\alpha', '\\beta', '\\gamma', '\\delta', '\\theta'],
                    ['+', '-', '\\times', '\\div', '=', '\\neq', '\\leq', '\\geq'],
                    ['\\vec{AB}', '\\angle{ABC}', '\\in', '\\notin', '\\subset', '\\cup', '\\cap'],
                    ['\\lim_{x\\to\\infty}', '\\sum', '\\int', '\\ln', '\\log', '\\exp']
                ]
            },
            {
                label: 'Symboles Avancés',
                rows: [
                    ['\\mathbb{N}', '\\mathbb{Z}', '\\mathbb{D}', '\\mathbb{Q}', '\\mathbb{R}'],
                    ['\\forall', '\\exists', '\\implies', '\\iff', '\\infty', '\\varnothing'],
                    ['\\sin', '\\cos', '\\tan', '\\dots', '\\cdot']
                ]
            }
        ];
    } else {
        console.warn('[Cahier] MathLive non chargé, clavier mathématique désactivé.');
    }

    // --- Tailles ---
    const sizeBtns = document.querySelectorAll('#cahier-size-btns button');
    if (sizeBtns && sizeBtns.length) {
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (cahier) cahier.className = `cahier-${btn.dataset.size}`;
            });
        });
    }
    if (cahier) {
        cahier.addEventListener('click', () => {
            if (cahier.classList.contains('cahier-bulle')) cahier.className = 'cahier-petit';
        });
    }

    // --- Draggable ---
    let isDragging = false, startX, startY, origX, origY;
    document.getElementById('cahier-header').addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'BUTTON') return;
        isDragging = true;
        startX = e.clientX; startY = e.clientY;
        const rect = cahier.getBoundingClientRect();
        origX = rect.left; origY = rect.top;
        cahier.style.right = 'auto';
        cahier.style.bottom = 'auto';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        cahier.style.left = origX + (e.clientX - startX) + 'px';
        cahier.style.top  = origY + (e.clientY - startY) + 'px';
    });

    document.addEventListener('mouseup', () => isDragging = false);

    function clearEditor() {
        if (formulaField) {
            if (typeof formulaField.setValue === 'function') {
                formulaField.setValue('');
            } else {
                formulaField.value = '';
            }
        }
    }

    function submitCahier() {
        let rawText = '';
        if (formulaField) {
            if (typeof formulaField.getValue === 'function') {
                rawText = formulaField.getValue();
            } else {
                rawText = formulaField.value || '';
            }
        }
        rawText = rawText.trim();
        try {
            if (typeof window.onCahierSend === 'function') {
                window.onCahierSend(rawText);
            } else {
                console.warn('[Cahier] Aucun handler window.onCahierSend défini.');
            }
        } catch (e) {
            console.error('[Cahier] Erreur lors de l\'envoi du cahier :', e);
        }
        clearEditor();
        if (cahier) cahier.className = 'cahier-bulle';
        if (window.mathVirtualKeyboard) window.mathVirtualKeyboard.visible = false;
    }

    // --- Envoyer ---
    const sendBtn = document.getElementById('cahier-send');
    if (sendBtn) sendBtn.addEventListener('click', submitCahier);
    if (formulaField) {
        formulaField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitCahier();
            }
        });
    }

    // --- Ouvrir depuis moteur.js ---
    // Rendre la fonction openCahier accessible globalement
    window.openCahier = function() {
        if (!cahier) {
            console.warn('[Cahier] Élément #cahier introuvable.');
            return;
        }
        cahier.className = 'cahier-moyen';
        setTimeout(() => {
            if (formulaField) {
                try { formulaField.focus(); } catch (e) { /* ignore */ }
            }
        }, 300); // On attend la fin de l'animation de transition du cahier
    };

    // Défaut safe pour window.onCahierSend
    if (typeof window.onCahierSend !== 'function') window.onCahierSend = null;

    // Premier essai d'attachement
    initKeyboard();
});

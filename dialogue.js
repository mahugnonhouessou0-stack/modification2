
export function createDialogue(content) {
    const author  = content.author  || "Camélia";
    const color   = content.color   || "#7F77DD";
    const speed   = content.speed   || 28;

    // Mettre à jour l'en-tête dynamiquement
    const hdrAv   = document.getElementById('hdr-av');
    const hdrName = document.getElementById('hdr-name');
    if (hdrAv)   hdrAv.textContent   = author[0];
    if (hdrName) hdrName.textContent = author;

    const body      = document.getElementById('dlg-body');
    const choicesEl = document.getElementById('choices');
    const qLabel    = document.getElementById('q-label');
    
    // Indicateur de frappe (typing dots)
    function showTyping() {
        const row = document.createElement('div');
        row.className = 'dlg-row';
        row.id = 'typing-row';
        const av = document.createElement('div');
        av.className = 'dlg-mini-av';
        av.textContent = author[0];
        const t = document.createElement('div');
        t.className = 'dlg-typing';
        t.innerHTML = '<span></span><span></span><span></span>';
        row.appendChild(av);
        row.appendChild(t);
        body.appendChild(row);
        body.scrollTop = body.scrollHeight;
    }

    function removeTyping() {
        const r = document.getElementById('typing-row');
        if (r) r.remove();
    }

    // Créer une bulle bot
    function addBotBubble() {
        removeTyping();
        const row    = document.createElement('div');
        row.className = 'dlg-row';
        const av     = document.createElement('div');
        av.className  = 'dlg-mini-av';
        av.textContent = author[0];
        const bubble = document.createElement('div');
        bubble.className = 'dlg-bubble';
        const cursor = document.createElement('span');
        cursor.className = 'dlg-cursor';
        bubble.appendChild(cursor);
        row.appendChild(av);
        row.appendChild(bubble);
        body.appendChild(row);
        body.scrollTop = body.scrollHeight;
        return { bubble, cursor };
    }

    // Créer une bulle utilisateur
    function addUserBubble() {
        const row    = document.createElement('div');
        row.className = 'dlg-row user';
        const bubble = document.createElement('div');
        bubble.className = 'dlg-bubble';
        const cursor = document.createElement('span');
        cursor.className = 'dlg-cursor';
        cursor.style.background = '#fff';
        bubble.appendChild(cursor);
        row.appendChild(bubble);
        body.appendChild(row);
        body.scrollTop = body.scrollHeight;
        return { bubble, cursor };
    }

    // Effet machine à écrire
    function typeText(bubble, cursor, text, cb) {
        let i = 0;
        const iv = setInterval(() => {
            if (i < text.length) {
                bubble.insertBefore(document.createTextNode(text[i]), cursor);
                i++;
                body.scrollTop = body.scrollHeight;
            } else {
                clearInterval(iv);
                cursor.remove();
                // Demander à MathJax de transformer les $...$ en formules
                if (window.MathJax) MathJax.typesetPromise([bubble]);
                if (cb) cb();
            }
        }, speed);
    }

    // Afficher les choix
    function showChoices(question, choices) {
        qLabel.textContent = question || '';
        choicesEl.innerHTML = '';
        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'dlg-choice';
            btn.textContent = typeof choice === 'string' ? choice : choice.label;
            btn.onclick = () => {
                choicesEl.querySelectorAll('button').forEach(b => b.disabled = true);
                qLabel.textContent = '';
                const value = typeof choice === 'string' ? choice : choice.value;
                const { bubble, cursor } = addUserBubble();
                typeText(bubble, cursor, btn.textContent, () => {
                    if (content.onChoice) content.onChoice(value);
                });
            };
            choicesEl.appendChild(btn);
        });
    }

    // Lancer le message avec typing indicator
    showTyping();
    setTimeout(() => {
        const { bubble, cursor } = addBotBubble();
        typeText(bubble, cursor, content.text, () => {
            if (content.choices && content.choices.length > 0) {
                showChoices(content.question, content.choices);
            }
            if (content.onDone) content.onDone();
        });
    }, 700);
}

/**
 * Met à jour la boîte pour un état de succès
 */
export function updateDialogueToSuccess(successMsg, onContinue) {
    const body      = document.getElementById('dlg-body');
    const choicesEl = document.getElementById('choices');
    const qLabel    = document.getElementById('q-label');

    // Ajouter une bulle de succès
    const row    = document.createElement('div');
    row.className = 'dlg-row';
    const av     = document.createElement('div');
    av.className  = 'dlg-mini-av';
    av.textContent = 'C';
    const bubble = document.createElement('div');
    bubble.className = 'dlg-bubble';
    bubble.innerHTML = `<span style="color:#534AB7; font-weight:500;">Excellent !</span><br>${successMsg}`;
    row.appendChild(av);
    row.appendChild(bubble);
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;

    qLabel.textContent = '';
    choicesEl.innerHTML = '';

    const btn = document.createElement('button');
    btn.className = 'dlg-success-btn';
    btn.textContent = 'Continuer';
    btn.onclick = onContinue;
    choicesEl.appendChild(btn);
}

export function openDialogueBox() {
    const shell = document.getElementById('shell');
    const body = document.getElementById('dlg-body');
    if (shell) {
        shell.style.display = 'block';
        shell.classList.remove('minimized'); // S'ouvre en grand pour les nouveaux messages
        const minBtn = document.getElementById('dlg-min-btn');
        if (minBtn) minBtn.textContent = '—';
        
        // Forcer le défilement vers le bas à l'ouverture
        if (body) body.scrollTop = body.scrollHeight;
    }
}

export function clearDialogueHistory() {
    const body = document.getElementById('dlg-body');
    if (body) body.innerHTML = ''; // Vide le contenu du dialogue
}

export function closeDialogueBox() {
    const shell = document.getElementById('shell');
    if (shell) shell.style.display = 'none';
}

export function isDialogueOpen() {
    const shell = document.getElementById('shell');
    return !!(shell && shell.style.display === 'block');
}

// Initialisation du bouton de réduction
document.addEventListener('DOMContentLoaded', () => {
    const minBtn = document.getElementById('dlg-min-btn');
    const shell = document.getElementById('shell');
    if (minBtn && shell) {
        minBtn.onclick = (e) => {
            e.stopPropagation();
            const isMin = shell.classList.toggle('minimized');
            minBtn.textContent = isMin ? '▢' : '—';
        };
    }
});
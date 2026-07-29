import { setIsTransitioning, setNextPhase, setPaused, setEraserX } from './tableau.js';

const searchBox = document.getElementById('search-box');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchCount = document.getElementById('search-count');
const searchClose = document.getElementById('search-close');
const filterToggleBtn = document.getElementById('search-toggle-filter-btn');
const switchBtn = document.getElementById('switchBtn'); // Ajout pour "Changer de scène"
const filterPanel = document.querySelector('.search-filters-panel');
const chipsContainer = document.getElementById('search-filters-chips');
const searchInputWrapper = document.querySelector('.search-input-wrapper');
const dropdownSlider = document.getElementById('dropdownSlider');
const step1Container = document.getElementById('dropdownStep1');
const step2Container = document.getElementById('dropdownStep2');

let currentNotions = {};
let currentProgramme = null;
let selectedSa = '';
let selectedSequence = '';
let activeFilters = [];
let searchQuery = '';
let isDropdownOpen = false;

function normalize(str) {
    return String(str || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isIntroTitle(title) {
    if (!title) return false;
    const t = String(title).toLowerCase().trim();
    return t === 'introduction' || t.startsWith('introd') || t.includes('introduction');
}

function highlight(text, query) {
    if (!query || !text) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return String(text).replace(regex, '<span class="search-match">$1</span>');
}

function slideStep(step) {
    if (!dropdownSlider) return;
    dropdownSlider.style.transform = step === 2 ? 'translateX(-50%)' : 'translateX(0%)';
}

function getAllowedNotionIds(scope = {}) {
    const ids = [];
    if (!currentProgramme) {
        return Object.keys(currentNotions).filter((id) => !['S0', 'S00'].includes(id));
    }
    if (scope.sa) {
        const saData = currentProgramme[scope.sa];
        if (!saData) return [];
        if (scope.sequence) {
            const seqData = saData.sequences?.[scope.sequence];
            if (!seqData) return [];
            (seqData.notions || []).forEach((notion) => {
                const notionId = typeof notion === 'string' ? notion : notion.id;
                if (notionId) ids.push(notionId);
            });
            return [...new Set(ids)].filter((id) => !['S0', 'S00'].includes(id));
        }
        Object.values(saData.sequences || {}).forEach((seqData) => {
            (seqData.notions || []).forEach((notion) => {
                const notionId = typeof notion === 'string' ? notion : notion.id;
                if (notionId) ids.push(notionId);
            });
        });
        return [...new Set(ids)].filter((id) => !['S0', 'S00'].includes(id));
    }
    if (scope.sequence) {
        Object.values(currentProgramme).forEach((saData) => {
            const seqData = saData?.sequences?.[scope.sequence];
            if (!seqData) return;
            (seqData.notions || []).forEach((notion) => {
                const notionId = typeof notion === 'string' ? notion : notion.id;
                if (notionId) ids.push(notionId);
            });
        });
        return [...new Set(ids)].filter((id) => !['S0', 'S00'].includes(id));
    }
    Object.values(currentProgramme).forEach((saData) => {
        Object.values(saData.sequences || {}).forEach((seqData) => {
            (seqData.notions || []).forEach((notion) => {
                const notionId = typeof notion === 'string' ? notion : notion.id;
                if (notionId) ids.push(notionId);
            });
        });
    });
    return [...new Set(ids)].filter((id) => !['S0', 'S00'].includes(id));
}

function renderFilters() {
    if (!step1Container || !step2Container) return;
    step1Container.innerHTML = `
        <div class="search-filter-section">
            <div class="search-filter-title">Filtrer par type</div>
            <button type="button" id="btn-go-sa" class="search-filter-item">
                <span class="search-filter-text">
                    <span class="search-filter-text-title">Situations d'Apprentissage</span>
                    <span class="search-filter-text-sub">Parcourir par SA</span>
                </span>
                <span class="search-filter-arrow">→</span>
            </button>
            <button type="button" id="btn-go-seq" class="search-filter-item">
                <span class="search-filter-text">
                    <span class="search-filter-text-title">Séquences de cours</span>
                    <span class="search-filter-text-sub">Parcourir par séquence</span>
                </span>
                <span class="search-filter-arrow">→</span>
            </button>
        </div>
    `;
    document.getElementById('btn-go-sa')?.addEventListener('click', (e) => {
        e.stopPropagation();
        renderStep2('sa');
    });
    document.getElementById('btn-go-seq')?.addEventListener('click', (e) => {
        e.stopPropagation();
        renderStep2('sequence');
    });
}

function renderStep2(type) {
    if (!step2Container) return;
    const titleText = type === 'sa' ? 'Choisir une SA' : 'Choisir une séquence';
    step2Container.innerHTML = `
        <div class="search-dropdown-header">
            <button type="button" id="btn-back-step1" class="search-dropdown-back" aria-label="Retour">←</button>
            <span>${titleText}</span>
            <span style="width: 40px;"></span>
        </div>
        <div class="search-filter-options"></div>
    `;
    document.getElementById('btn-back-step1')?.addEventListener('click', (e) => {
        e.stopPropagation();
        slideStep(1);
    });
    const optionsGrid = step2Container.querySelector('.search-filter-options');
    if (!optionsGrid || !currentProgramme) return;

    if (type === 'sa') {
        Object.entries(currentProgramme).forEach(([saKey, saData]) => {
            // Exclude SA titles that are introductions
            if (isIntroTitle(saData?.title)) return;
            const option = document.createElement('button');
            option.type = 'button';
            option.textContent = saData?.title || saKey;
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                selectSa(saKey);
            });
            optionsGrid.appendChild(option);
        });
    }
    if (type === 'sequence') {
        Object.entries(currentProgramme).forEach(([saKey, saData]) => {
            // Skip sequences under SA introduction titles
            if (isIntroTitle(saData?.title)) return;
            Object.entries(saData.sequences || {}).forEach(([seqKey, seqData]) => {
                // Exclude sequences whose title looks like an introduction
                if (isIntroTitle(seqData?.title)) return;
                const option = document.createElement('button');
                option.type = 'button';
                option.textContent = `${seqData?.title || seqKey} — ${saData.title || saKey}`;
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectSequence(seqKey, saKey);
                });
                optionsGrid.appendChild(option);
            });
        });
    }
    if (optionsGrid.children.length % 2 === 1) {
        const lastButton = optionsGrid.lastElementChild;
        if (lastButton) lastButton.classList.add('span-two');
    }
    slideStep(2);
}

function selectSa(saKey) {
    selectedSa = saKey;
    selectedSequence = '';
    updateActiveFilters();
    renderResults(searchInput?.value || '');
    updateFilterChips();
    searchInput?.focus();
}

function selectSequence(seqKey, saKey = '') {
    selectedSequence = seqKey;
    selectedSa = saKey || '';
    updateActiveFilters();
    renderResults(searchInput?.value || '');
    updateFilterChips();
    searchInput?.focus();
}

function openFilterPanel() {
    if (!filterPanel) return;
    slideStep(1);
    renderFilters();
    filterPanel.classList.add('visible');
    filterPanel.setAttribute('aria-hidden', 'false');
    isDropdownOpen = true;
    updateFilterChips();
    renderResults(searchInput?.value || '');
}

function closeFilterPanel() {
    if (!filterPanel) return;
    filterPanel.classList.remove('visible');
    filterPanel.setAttribute('aria-hidden', 'true');
    isDropdownOpen = false;
}

function updateActiveFilters() {
    activeFilters = [];
    if (selectedSequence && currentProgramme) {
        Object.values(currentProgramme).forEach((saData) => {
            const seqData = saData?.sequences?.[selectedSequence];
            if (!seqData) return;
            (seqData.notions || []).forEach((n) => {
                const nid = typeof n === 'string' ? n : n.id;
                if (nid) activeFilters.push(nid);
            });
        });
    } else if (selectedSa && currentProgramme?.[selectedSa]) {
        Object.values(currentProgramme[selectedSa].sequences || {}).forEach((seq) => {
            (seq.notions || []).forEach((n) => {
                const nid = typeof n === 'string' ? n : n.id;
                if (nid) activeFilters.push(nid);
            });
        });
    }
    activeFilters = [...new Set(activeFilters)];
}

function resetSearchState() {
    selectedSa = '';
    selectedSequence = '';
    activeFilters = [];
    updateFilterChips();
    renderResults(searchInput?.value || '');
}

function renderResults(query) {
    if (!searchResults) return;
    searchResults.innerHTML = '';
    if (searchCount) searchCount.innerHTML = '';

    const q = normalize(query);
    searchQuery = q;
    const scope = { sa: selectedSa, sequence: selectedSequence };
    const allowedIds = getAllowedNotionIds(scope);

    const results = allowedIds
        .map((id) => ({ id, notion: currentNotions[id] }))
        .filter(({ notion, id }) => {
            if (!notion) return false;
            if (activeFilters.length > 0 && !activeFilters.includes(id)) return false;
            if (q) {
                const titleNorm = normalize(notion.title || '');
                const idNorm = normalize(id);
                return titleNorm.includes(q) || idNorm.includes(q);
            }
            return true;
        })
        .slice(0, 50);

    if (searchCount) {
        const count = results.length;
        searchCount.textContent = count === 1 ? '1 résultat' : `${count} résultats`;
    }

    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">Aucune notion trouvée pour ce filtre.</div>';
        return;
    }

    results.forEach(({ id, notion }) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'search-item';

        const isSA = String(id).startsWith('SA');
        // Tout est géré par les classes CSS (.search-item-body, .search-item-meta, etc.) — aucune icône.
        item.innerHTML = `
            <div class="search-item-body">
                <span class="search-item-meta">${id} · ${isSA ? "Situation d'Apprentissage" : 'Séquence'}</span>
                <div class="search-item-title">${highlight(notion.title || id, query)}</div>
            </div>
            <span class="search-item-go" aria-hidden="true">→</span>
        `;

        // Suppression totale de apply3DTilt(item) qui cassait l'UX
        item.addEventListener('click', () => goToNotion(id));
        searchResults.appendChild(item);
    });
}

export function openSearch() {
    if (!searchBox) return;

    searchBox.classList.add('open');

    // Le panneau des filtres reste fermé à l'ouverture.
    // Il sera ouvert uniquement avec le bouton "Filtre".
    closeFilterPanel();

    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }

    renderResults('');
}

function closeSearch() {
    if (!searchBox) return;
    searchBox.classList.remove('open');
    closeFilterPanel();
}

function goToNotion(notionId) {
    closeSearch();
    setEraserX(-100);
    setIsTransitioning(true);
    setNextPhase(notionId);
    setPaused(false);
    if (typeof window !== 'undefined') {
        window.__pendingLaunchNotionId = notionId;
    }
}

export function setSearchCourseContext(context = {}) {
    currentNotions = context.notions || {};
    currentProgramme = context.programme || null;
    selectedSa = '';
    selectedSequence = '';
    activeFilters = [];
    renderFilters();
    updateFilterChips();
    renderResults(searchInput?.value || '');
}

function clearChips() {
    if (!chipsContainer) return;
    chipsContainer.innerHTML = '';
    chipsContainer.style.display = 'none';
}

function createChip(key, title, type) {
    const chip = document.createElement('span');
    chip.className = 'search-chip';
    chip.setAttribute('data-type', type || 'sa');
    chip.setAttribute('data-key', key || '');

    const label = document.createElement('span');
    label.className = 'search-chip-label';
    label.textContent = title || key || '';
    chip.appendChild(label);

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'search-chip-close';
    closeBtn.setAttribute('aria-label', 'Supprimer filtre');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const t = chip.getAttribute('data-type');
        if (t === 'sequence') {
            selectedSequence = '';
        } else if (t === 'sa') {
            selectedSa = '';
            selectedSequence = '';
        }
        updateActiveFilters();
        updateFilterChips();
        renderResults(searchInput?.value || '');
        searchInput?.focus();
    });
    chip.appendChild(closeBtn);
    return chip;
}

function updateFilterChips() {
    if (!chipsContainer) return;
    chipsContainer.innerHTML = '';
    const chips = [];

    if (selectedSa && currentProgramme && currentProgramme[selectedSa]) {
        const title = currentProgramme[selectedSa].title || selectedSa;
        chips.push(createChip(selectedSa, title, 'sa'));
    }
    if (selectedSequence) {
        let seqTitle = selectedSequence;
        if (selectedSa && currentProgramme?.[selectedSa]?.sequences?.[selectedSequence]) {
            seqTitle = currentProgramme[selectedSa].sequences[selectedSequence].title || selectedSequence;
        } else if (currentProgramme) {
            outer: for (const [saK, saData] of Object.entries(currentProgramme)) {
                const s = saData.sequences || {};
                for (const [sk, sd] of Object.entries(s)) {
                    if (sk === selectedSequence) {
                        seqTitle = sd.title || sk;
                        break outer;
                    }
                }
            }
        }
        chips.push(createChip(selectedSequence, seqTitle, 'sequence'));
    }

    if (!chips.length) {
        clearChips();
        return;
    }
    chips.forEach((c) => chipsContainer.appendChild(c));
    chipsContainer.style.display = 'inline-flex';
}

// Event Listeners
searchInput?.addEventListener('input', (e) => renderResults(e.target.value));
searchInputWrapper?.addEventListener('click', () => searchInput?.focus());

// CORRECTION : Le bouton "Changer de scène" ouvre maintenant la recherche
switchBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openSearch();
});

filterToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!filterPanel) return;
    if (filterPanel.classList.contains('visible')) {
        closeFilterPanel();
        return;
    }
    openFilterPanel();
});

searchClose?.addEventListener('click', () => {
    closeSearch();
    filterPanel?.classList.remove('visible');
});

searchInput?.addEventListener('focus', () => {
    if (!searchBox?.classList.contains('open')) {
        openSearch();
    }
});

document.addEventListener('click', (e) => {
    if (!searchBox) return;
    const clickedInsideSearch = searchBox.contains(e.target);
    const clickedSwitchButton = e.target?.closest?.('#switchBtn');
    if (!clickedInsideSearch && !clickedSwitchButton) {
        closeSearch();
        closeFilterPanel();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (isDropdownOpen) closeFilterPanel();
        else closeSearch();
    }
});

window.openSearch = openSearch;
window.setSearchCourseContext = setSearchCourseContext;
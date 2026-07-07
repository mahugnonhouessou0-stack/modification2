import { isAnswerLikelyCorrect } from './miniAI.js';

/**
 * Service IA dédié à l’évaluation des réponses de l’élève.
 * Ce module centralise toute la logique de comparaison et protège le moteur.
 */
function normalizeForMatch(s) {
    return (s || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[“”]/g, '"')
        .replace(/[’]/g, "'")
        .replace(/[^\p{L}\p{N}\s'".,;:-]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function escapeRegExp(str) {
    return (str || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tokenPresence(textNorm, keywordNorm) {
    if (keywordNorm !== '' && /^-?\d+(\.\d+)?$/.test(keywordNorm)) {
        const num = escapeRegExp(keywordNorm);
        const re = new RegExp(`(^|[^\\d])${num}([^\\d]|$)`, 'g');
        return re.test(textNorm);
    }
    return textNorm.includes(keywordNorm);
}

export async function evaluateAnswer(input, target) {
    try {
        const candidate = typeof input === 'string' ? input : '';
        const expected = typeof target === 'string' ? target : '';
        if (!candidate || !expected) return false;

        const result = isAnswerLikelyCorrect(candidate, expected);
        console.log(`[IA Service] ${result} pour "${candidate}" vs "${expected}"`);
        return result;
    } catch (error) {
        console.warn('[IA Service] Échec de l’évaluation, retour sécurisé.', error);
        return false;
    }
}

export function normalizeForAiMatch(value) {
    return normalizeForMatch(value);
}

export function hasKeyword(text, keyword) {
    const textNorm = normalizeForMatch(text);
    const keywordNorm = normalizeForMatch(keyword);
    return tokenPresence(textNorm, keywordNorm);
}

export function getAiStatus() {
    return {
        ready: true,
        mode: 'local-fallback',
        description: 'Évaluation locale robuste des réponses de l’élève'
    };
}

const STOP_WORDS = new Set([
  'a','ai','alors','au','aux','avec','c','ca','ce','ces','chez','combien','comme','comment','d','de','des','du','elle','en','est','et','etre','eu','faut','il','ils','je','la','le','les','mais','meme','mes','moi','mon','ne','nos','on','ou','par','pas','peut','peuvent','pour','pourquoi','que','quel','quelle','quels','quelles','qui','sa','se','si','son','sont','sous','sur','ta','te','tes','toi','un','une','voici','vous','votre','vos','y'
]);

const SYNONYMS = [
  ['pi', 'pi', 'π', '3.14159'],
  ['fois', 'fois', 'multiplie', 'multiplie par', 'x', '×', 'mul', 'produit'],
  ['carre', 'carre', 'carré', 'carree', 'au carre', 'au carré', 'carres', 'square', '²'],
  ['racine', 'racine', 'racine carree', 'racine carrée', 'sqrt', '√'],
  ['segment', 'segment', 'segments', 'cote', 'côté', 'cotes', 'cotés'],
  ['angle', 'angle', 'angles'],
  ['point', 'point', 'points'],
  ['oui', 'oui', 'ouai', 'exactement', 'correct', 'vrai', 'yes'],
  ['non', 'non', 'faux', 'false', 'non pas', 'pas vrai']
];

function normalizeText(value) {
  if (value == null) return '';
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/×/g, ' fois ')
    .replace(/π/g, ' pi ')
    .replace(/²/g, ' carre ')
    .replace(/√/g, ' racine ')
    .replace(/[^\p{L}\p{N}\s'".,;:-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(' ')
    .map(token => token.trim())
    .filter(Boolean)
    .filter(token => !STOP_WORDS.has(token));
}

function expandSynonyms(tokens) {
  const expanded = new Set();
  tokens.forEach(token => {
    for (const group of SYNONYMS) {
      if (group.includes(token)) {
        group.forEach(entry => expanded.add(entry));
      }
    }
    expanded.add(token);
  });
  return [...expanded];
}

function extractNumbers(value) {
  const matches = normalizeText(value).match(/-?\d+(?:[.,]\d+)?/g) || [];
  return matches.map(m => Number(m.replace(',', '.')));
}

function hasYesNo(value) {
  const normalized = normalizeText(value);
  const positive = /(oui|ouai|exactement|correct|vrai|yes|cest bon|c'est bon)/.test(normalized);
  const negative = /(non|faux|false|pas vrai|incorrect|non pas)/.test(normalized);
  return { positive, negative };
}

function compareNumbers(a, b) {
  const numsA = extractNumbers(a);
  const numsB = extractNumbers(b);
  if (!numsA.length || !numsB.length) return null;
  const same = numsA.some(n1 => numsB.some(n2 => Math.abs(n1 - n2) < 1e-9));
  return same;
}

export function isAnswerLikelyCorrect(candidate, expected, context = '') {
  try {
    const a = normalizeText(candidate);
    const b = normalizeText(expected);
    const c = normalizeText(context);

    if (!a && !b) return false;
    if (!a) return false;
    if (!b) return true;

    if (a === b) return true;

    const yesNoA = hasYesNo(a);
    const yesNoB = hasYesNo(b);
    if ((yesNoA.positive || yesNoA.negative) && (yesNoB.positive || yesNoB.negative)) {
      if (yesNoA.positive && yesNoB.positive) return true;
      if (yesNoA.negative && yesNoB.negative) return true;
    }

    const numberMatch = compareNumbers(a, b);
    if (numberMatch === true) return true;

    const tokensA = expandSynonyms(tokenize(a));
    const tokensB = expandSynonyms(tokenize(b));
    const tokenOverlap = tokensA.filter(token => tokensB.includes(token)).length;
    const score = tokenOverlap / Math.max(1, Math.max(tokensA.length, tokensB.length));

    const containsAllExpected = tokensB.every(token => tokensA.includes(token));
    const containsAllCandidate = tokensA.every(token => tokensB.includes(token));
    const contextBoost = c && (a.includes(c) || b.includes(c)) ? 0.1 : 0;
    const isStrongMatch = containsAllExpected || containsAllCandidate || score >= 0.45 + contextBoost;

    return isStrongMatch;
  } catch (error) {
    console.warn('[IA Mini] Erreur lors de l’évaluation, fallback sécurisé activé.', error);
    return false;
  }
}

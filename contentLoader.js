const DEFAULT_CLASS = '4eme';
const DEFAULT_SERIES = '';
const DEFAULT_SUBJECT = 'maths';

function normalizeText(value) {
  return String(value || '')
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function normalizeClassName(value) {
  const normalized = normalizeText(value);
  const map = {
    '6eme': '6eme',
    '6e': '6eme',
    '5eme': '5eme',
    '5e': '5eme',
    '4eme': '4eme',
    '4e': '4eme',
    '3eme': '3eme',
    '3e': '3eme',
    'seconde': 'seconde',
    'premiere': 'premiere',
    '1ere': 'premiere',
    'terminale': 'terminale'
  };
  return map[normalized] || DEFAULT_CLASS;
}

function normalizeSeries(value) {
  const normalized = normalizeText(value);
  const map = {
    'a': 'a',
    'a1': 'a1',
    'a2': 'a2',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'c/d': 'cd',
    'cd': 'cd',
    'c-d': 'cd'
  };
  return map[normalized] || normalized;
}

function getSeriesFolderName(value) {
  const normalized = normalizeSeries(value);
  const map = {
    'a': 'a',
    'a1': 'a1',
    'a2': 'a2',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'cd': 'cd'
  };
  return map[normalized] || normalized;
}

function normalizeSubject(value) {
  const normalized = normalizeText(value);
  const map = {
    'maths': 'maths',
    'mathematiques': 'maths',
    'math': 'maths',
    'pct': 'pct',
    'physique': 'pct',
    'physique-chimie': 'pct',
    'physiquechimie': 'pct'
  };
  return map[normalized] || DEFAULT_SUBJECT;
}

function getFolderName(className, series) {
  const normalizedClass = normalizeClassName(className);
  const normalizedSeries = normalizeSeries(series);
  const needsSeries = ['seconde', 'premiere', 'terminale'].includes(normalizedClass);

  if (!needsSeries || !normalizedSeries) {
    return normalizedClass;
  }

  return `${normalizedClass}/${getSeriesFolderName(normalizedSeries)}`;
}

function readSelectionFromStorage() {
  if (typeof window === 'undefined' || !window.localStorage) return {};
  return {
    className: window.localStorage.getItem('selectedClass') || '',
    series: window.localStorage.getItem('selectedSeries') || '',
    subject: window.localStorage.getItem('selectedSubject') || ''
  };
}

export function getDefaultCourseSelection() {
  const stored = readSelectionFromStorage();
  return {
    className: normalizeClassName(stored.className || DEFAULT_CLASS),
    series: normalizeSeries(stored.series || DEFAULT_SERIES),
    subject: normalizeSubject(stored.subject || DEFAULT_SUBJECT)
  };
}

export function setDefaultCourseSelection(selection = {}) {
  const nextSelection = {
    className: normalizeClassName(selection.className || DEFAULT_CLASS),
    series: normalizeSeries(selection.series || DEFAULT_SERIES),
    subject: normalizeSubject(selection.subject || DEFAULT_SUBJECT)
  };

  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('selectedClass', nextSelection.className);
    window.localStorage.setItem('selectedSeries', nextSelection.series || '');
    window.localStorage.setItem('selectedSubject', nextSelection.subject || '');
  }

  return nextSelection;
}

export function resetDefaultCourseSelection() {
  return setDefaultCourseSelection({
    className: DEFAULT_CLASS,
    series: DEFAULT_SERIES,
    subject: DEFAULT_SUBJECT
  });
}

export async function loadCourseContent(preferredClass = '', preferredSeries = '', preferredSubject = '') {
  const currentSelection = getDefaultCourseSelection();
  const selection = setDefaultCourseSelection({
    className: preferredClass || currentSelection.className,
    series: preferredSeries || currentSelection.series,
    subject: preferredSubject || currentSelection.subject
  });

  const className = normalizeClassName(selection.className || DEFAULT_CLASS);
  const series = normalizeSeries(selection.series || DEFAULT_SERIES);
  const subject = normalizeSubject(selection.subject || DEFAULT_SUBJECT);
  const folderName = getFolderName(className, series);

  const module = await import(`./classes/${folderName}/${subject}.js`);
  return {
    ...module,
    className,
    series,
    subject,
    modulePath: `./classes/${folderName}/${subject}.js`
  };
}

if (typeof window !== 'undefined') {
  window.setDefaultCourseSelection = setDefaultCourseSelection;
  window.getDefaultCourseSelection = getDefaultCourseSelection;
  window.resetDefaultCourseSelection = resetDefaultCourseSelection;
}

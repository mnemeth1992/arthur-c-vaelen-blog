export interface SeriesTheme {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotBg: string;
  pingBg: string;
  accentText: string;
  cardBg: string;
  cardBorder: string;
  activeTab: string;
  boxBg: string;
  boxBorder: string;
  boxTitle: string;
  numberBg: string;
  numberText: string;
}

export const SERIES_REGISTRY: Record<string, SeriesTheme> = {
  'A láthatatlan feszültség': {
    id: 'lathatatlan-feszultseg',
    name: 'A láthatatlan feszültség',
    shortName: 'Templomtér & Liturgia',
    description: 'AuDHD a gyülekezetben, szenzoros túlterhelés és liturgikus akadálymentesítés.',
    icon: '⛪',
    badgeBg: 'bg-amber-500/15 dark:bg-amber-400/15',
    badgeText: 'text-amber-900 dark:text-amber-200',
    badgeBorder: 'border-amber-600/35 dark:border-amber-400/35',
    dotBg: 'bg-amber-600 dark:bg-amber-400',
    pingBg: 'bg-amber-500',
    accentText: 'text-amber-800 dark:text-amber-300',
    cardBg: 'bg-amber-500/5 dark:bg-amber-400/5',
    cardBorder: 'border-amber-500/25 dark:border-amber-400/25',
    activeTab: 'bg-amber-700 text-white dark:bg-amber-500 dark:text-neutral-950',
    boxBg: 'bg-amber-500/10 dark:bg-amber-400/10',
    boxBorder: 'border-amber-500/30 dark:border-amber-400/30',
    boxTitle: 'text-amber-950 dark:text-amber-200',
    numberBg: 'bg-amber-500/20 text-amber-800 dark:bg-amber-400/20 dark:text-amber-300',
    numberText: 'text-amber-700 dark:text-amber-400',
  },
  'AuDHD a keresztény házasságban': {
    id: 'audhd-hazassag',
    name: 'AuDHD a keresztény házasságban',
    shortName: 'Házasság & Párkapcsolat',
    description: 'Szeretetnyelvek dekonstrukciója, kettős empátia és neuro-affirmatív szövetség.',
    icon: '🕊️',
    badgeBg: 'bg-indigo-500/15 dark:bg-indigo-400/15',
    badgeText: 'text-indigo-900 dark:text-indigo-200',
    badgeBorder: 'border-indigo-600/35 dark:border-indigo-400/35',
    dotBg: 'bg-indigo-600 dark:bg-indigo-400',
    pingBg: 'bg-indigo-500',
    accentText: 'text-indigo-800 dark:text-indigo-300',
    cardBg: 'bg-indigo-500/5 dark:bg-indigo-400/5',
    cardBorder: 'border-indigo-500/25 dark:border-indigo-400/25',
    activeTab: 'bg-indigo-700 text-white dark:bg-indigo-500 dark:text-neutral-950',
    boxBg: 'bg-indigo-500/10 dark:bg-indigo-400/10',
    boxBorder: 'border-indigo-500/30 dark:border-indigo-400/30',
    boxTitle: 'text-indigo-950 dark:text-indigo-200',
    numberBg: 'bg-indigo-500/20 text-indigo-800 dark:bg-indigo-400/20 dark:text-indigo-300',
    numberText: 'text-indigo-700 dark:text-indigo-400',
  },
};

const DEFAULT_THEME: SeriesTheme = {
  id: 'alapertelmezett',
  name: 'Cikksorozat',
  shortName: 'Sorozat',
  description: 'Tematikus elemzések és kutatási esszék.',
  icon: '📚',
  badgeBg: 'bg-emerald-500/15 dark:bg-emerald-400/15',
  badgeText: 'text-emerald-900 dark:text-emerald-200',
  badgeBorder: 'border-emerald-600/35 dark:border-emerald-400/35',
  dotBg: 'bg-emerald-600 dark:bg-emerald-400',
  pingBg: 'bg-emerald-500',
  accentText: 'text-emerald-800 dark:text-emerald-300',
  cardBg: 'bg-emerald-500/5 dark:bg-emerald-400/5',
  cardBorder: 'border-emerald-500/25 dark:border-emerald-400/25',
  activeTab: 'bg-emerald-700 text-white dark:bg-emerald-500 dark:text-neutral-950',
  boxBg: 'bg-emerald-500/10 dark:bg-emerald-400/10',
  boxBorder: 'border-emerald-500/30 dark:border-emerald-400/30',
  boxTitle: 'text-emerald-950 dark:text-emerald-200',
  numberBg: 'bg-emerald-500/20 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300',
  numberText: 'text-emerald-700 dark:text-emerald-400',
};

export function getSeriesTheme(seriesName?: string): SeriesTheme {
  if (!seriesName) return DEFAULT_THEME;
  for (const [key, theme] of Object.entries(SERIES_REGISTRY)) {
    if (seriesName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(seriesName.toLowerCase())) {
      return theme;
    }
  }
  return DEFAULT_THEME;
}


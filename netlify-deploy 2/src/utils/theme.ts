export const getThemeClasses = (theme: 'dark' | 'light') => {
  if (theme === 'dark') {
    return {
      bg: 'bg-dark-bg',
      surface: 'bg-dark-surface',
      border: 'border-dark-border',
      text: 'text-dark-text',
      textSecondary: 'text-dark-text-secondary',
      accent: 'text-dark-accent',
      hoverBorder: 'hover:border-dark-accent/50',
      hoverText: 'hover:text-dark-text',
      hoverAccent: 'hover:text-dark-accent',
    }
  }
  return {
    bg: 'bg-light-bg',
    surface: 'bg-light-surface',
    border: 'border-light-border',
    text: 'text-light-text',
    textSecondary: 'text-light-text-secondary',
    accent: 'text-light-accent',
    hoverBorder: 'hover:border-light-accent/50',
    hoverText: 'hover:text-light-text',
    hoverAccent: 'hover:text-light-accent',
  }
}



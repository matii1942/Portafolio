import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

type Theme = 'light' | 'dark';

const readStored = (): Theme | null => {
  try {
    const value = localStorage.getItem('pfTheme');
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
};

const systemTheme = (): Theme =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => readStored() ?? systemTheme());

  useEffect(() => {
    const stored = readStored();
    // Only stamp the root when the visitor has made a choice; otherwise the
    // CSS media query keeps following their operating system.
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    }
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('pfTheme', next);
    } catch {
      /* private mode — the choice simply does not persist */
    }
  };

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? 'LIGHT' : 'DARK'}
    </button>
  );
};

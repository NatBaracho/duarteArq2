import { useEffect, useCallback, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('light');

  const applyTheme = useCallback((t) => {
    document.documentElement.classList.toggle('dark-mode', t === 'dark');
    setTheme(t);
    try {
      localStorage.setItem('theme', t);
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);
  }, [applyTheme]);

  const toggle = useCallback(() => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  }, [applyTheme, theme]);

  return { theme, toggle };
}

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = (() => {
      if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') === 'dark';
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
      }
      return false;
    })();

    setIsDark(theme);

    const root = document.documentElement;
    if (theme) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const backgroundColor = theme ? '#070e12' : '#f8f9fa';
    const darkerBackground = theme ? '#0c1a20' : '#f8f9fa';
    document.body.style.backgroundColor = backgroundColor;
    root.style.setProperty('--background-darker', darkerBackground);
  }, []);

  const handleToggleClick = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    const root = document.documentElement;
    if (newIsDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

    const backgroundColor = newIsDark ? '#070e12' : '#f8f9fa';
    const darkerBackground = newIsDark ? '#0c1a20' : '#f8f9fa';
    document.body.style.backgroundColor = backgroundColor;
    root.style.setProperty('--background-darker', darkerBackground);
  };

  return (
    <button id="themeToggle" type="button" onClick={handleToggleClick}>
      {isDark ? (
        <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            className="sun"
            fill="white"
            d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
          />
        </svg>
      ) : (
        <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            className="moon"
            fill="black"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;

const styles = `
  .sun { fill: black; }
  .moon { fill: transparent; }

  .dark .sun { fill: transparent; }
  .dark .moon { fill: white; }
`;

export { styles };

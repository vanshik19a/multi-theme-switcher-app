import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('theme1');

  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme') as ThemeType;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

 useEffect(() => {
  document.documentElement.classList.remove('theme1', 'theme2', 'theme3', 'dark');
  document.documentElement.classList.add(theme);

  if (theme === 'theme2') {
    document.documentElement.classList.add('dark');
  }

  localStorage.setItem('app-theme', theme);
}, [theme]);



  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

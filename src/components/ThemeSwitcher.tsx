import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3');
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="p-2 rounded border dark:bg-gray-800 dark:text-white"
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeSwitcher;

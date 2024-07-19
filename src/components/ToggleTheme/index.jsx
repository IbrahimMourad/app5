import React, { useContext, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;

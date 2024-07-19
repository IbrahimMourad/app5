import React, { useContext, useEffect, useState } from 'react';
import ToggleTheme from './components/ToggleTheme';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ProductCard from './components/ProductsList/ProductCard';

const ThemeProviderExample = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h2>Dark/Light Example</h2>
      <ToggleTheme />
      <ProductCard />
    </div>
  );
};

export default ThemeProviderExample;

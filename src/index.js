import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProviderExample from './ThemeProviderExample';

import './index.css';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {' '}
    <ThemeProvider>
      <ThemeProviderExample />
    </ThemeProvider>
  </React.StrictMode>
);

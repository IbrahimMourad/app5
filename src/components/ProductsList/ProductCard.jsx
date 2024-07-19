import React, { useContext } from 'react';
import ProductTitle from './ProductTitle';
import { DataContext } from '../../App';

import './index.css';
import { useTheme } from '../../context/ThemeContext';

const ProductCard = () => {
  const { theme } = useTheme();

  return (
    <div className={`card-${theme}`}>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default ProductCard;

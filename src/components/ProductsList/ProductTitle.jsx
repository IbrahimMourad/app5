import React from 'react';

const ProductTitle = ({ title, price }) => {
  return (
    <>
      <h6>{title}</h6>
      <span>${price}</span>
    </>
  );
};

export default ProductTitle;

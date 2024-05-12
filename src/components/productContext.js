
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const setProductDetail = (productData) => {
    setProduct(productData);
  };

  return (
    <ProductContext.Provider value={{ product, setProductDetail }}>
      {children}
    </ProductContext.Provider>
  );
};

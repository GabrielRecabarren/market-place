import React, { createContext, useState } from "react";

export const CartContext = createContext([]);
export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <CartContext.Provider value={[cart, setCart, totalItems, setTotalItems]}>
      {children}
    </CartContext.Provider>
  );
};

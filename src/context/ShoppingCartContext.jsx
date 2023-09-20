import React, { createContext,  useState, useEffect } from "react";

export const CartContext = createContext([]);
export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // Nuevo estado para el precio total

  // Función para calcular y actualizar el precio total
  const updateTotalPrice = () => {
    let price = 0;
    cart.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price.toFixed(2));
  };

  // Efecto para actualizar el precio total cuando cambia el carrito
  useEffect(() => {
    updateTotalPrice();
  }, [cart]);


  return (
    <CartContext.Provider value={[cart, setCart, totalItems, setTotalItems, totalPrice, updateTotalPrice]}>
      {children}
    </CartContext.Provider>
  );
};

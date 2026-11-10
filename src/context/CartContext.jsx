import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
  setCart((prevCart) => {
    // Busca si ya existe en el carrito usando estrictamente el id
    const existingProduct = prevCart.find((item) => item.id === pizza.id);
    
    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      return [...prevCart, { ...pizza, count: 1 }];
    }
  });
};

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decrementQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
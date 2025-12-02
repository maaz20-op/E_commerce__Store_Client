import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("prevCartItem");
    return saved ? JSON.parse(saved) : [];
  });

  // Always sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("prevCartItem", JSON.stringify(cart));
  }, [cart]);

  const setDataToCart = (id) => {
    if (cart.includes(id)) return;
    setCart((prev) => [...prev, id]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, setDataToCart }}>
      {children}
    </CartContext.Provider>
  );
}

import React, { createContext, useReducer, useContext } from 'react';
import cartReducer from '../reducer/cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    totalAmount: 0,
    totalItems: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

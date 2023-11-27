import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      // Add more cases for other cart actions if needed

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

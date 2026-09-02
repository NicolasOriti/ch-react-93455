import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  clearCart: () => {},
  isInCart: () => false,
});

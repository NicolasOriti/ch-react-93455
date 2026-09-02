import { useReducer, useCallback, useEffect } from 'react';

import { CartContext } from './CartContext';
import { cartReducer, initialCartState, CART_ACTIONS } from './cartReducer';

const CART_STORAGE_KEY = 'ch-react-cart';

function initCartState(fallback) {
  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? { items: JSON.parse(storedCart) } : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState, initCartState);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = useCallback((product, quantity = 1) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { product, quantity } });
  }, []);

  const removeItem = useCallback();

  const clearCart = useCallback();

  const increaseItemQuantity = useCallback();

  const decreaseItemQuantity = useCallback();

  const isInCart = useCallback();

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    items: state.items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

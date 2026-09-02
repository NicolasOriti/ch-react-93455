export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREASE_ITEM_QUANTITY: 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY: 'DECREASE_ITEM_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

export const initialCartState = {
  items: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product, quantity } = action.payload;

      const isExisting = state.items.find((item) => item.id === product.id);

      if (isExisting) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id 
              ? { ...item, quantity: item.quantity + quantity } 
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...product,
            quantity,
          },
        ],
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
    }

    case CART_ACTIONS.INCREASE_ITEM_QUANTITY: {
    }

    case CART_ACTIONS.DECREASE_ITEM_QUANTITY: {
    }

    case CART_ACTIONS.CLEAR_CART: {
    }

    default:
      return state;
  }
}

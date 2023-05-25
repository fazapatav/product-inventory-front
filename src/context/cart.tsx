import { useReducer, createContext } from 'react';
import { cartReducer, cartInitialState } from '../reducers/cart';

export const CartContext = createContext({
    cart: [],
    addToCart: (product:any) => {},
    removeFromCart: (product:any) => {},
    clearCart: () => {},
  });

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addToCart = (product:any) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  });

  const removeFromCart = (product:any) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return { state, addToCart, removeFromCart, clearCart };
}

export function CartProvider ({ children }:any) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
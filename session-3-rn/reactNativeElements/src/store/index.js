import React from 'react';
import {cartReducer} from './reducer';

const CartContext = React.createContext();

function CartProvider({children}) {
  const [cartState, setCartState] = React.useReducer(cartReducer, [1, 2, 3]);

  const cartValue = React.useMemo(() => {
    return {state: cartState, dispatch: setCartState};
  }, [cartState, setCartState]);

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

function useCartContext() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}

export {CartProvider, useCartContext};

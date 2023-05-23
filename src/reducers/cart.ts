export const cartInitialState = window.localStorage.getItem('cart')
  ? JSON.parse(window.localStorage.getItem('cart') as string)
  : [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = (state: any ) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state:any, action:any) => {
  const {type:actionType, payload:ActionPayload} = action;

  switch (actionType){
    case CART_ACTION_TYPES.ADD_TO_CART:{
      const { id } = action.payload;
      const productInCartIndex = state.findIndex((item:any) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ];

        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...action.payload, // product
          quantity: 1
        }
      ];

      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART:{
      const { id } = action.payload;
      const newState = state.filter((item:any) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.CLEAR_CART:{
      updateLocalStorage([]);
      return [];
    }
  }
  return state;
}
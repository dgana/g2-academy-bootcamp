import {ADD_CART, DELETE_CART} from '../constants';

const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.payload];
    case DELETE_CART:
      return state.filter((x) => x !== action.payload);
    default:
      return state;
  }
}

export default cartReducer;

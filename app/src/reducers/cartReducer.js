import shortid from 'shortid';
import * as CART from '../config/CONSTANTS';

export default function todoReducer(state = { items: [] }, action) {
  const type = action.type;

  if (type === CART.ADD_ITEM) {
    const newItem = action.payload;
    newItem.id = shortid.generate();
    return {
      ...state,
      items: [...state.items, newItem],
    };
  }
  if (type === CART.REMOVE_ITEM) {
    return {
      ...state,
      items: state.items.filter(items => items.id !== action.payload),
    };
  }

  return state;
}

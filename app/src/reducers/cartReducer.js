import shortid from 'shortid';
import * as CONSTANTS from '../config/CONSTANTS';

const initialState = {
  items: [],
  shopItemIds: {},
  total: 0,
};

export default function todoReducer(state = initialState, action) {
  const type = action.type;

  if (type === CONSTANTS.ADD_CART_ITEM) {
    const shopItem = action.payload;

    if (!state.shopItemIds[shopItem.id]) {
      const newItem = { shopItem: action.payload };
      newItem.id = shortid.generate();
      newItem.num = 1;
      return {
        ...state,
        shopItemIds: { ...state.shopItemIds, [shopItem.id]: newItem },
        items: [...state.items, newItem],
      };
    }

    return {
      ...state,
      items: state.items.map((item) => {
        let newItem = item;
        if (newItem.shopItem.id === shopItem.id) {
          newItem = { ...newItem, num: ++newItem.num };
        }
        return newItem;
      }),
    };
  }
  if (type === CONSTANTS.REMOVE_CART_ITEM) {
    const cartItem = action.payload;
    const { shopItem } = cartItem;
    return {
      ...state,
      items: state.items.filter(item => item.id !== cartItem.id),
      shopItemIds: { ...state.shopItemIds, [shopItem.id]: null },
    };
  }

  if (type === CONSTANTS.EDIT_CART_ITEM) {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      }),
    };
  }

  if (type === CONSTANTS.CALCULATE_CART_ITEMS) {
    return {
      ...state,
      total:
        state.items && state.items.length > 0
          ? state.items.reduce((total, item) => total + (item.num * item.shopItem.price), 0)
          : 0,
    };
  }

  return state;
}

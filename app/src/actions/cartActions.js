
import * as CART from '../config/CONSTANTS';

export function addItem(item) {
  return (dispatch) => {
    dispatch({
      type: CART.ADD_ITEM,
      payload: item,
    });
    dispatch({
      type: CART.CALCULATE_ITEMS,
      payload: null,
    });
  };
}

export function removeItem(id) {
  return (dispatch) => {
    dispatch({
      type: CART.REMOVE_ITEM,
      payload: id,
    });
    dispatch({
      type: CART.CALCULATE_ITEMS,
      payload: null,
    });
  };
}

export function editItem(item) {
  return {
    type: CART.EDIT_ITEM,
    payload: item,
  };
}

export function calculateItems() {
  return {
    type: CART.CALCULATE_ITEMS,
    payload: null,
  };
}

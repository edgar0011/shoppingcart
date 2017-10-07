
import * as CONSTANTS from '../config/CONSTANTS';

export function addItem(item) {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.ADD_CART_ITEM,
      payload: item,
    });
    dispatch({
      type: CONSTANTS.CALCULATE_CART_ITEMS,
      payload: null,
    });
  };
}

export function removeItem(id) {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.REMOVE_CART_ITEM,
      payload: id,
    });
    dispatch({
      type: CONSTANTS.CALCULATE_CART_ITEMS,
      payload: null,
    });
  };
}

export function editItem(item) {
  return {
    type: CONSTANTS.EDIT_CART_ITEM,
    payload: item,
  };
}

export function calculateItems() {
  return {
    type: CONSTANTS.CALCULATE_CART_ITEMS,
    payload: null,
  };
}

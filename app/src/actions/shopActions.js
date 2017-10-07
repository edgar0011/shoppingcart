
import * as CONSTANTS from '../config/CONSTANTS';
import ShopService from '../dataApi/ShopService';

const service = new ShopService();

export function loadItems() {
  return dispatch => service.getShopItems()
    .then((response) => {
      dispatch({
        type: CONSTANTS.LOADED_ITEMS,
        payload: response.data,
      });
      return response.data;
    });
}

export function addItem(item) {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.ADD_ITEM,
      payload: item,
    });
    dispatch({
      type: CONSTANTS.CALCULATE_ITEMS,
      payload: null,
    });
  };
}

export function removeItem(id) {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.REMOVE_ITEM,
      payload: id,
    });
    dispatch({
      type: CONSTANTS.CALCULATE_ITEMS,
      payload: null,
    });
  };
}

export function editItem(item) {
  return {
    type: CONSTANTS.EDIT_ITEM,
    payload: item,
  };
}

export function calculateItems() {
  return {
    type: CONSTANTS.CALCULATE_ITEMS,
    payload: null,
  };
}

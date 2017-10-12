// import faker from 'faker';
// import shortid from 'shortid';
import * as CONSTANTS from '../config/CONSTANTS';
// import ShopService from '../dataApi/ShopService';

const initialState = {
  items: [],
};
/*
const loadDataToFB = () => {
  const service = new ShopService();
  let numProducts = 20;
  while (numProducts--) {
    const name = faker.commerce.product();
    initialState.items.push({
      id: shortid.generate(),
      name,
      productName: faker.commerce.productName(),
      color: faker.commerce.color(),
      price: faker.commerce.price(),
      productAdjective: faker.commerce.productAdjective(),
      productMaterial: faker.commerce.productMaterial(),
      image: faker.image.image(),
      imageUrl: `http://via.placeholder.com/140x95?text=${name}`,
    });
    service.addShopItem(initialState.items[initialState.items.length - 1]);
  }
}; */

export default function shopReducer(state = initialState, action) {
  if (action.type === CONSTANTS.LOADED_ITEMS) {
    const items = Object.keys(action.payload).map((key) => {
      const item = action.payload[key];
      item.key = key;
      return item;
    });
    return {
      ...state,
      items,
    };
  }

  return state;
}

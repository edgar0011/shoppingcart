import faker from 'faker';
import shortid from 'shortid';

const initialState = {
  items: [],
};

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
}

export default function shopReducer(state = initialState) {
  return state;
}

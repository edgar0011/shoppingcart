// @flow
/*
import firebase from 'firebase';
import ShopService  from './ShopService';
import type ShopServiceType  from './ShopService';

const config = {
  apiKey: 'AIzaSyD5b6dAjnFsZgOvl9sXBj-ZFYvNYcN_Amc',
  authDomain: 'shop-cca28.firebaseapp.com',
  databaseURL: 'https://shop-cca28.firebaseio.com',
  projectId: 'shop-cca28',
  storageBucket: 'shop-cca28.appspot.com',
  messagingSenderId: '578198797684',
};
const defaultApp = firebase.initializeApp(config);
// You can retrieve services via the defaultApp variable...
// const defaultStorage = defaultApp.storage();
const defaultDatabase = defaultApp.database();

const rootRef = defaultDatabase.ref();

export default rootRef; */

// const service: ShopServiceType = new ShopService();
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* service.getShopItems()
  .then(
    (response) => {
      console.log('response:', response);
      return response;
    },
    error => console.log('error', error),
  ).then((response) => {
    console.log(response);
    debugger;

    const itemId = Object.keys(response.data)[0];
    const item = response.data[itemId];
    item.name = 'EDIT NAME';
    service.editShopItem(itemId, item)
      .then((re) => {
        debugger;
        console.log(re);
      });

    /!* service.addShopItem({
      name: `post ${Math.random()}`,
      data: `data data ${Date.now()}`,
      color: '#FF0000',
      price: 222,
    })
      .then((re) => {
        debugger;
        console.log(re);
      }); *!/
  }); */


// @flow

import ServiceBase from './ServiceBase';

import * as URLS from '../config/URLS';

export default class ShopService extends ServiceBase {
  constructor(...args:any) {
    super(args);
  }

  getShopItems() {
    return super.get(URLS.SHOP_ITEMS);
  }

  addShopItem(shopItem:ShopItem) {
    return super.post(URLS.SHOP_ITEMS, shopItem);
  }

  editShopItem(id:string, shopItem:ShopItem) {
    return super.put(URLS.SHOP_ITEMS_ITEMID(id), shopItem);
  }

  getCartItems() {
    return super.get(URLS.CART_ITEMS);
  }

  addCartItem(item:CartItem) {
    return super.post(URLS.CART_ITEMS, item);
  }

  editCartItem(id:string, item:CartItem) {
    return super.put(URLS.CART_ITEMS_ITEMID(id), item);
  }
}

export type ShopItem = {
  id?: string,
  name: string,
  imageUrl?: string,
  productName?: string,
  color?: string,
  productMaterial?: string,
  productAdjective?: string,
  price:number,
}

export type CartItem = {
  shopItem: ShopItem,
  id: string,
  num: number,
}

export type ShopServiceType = {
  getShopItems(): Promise<any>,
  addShopItem(shopItem:ShopItem): Promise<any>,
  editShopItem(id: number, shopItem:ShopItem): Promise<any>,
  getCartItems(): Promise<any>,
  addCartItem(item:CartItem): Promise<any>,
  editCartItem(id: number, item:CartItem): Promise<any>,
}


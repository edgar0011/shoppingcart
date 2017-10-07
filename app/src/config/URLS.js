
export const FB_DB_URL_BASE = 'https://shop-cca28.firebaseio.com';
export const SHOP_ITEMS = `${FB_DB_URL_BASE}/items.json`;
export const CART_ITEMS = `${FB_DB_URL_BASE}/cart/items.json`;

export const SHOP_ITEMS_ITEMID = id => `${FB_DB_URL_BASE}/items/${id}.json`;
export const CART_ITEMS_ITEMID = id => `${FB_DB_URL_BASE}/cart/${id}.json`;


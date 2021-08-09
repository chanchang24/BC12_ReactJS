// import {
//   ADD_TO_SHOPPING_LIST,
//   UPDATE_QUANTITY,
//   REMOVE_FROM_SHOPPING_LIST,
// } from '../constants/shoesShopConstants';

import * as shoesShopContants from '../constants/shoesShopConstants';

export const actAddToShoppingList = shoe => ({
  type: shoesShopContants.ADD_TO_SHOPPING_LIST,
  payload: shoe,//payload: data là 1 obj cần gửi lên cho reducer
});

export const actUpdateQuantity = (id, type) => ({
  type: shoesShopContants.UPDATE_QUANTITY,
  payload: { id, type },
});

export const actRemoveFromShoppingList = id => ({
  type: shoesShopContants.REMOVE_FROM_SHOPPING_LIST,
  payload: id,
});

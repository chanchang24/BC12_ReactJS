import * as shoesShopConstants from '../constants/shoesShopConstants';

const inittialState = {
  shoppingList: [],
};

const shoesShopReducer = (state = inittialState, action) => {
  const { type, payload } = action;//action có 2 thuộc tính

  switch (type) {
    case shoesShopConstants.ADD_TO_SHOPPING_LIST: {
      // Copy ra mảng mới để xử lý
      const shoppingListUpdate = [...state.shoppingList];

      // Bổ sung thuộc tính quantity
      const newShoe = {
        ...payload,
        quantity: 1,
      };

      // Kiểm tra sản phẩm đã tồn tại trong mảng hay chưa
      const idx = shoppingListUpdate.findIndex(item => item.id === payload.id);

      if (idx === -1) {
        // Chưa tồn tại trong mảng
        shoppingListUpdate.push(newShoe);
      } else {
        // Đã tồn tại trong mảng
        shoppingListUpdate[idx].quantity += 1;
      }

      // Trả về state mới( return ra obj mới, copy state trước đó rồi cập nhật)
      return { ...state, shoppingList: shoppingListUpdate };//thuộc tính có rồi thì nó sẽ update
    }
    case shoesShopConstants.UPDATE_QUANTITY: {
      //type: true => tăng, false => giảm
      const { id, type } = payload;

      const shoppingListUpdate = [...state.shoppingList];

      // Tìm vị trí phần tử cần cập nhật số lượng
      const idx = shoppingListUpdate.findIndex(item => item.id === id);

      // Dựa vào type để biết tăng hoặc giảm
      if (type) {
        shoppingListUpdate[idx].quantity += 1;
      } else {
        if (shoppingListUpdate[idx].quantity > 1) {
          shoppingListUpdate[idx].quantity -= 1;
        }
      }
      // Trả về state mới
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case shoesShopConstants.REMOVE_FROM_SHOPPING_LIST: {
      const shoppingListUpdate = [...state.shoppingList];

      // Tìm vị trí sản phẩm cần xoá
      const idx = shoppingListUpdate.findIndex(item => item.id === payload);

      // Xoá 1 phần tử tại vị trí idx
      shoppingListUpdate.splice(idx, 1);

      // Trả về state mới
      return { ...state, shoppingList: shoppingListUpdate };
    }
    default:
      return state;
  }
};

export default shoesShopReducer;

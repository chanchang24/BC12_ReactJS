import React, { Component } from 'react';
import ProductList from './ProductList';
import ShoppingList from './ShoppingList';
import productList from './data.json';

export default class ShoesShop extends Component {
  state = {
    shoppingList: [],
  };

  addToShoppingList = shoe => {
    // Copy ra mảng mới để xử lý
    const shoppingListUpdate = [...this.state.shoppingList];

    // Bổ sung thuộc tính quantity
    const newShoe = {
      ...shoe,//spread operator
      quantity: 1,
    };

    // Kiểm tra sản phẩm đã tồn tại trong mảng hay chưa
    const idx = shoppingListUpdate.findIndex(item => item.id === shoe.id);

    if (idx === -1) {
      // Chưa tồn tại trong mảng trả về -1
      shoppingListUpdate.push(newShoe);
    } else {
      // Đã tồn tại trong mảng
      shoppingListUpdate[idx].quantity += 1;
    }

    // Cập nhật lại state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  updateQuantity = (id, action) => {
    // action: true => tăng, false => giảm
    const shoppingListUpdate = [...this.state.shoppingList];

    // Tìm vị trí phần tử cần cập nhật số lượng
    const idx = shoppingListUpdate.findIndex(item => item.id === id);

    // Dựa vào action để biết tăng hoặc giảm
    if (action) {
      shoppingListUpdate[idx].quantity += 1;
    } else {//không có điều kiện thì -ra số âm
      if (shoppingListUpdate[idx].quantity > 1) {
        shoppingListUpdate[idx].quantity -= 1;
      }
    }

    // Cập nhật state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  removeFromShoppingList = id => {
    const shoppingListUpdate = [...this.state.shoppingList];

    // Tìm vị trí sản phẩm cần xoá
    const idx = shoppingListUpdate.findIndex(item => item.id === id);

    // Xoá 1 phần tử tại vị trí idx
    shoppingListUpdate.splice(idx, 1);

    // Cập nhật state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  render() {
    const { shoppingList } = this.state;

    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-7 text-right">
            <h2>Shoes Shop</h2>
          </div>
          <div className="col-5 text-right">
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#shoppingList"// gọi render bên ShoppingList
            >
              {/* lấy được số lượng sản phẩm */}
              Shopping List ({shoppingList.length})
            </button>
          </div>
        </div>
        <ShoppingList
          shoppingList={shoppingList}
          updateQuantity={this.updateQuantity}//phương thức của class nên this.không gọi hàm
          removeFromShoppingList={this.removeFromShoppingList}
        />
        <ProductList
          productList={productList}
          addToShoppingList={this.addToShoppingList}
        />
      </div>
    );
  }
}

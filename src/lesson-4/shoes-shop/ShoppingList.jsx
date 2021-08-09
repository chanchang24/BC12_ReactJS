import React, { Component } from 'react';

export default class ShoppingList extends Component {
  render() {
    const { shoppingList, updateQuantity, removeFromShoppingList } = this.props;
    // cha truyền xuống cái gì, thì chỉ được nhận không được gán (cơ chế Undirectional data flow 1 chiều)
    return (
      <div
        className="modal fade"
        id="shoppingList"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shopping List</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {shoppingList.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Render shopping list */}
                    {shoppingList.map(shoe => {
                      const { id, name, image, price, quantity } = shoe;

                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>
                            <img src={image} width="40px" />
                          </td>
                          <td>{price}$</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => updateQuantity(id, true)}
                            >
                              +
                            </button>{' '}
                            {quantity}{' '}
                            <button
                              className="btn btn-danger"
                              onClick={() => updateQuantity(id, false)}
                            >
                              -
                            </button>
                          </td>
                          <td>{price * quantity}$</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => removeFromShoppingList(id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="text-center my-4">
                  There is no item! Let's shopping!
                </div>
              )}
              {shoppingList.length > 0 && (
                <div className="text-right">
                  <span className="font-weight-bold">Total Payment:</span>{' '}
                  <span>
                    {/* Tính tổng tiền thanh toán // currentValue: là từng cái obj duyệt qua*/}
                    {shoppingList.reduce((total, currentValue) => {
                      return (total +=//hàm cộng dồn của từng obj duyệt qua với giá trị ban đầu total =0
                        currentValue.price * currentValue.quantity);
                    }, 0)}
                    $
                  </span>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

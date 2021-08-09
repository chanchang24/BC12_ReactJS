import React, { Component } from 'react';
import ProductList from './ProductList';
import ShoppingList from './ShoppingList';
import productList from './data.json';
import { connect } from 'react-redux';

class ShoesShopRedux extends Component {
  render() {
    const { lengthShoppingList } = this.props;

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
              data-target="#shoppingList"
            >
              Shopping List ({lengthShoppingList})
            </button>
          </div>
        </div>
        <ShoppingList/>
        <ProductList productList={productList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lengthShoppingList: state.shoesShopReducer.shoppingList.length,
});

export default connect(mapStateToProps)(ShoesShopRedux);

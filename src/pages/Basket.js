import React from "react";
import { connect } from "react-redux";
import "../styles/basket.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../redux/basket.selectors";
import CheckoutItem from "../components/CheckoutItem";

const Basket = ({ basketItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {basketItems.map((basketItem) => (
      <CheckoutItem basketItem={basketItem} key={basketItem.id} />
    ))}
    <div className="total">
      <span>TOTAL: £{total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  basketItems: selectBasketItems,
  total: selectBasketTotal,
});

export default connect(mapStateToProps)(Basket);

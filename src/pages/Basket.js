import React from "react";
import { connect } from "react-redux";
import BasketItem from "../components/BasketItem";
import "../styles/basket.styles.scss";

const Basket = (basketItems) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
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
    <div className="basket-items">
      {basketItems.length ? (
        basketItems.map((basketItem) => (
          <BasketItem key={basketItem.name} item={basketItem} />
        ))
      ) : (
        <span className="empty-message">Your basket is empty</span>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ basket: { basketItems } }) => ({
  itemCount: basketItems.reduce(
    (accumulatedQuantity, basketItem) =>
      accumulatedQuantity + basketItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(Basket);

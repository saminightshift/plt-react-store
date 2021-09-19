import React from "react";

import "../styles/basket.styles.scss";

const CheckoutItem = ({ basketItem: { name, img, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={img} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);
export default CheckoutItem;

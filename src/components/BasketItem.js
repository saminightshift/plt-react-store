import React from "react";

import "../styles/basket.item.scss";

const BasketItem = ({ item: { img, price, name, quantity } }) => (
  <div className="container">
    <div className="basket-item">
      <div className="img container">
        <img src={img} alt={name} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x £{price}
        </span>
      </div>
    </div>
  </div>
);
export default BasketItem;

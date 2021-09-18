import React from "react";

import "../styles/basket.item.scss";

const BasketItem = ({ item: { img, price, name, quantity } }) => (
  <div className="basket-item">
    <img src={img} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x £{price}
      </span>
    </div>
  </div>
);
export default BasketItem;

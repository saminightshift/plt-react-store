import React from "react";
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../redux/basket.actions";

import "../styles/basket.styles.scss";

const CheckoutItem = ({ basketItem, clearItem, addItem, removeItem }) => {
  const { name, img, price, quantity } = basketItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={img} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(basketItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(basketItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(basketItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

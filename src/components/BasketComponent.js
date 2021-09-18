import React from "react";
import { connect } from "react-redux";

import BasketItem from "./BasketItem";

import "../styles/basket.dropdown.scss";
import "../styles/button.styles.scss";

const BasketDropdown = ({ basketItems }) => (
  <div className="basket-dropdown">
    <div className="basket-items">
      {basketItems.map((basketItem) => (
        <BasketItem key={basketItem.name} item={basketItem} />
      ))}
    </div>
    <button type="button" className="button">
      Go to Checkout
    </button>
  </div>
);

const mapStateToProps = ({ basket: { basketItems } }) => ({
  basketItems,
});
export default connect(mapStateToProps)(BasketDropdown);

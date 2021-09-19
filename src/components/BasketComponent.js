import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import BasketItem from "./BasketItem";
import Button from "../components/Button.component";

import "../styles/basket.dropdown.scss";
import "../styles/button.styles.scss";

const BasketDropdown = ({ basketItems, history }) => (
  <div className="basket-dropdown">
    <div className="basket-items">
      {basketItems.length ? (
        basketItems.map((basketItem) => (
          <BasketItem key={basketItem.name} item={basketItem} />
        ))
      ) : (
        <span className="empty-message">Your basket is empty</span>
      )}
    </div>
    <Button className="button" onClick={() => history.push("/basket")}>
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = ({ basket: { basketItems } }) => ({
  basketItems,
});

export default withRouter(connect(mapStateToProps)(BasketDropdown));

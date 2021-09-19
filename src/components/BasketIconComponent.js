import React from "react";
import "../styles/basket.icon.scss";
import { ReactComponent as BasketIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
// import { selectBasketItems } from "../redux/basket.selectors";

import { toggleBasketHidden } from "../redux/basket.actions";

const BasketIconComponent = ({ toggleBasketHidden, itemCount }) => {
  return (
    <>
      <div className="basket-icon" onClick={toggleBasketHidden}>
        <BasketIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    </>
  );
};

const mapStateToProps = ({ basket: { basketItems } }) => ({
  itemCount: basketItems.reduce(
    (accumulatedQuantity, basketItem) =>
      accumulatedQuantity + basketItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  toggleBasketHidden: () => dispatch(toggleBasketHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketIconComponent);

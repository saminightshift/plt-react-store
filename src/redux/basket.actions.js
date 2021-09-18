import BasketActionTypes from "./basket.types";

export const toggleBasketHidden = () => ({
  type: BasketActionTypes.TOGGLE_BASKET_HIDDEN,
});

export const addItem = (item) => ({
  type: BasketActionTypes.ADD_ITEM,
  payload: item,
});

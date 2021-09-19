import BasketActionTypes from "./basket.types";
import { addItem, removeItem } from "./Basket.utils";

const INITIAL_STATE = {
  hidden: true,
  basketItems: [],
};

export const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BasketActionTypes.TOGGLE_BASKET_HIDDEN:
      return {
        ...state,
        hidden: action.payload ? action.payload : !state.hidden,
      };
    case BasketActionTypes.ADD_ITEM:
      return {
        ...state,
        basketItems: addItem(state.basketItems, action.payload),
      };
    case BasketActionTypes.CLEAR_ITEM:
      return {
        ...state,
        basketItems: [
          ...state.basketItems.filter(
            (basketItem) => basketItem.id !== action.payload
          ),
        ],
      };
    case BasketActionTypes.REMOVE_ITEM:
      return {
        ...state,
        basketItems: removeItem(state.basketItems, action.payload),
      };
    default:
      return state;
  }
};

export default basketReducer;

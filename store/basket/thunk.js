import { addItem, removeItem } from "./slice";

export const addToBasket = (productId) => {
  return async (dispatch) => {
    await dispatch(addItem(productId));
  };
};

export const removeFromBasket = (productId) => {
  return async (dispatch) => {
    await dispatch(removeItem(productId));
  };
};

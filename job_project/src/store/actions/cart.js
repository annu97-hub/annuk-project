import axios from "axios";
import { DEFAULT_HEADERS } from "../../utils";
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants/cart";
import { EXPENSES_LIST } from "../../utils/temp-data";

export const addCartItem = (expenseData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // dispatch({
      //   type: USER_SIGN_UP,
      //   payload: {
      //     user: data.user,
      //     token: data.token,
      //   },
      // });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const removeCartItem = (expenseData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // dispatch({
      //   type: GET_EXPENSE,
      //   payload: EXPENSES_LIST,
      // });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

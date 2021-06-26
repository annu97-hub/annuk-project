import axios from "axios";
import { DEFAULT_HEADERS } from "../../utils";
import {
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  GET_EXPENSE,
  DELETE_EXPENSE,
} from "../constants/expense";
import {
  ADD_EXPENSE_ENDPOINT,
  EDIT_EXPENSE_ENDPOINT,
  LIST_EXPENSE_ENDPOINT,
  DELETE_EXPENSE_ENDPOINT,
} from "../../constants/api";
import { EXPENSES_LIST } from "../../utils/temp-data";

export const addExpense = (expenseData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(
        ADD_EXPENSE_ENDPOINT,
        expenseData,
        DEFAULT_HEADERS
      );

      console.log(data, "response from api");

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

export const getAllExpense = (expenseData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const url = `${LIST_EXPENSE_ENDPOINT}?list=1&user_id=1&date=5&year=2021`;
      // const { data } = await axios.post(
      //   url,
      //   {
      //     list: 1,
      //     user_id: 1,
      //     date: 5,
      //     year: 2021,
      //   },
      //   DEFAULT_HEADERS
      // );

      // console.log(data, "data from api side");
      dispatch({
        type: GET_EXPENSE,
        payload: EXPENSES_LIST,
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const updateExpense = (expense) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const {data} = await axios.post(
      //   REGISTER_ENDPOINT,
      //   userData,
      //   DEFAULT_HEADERS,
      // );

      // set the headers in axios
      // axios.defaults.headers.Authorization = 'Bearer ' + data.token;
      // // store the user and token in the localStorage
      // AsyncStorage.setItem('ACCESS_TOKEN', data.token);
      // AsyncStorage.setItem('USER', JSON.stringify(data.user));
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

export const deleteExpense = (expense) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const {data} = await axios.post(
      //   REGISTER_ENDPOINT,
      //   userData,
      //   DEFAULT_HEADERS,
      // );

      // set the headers in axios
      // axios.defaults.headers.Authorization = 'Bearer ' + data.token;
      // // store the user and token in the localStorage
      // AsyncStorage.setItem('ACCESS_TOKEN', data.token);
      // AsyncStorage.setItem('USER', JSON.stringify(data.user));
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

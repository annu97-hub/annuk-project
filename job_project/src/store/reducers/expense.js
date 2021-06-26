import {
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  GET_EXPENSE,
  DELETE_EXPENSE,
} from "../constants/expense";

const initialState = {
  expenses: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    case GET_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};

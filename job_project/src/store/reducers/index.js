import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { expenseReducer } from "./expense";
import{ categoriesListReducer } from "./categorieslist"

const rootReducer = combineReducers({
  auth: authReducer,
  expense: expenseReducer,
  products: categoriesListReducer,
});

export { rootReducer };

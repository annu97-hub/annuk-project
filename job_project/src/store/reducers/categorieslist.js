import {CATEGORIES_LIST_ITEM} from "../constants/categorieslist";

const initialState = {
  Categorieslist: [],
};

export const categoriesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LIST_ITEM:
      return {
        ...state,
        Categorieslist: action.payload.Categorieslist,
      };
    default:
      return state;
  }
};


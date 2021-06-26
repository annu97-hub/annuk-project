import axios from "axios";
import { DEFAULT_HEADERS } from "../../utils";
import {CATEGORIES_LIST_ENDPOINT} from "../../constants/api";
import {CATEGORIES_LIST_ITEM} from "../constants/categorieslist"

export const addCategories = () => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(
        CATEGORIES_LIST_ENDPOINT,
        null,
        DEFAULT_HEADERS
      );
      dispatch({
        type: CATEGORIES_LIST_ITEM,
        payload: {
          Categorieslist: data.data,
        },
      });
      console.log(data, "response from Categories list api");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
import axios from "axios";
import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  USER_SIGN_OUT,
  USER_UPDATE_PROFILE,
} from "../constants/auth";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const initialState = {
  user,
  token,
};

// set the auth header
axios.defaults.headers.Authorization = "Bearer " + token;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_UPDATE_PROFILE:
      return { ...state, user: action.payload.user };
    case USER_SIGN_OUT:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

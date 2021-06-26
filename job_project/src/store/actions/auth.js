import axios from "axios";
import { DEFAULT_HEADERS, MULTIPART_FORM_DATA_HEADERS } from "../../utils";
import { USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP } from "../constants/auth";
import {
  LOGIN_USER_ENDPOINT,
  REGISTER_USER_ENDPOINT,
} from "../../constants/api";

export const registerUser = (userData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(userData, "userData");
      // prepare form data
      const formData = new FormData();
      formData.append("phone", userData.phone);
      formData.append("password", userData.password);
      formData.append("image", userData.image);
      formData.append("device_token", userData.device_token);
      formData.append("signup_type", userData.signup_type);

      const { data } = await axios.post(
        REGISTER_USER_ENDPOINT,
        formData,
        MULTIPART_FORM_DATA_HEADERS
      );

      console.log(data, "data as response from register");

      // set the headers in axios
      axios.defaults.headers.Authorization = "Bearer " + data.token;

      // store the user and token in the localStorage
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));

      dispatch({
        type: USER_SIGN_IN,
        payload: {
          user: data.user,
          token: data.token,
        },
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const loginUser = (userData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    if (userData.email === "test@gmail.com" || userData.password === "123456") {
      localStorage.setItem("token", JSON.stringify("9354721082"));
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({
        type: USER_SIGN_IN,
        payload: {
          user: userData,
          token: 9354721082,
        },
      });
      resolve();
    } else {
      reject("Invalid email or password");
    }
  });

  // return new Promise(async (resolve, reject) => {
  //   try {
  //     const { data } = await axios.post(
  //       `${LOGIN_USER_ENDPOINT}`,
  //       userData,
  //       DEFAULT_HEADERS
  //     );

  //     // set the headers in axios
  //     axios.defaults.headers.Authorization = "Bearer " + data.token;

  //     // store the user and token in the localStorage
  //     localStorage.setItem("token", JSON.stringify(data.token));
  //     localStorage.setItem("user", JSON.stringify(data.user));

  //     dispatch({
  //       type: USER_SIGN_IN,
  //       payload: {
  //         user: data.user,
  //         token: data.token,
  //       },
  //     });
  //     resolve();
  //   } catch (error) {

  //     reject(error);
  //   }
  // });
};

export const autoSignIUser = (user, access_token) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // set the headers in axios
      // axios.defaults.headers.Authorization = 'Bearer ' + access_token;
      // dispatch({
      //   type: USER_SIGN_IN,
      //   payload: {
      //     user: JSON.parse(user),
      //     token: access_token,
      //   },
      // });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const logoutUser = () => (dispatch) => {
  try {
    dispatch({
      type: USER_SIGN_OUT,
    });
    // remove the user and token in the localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};

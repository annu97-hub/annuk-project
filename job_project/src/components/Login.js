import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/auth";

const Login = ({history}) => {
  
  const dispatch = useDispatch();
   const initialState = { email: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);

  const setFormData = (type) => (event) => {
    
    if (type === "email") {
      setLoginData((prevData) => ({
        ...prevData,
        email: event.target.value,
      }));
    }

    if (type === "password") {
      setLoginData((prevData) => ({
        ...prevData,
        password: event.target.value,
      }));
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
    dispatch(
      loginUser({
        email: loginData.email,
        password: loginData.password,
      })).then((response) => {
        history.push('/');
      }).catch((err) => {
        alert(err);
        console.log("ERR => while login user", err);
      })
    
  };

  return (
    <div>
      <div className="login">
        <form className="login__page" onSubmit={onLogin}>
          <h2>Login</h2>
          <label>Enter Your Email-Id :</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            required
            onChange={setFormData("email")}
          />
          <label>Enter Your Password :</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={setFormData("password")}
          />

          <button type="submit" class="submit__btn" required>
            Submit
          </button>
          <Link to="/signup"> SignUp </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

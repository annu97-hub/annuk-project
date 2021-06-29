import React, { useState } from "react";
import "../css/Signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/auth";

function Signup({history}) {
  const dispatch = useDispatch();
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
  const [signupData, setSignupData] = useState(initialState);

  const setFormData = (type) => (event) => {
    if (type === "firstName") {
      setSignupData((prevData) => ({
        ...prevData,
        firstName: event.target.value,
      }));
    }

    if (type === "lastName") {
      setSignupData((prevData) => ({
        ...prevData,
        lastName: event.target.value,
      }));
    }

    if (type === "email") {
      setSignupData((prevData) => ({
        ...prevData,
        email: event.target.value,
      }));
    }

    if (type === "password") {
      setSignupData((prevData) => ({
        ...prevData,
        password: event.target.value,
      }));
    }
  };

  const onSignup = (event) => {
    event.preventDefault();
    dispatch(
      registerUser({
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,
        password: signupData.password,
      })
    )
      .then((response) => {
        history.push("/login");
      })
      .catch((err) => {
        alert(err);
        console.log("ERR => while login user", err);
      });
  };

  return (
    <div className={"section"}>
      <div className={"signup"}>
        <form className={"signup__page"} onSubmit={onSignup}>
          <h2 id={"signup-type"}>SignUp</h2>
          <lable>Enter Your FirstName :</lable>
          <br />
          <input
            type={"text"}
            placeholder={"firstName"}
            onChange={setFormData("firstName")}
          />
          <br />
          <label> Enter Your LastName :</label>
          <br />
          <input
            type={"text"}
            placeholder={"lastName"}
            onChange={setFormData("lastName")}
          />
          <br />
          <label>Enter Your Email-Id :</label>
          <br />
          <input
            type={"email"}
            placeholder={"abc@gmail.com"}
            onChange={setFormData("email")}
          />
          <br />
          <label>Enter Your Password :</label>
          <br />
          <input
            type={"password"}
            placeholder={"Password"}
            onChange={setFormData("password")}
          />
          <br />
          <button type={"submit"} className={"submit__btn"}>
            Submit
          </button>
          
          <Link to="/login"> Login </Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;

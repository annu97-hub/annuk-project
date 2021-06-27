<<<<<<< HEAD


import React, { useState } from "react";
import "../css/Signup.css";
import { Link,Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/auth";

=======
import React, { useState } from "react";
import "../css/Signup.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/auth";
>>>>>>> f72f1ad1ee9860e73eb400ab3e5fdedf47c7df81

function Signup({history}) {
  const dispatch = useDispatch();
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
  const [signupData, setSignupData] = useState(initialState);

<<<<<<< HEAD
const Login = ({history}) => {
  
  const dispatch = useDispatch();
   const initialState = { email: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);

  const setFormData = (type) => (event) => {
  
        return(
            <div className={"section"} >
             <div className={"signup"} >
               <form className={"signup__page"} >
                <h2>SignUp</h2>
                
                <lable>Enter Your FirstName :</lable>
                <input type={"text"} placeholder={"firstName"}  /><br/>
                <label> Enter Your LastName :</label>
                <input type={"text"} placeholder={"lastName"}  /><br/>
                <label>Enter Your Email-Id :</label>
                <input type={"email"} placeholder={"abc@gmail.com"}  /><br/>
                <label>Enter Your Password :</label>
                <input type={"password"} placeholder={"Password"}  /><br/>
                <button type={"submit"} className={"submit__btn"}>Submit</button>
              </form>
             </div>
            </div> 

        );
    }; 
export default Signup;
=======
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
          <h2>SignUp</h2>

          <lable>Enter Your FirstName :</lable>
          <input
            type={"text"}
            placeholder={"firstName"}
            onChange={setFormData("firstName")}
          />
          <br />
          <label> Enter Your LastName :</label>
          <input
            type={"text"}
            placeholder={"lastName"}
            onChange={setFormData("lastName")}
          />
          <br />
          <label>Enter Your Email-Id :</label>
          <input
            type={"email"}
            placeholder={"abc@gmail.com"}
            onChange={setFormData("email")}
          />
          <br />
          <label>Enter Your Password :</label>
          <input
            type={"password"}
            placeholder={"Password"}
            onChange={setFormData("password")}
          />
          <br />
          <button type={"submit"} className={"submit__btn"}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
>>>>>>> f72f1ad1ee9860e73eb400ab3e5fdedf47c7df81

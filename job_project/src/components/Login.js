import React from "react";
import "../css/Login.css";

function Login(){
  return ( 
    <div>
        <div className="login">
            <form className="login__page">
              <h2>Login</h2>
              <label>Enter Your Email-Id :</label>
              <input type="email" placeholder="abc@gmail.com" required/>
              <label>Enter Your Password :</label>
              <input type="password" placeholder="Password" required/>
             
              <button type="submit" class="submit__btn" required>Submit</button>
              <a href={"#"} id="forgot">Forgot Password?</a>
              <a href={"#"}>SignUp!</a>
            </form>
        </div>    
      </div>
       
    
     );
  };

export default Login;
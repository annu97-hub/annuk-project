import React from "react";
import "../css/Login.css";

function Login(){
  return ( 
    <div>
        <div className="login">
            <form className="login__page">
              <label>Enter Your Email-Id :</label>
              <input type="email" placeholder="abc@gmail.com" required/>
              <label>Enter Your Password :</label>
              <input type="password" placeholder="Password" required/>
              
              <button type="submit" class="submit__btn" required>Submit</button>
              <a href="#" id="forgot">Forgot Password?</a>
              <a href="file:///C:/Users/hp/Desktop/clg-project/annuk-project/components/signup.html?#">SignUp!</a>
            </form>
        </div>    
      </div>
       
    
     );
  };

export default Login;
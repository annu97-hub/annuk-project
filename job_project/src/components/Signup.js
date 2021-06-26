import React from "react";
import "../css/Signup.css";


function Signup(){
  
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
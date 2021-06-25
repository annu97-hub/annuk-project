import React from "react";

class Test extends React.Component{
    render(){
        return(
            <div>
               <input type={"number"} placeholder={"Enter a number 1"} required/>
               <br/>
               <input type={"number"} placeholder={"Enter a number2"} required/>
               <br/>
               <button/>
            </div>
        )

        
    }
};

export default Test;
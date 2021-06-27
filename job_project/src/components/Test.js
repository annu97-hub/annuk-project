import React from "react";

class Test extends React.Component{
    render(){
        return(
            <div>
               <input type={"number"} placeholder={"Enter a number 1"} value={0} />
               <br/>
               <input type={"number"} placeholder={"Enter a number2"} value={0} />
               <br/>
               <button>Add</button>
            </div>
        )

        
    }
};

export default Test;
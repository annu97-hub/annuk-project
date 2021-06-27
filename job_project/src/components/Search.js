import React,  { useState } from "react";
import "../css/Search.css";
import {  useDispatch } from "react-redux";
import { applyUser } from "../store/actions/auth";



function Search ({history}) {
    const dispatch = useDispatch();
  const initialState = { PostName: "", CompanyName: "", Package: "" };
  const [applyData, setApplyData] = useState(initialState);

    const setFormData = (type) => (event) =>{

        if (type === "PostName") {
            setApplyData((prevData) => ({
                ...prevData,
               CompanyName: event.target.value,
              }));
            };
            if (type === "CompanyName") {
                setApplyData((prevData) => ({
                    ...prevData,
                   CompanyName: event.target.value,
                  }));
                };
               
             if (type === "Package") {
                    setApplyData((prevData) => ({
                        ...prevData,
                        Package: event.target.value,
                          }));
                        }
            };  
                    const onApply = (event) =>{
                         event.preventDefault();
                        dispatch(
                         registerUser({
                             PostName: applyData.PostName,
                             CompanyName: applyData.CompanyName,
                             Package: applyData.Package
                         })
                        )
                        .then((response) => {
                            history.push("/HomePage");
                        })
                        .catch((Err) => {
                            alert(Err);
                            console.log("ERR => HomePage user",Err);
                        });
                     };
                return(
                    <div className={"section"}>
                      <div className={"page"}>
                          <form className={"search__page"}>
                              <h2>Apply Here</h2>
                              <label>Post Name :</label>
                              <br/>
                              <input
                                type={"text"}
                                placeholder={"PostName"}
                                className={"text"}
                                onChange={setFormData("PostName")}
                                />
                                <br/>
                                <label>Company's Name :</label>
                                <br/>
                                <input
                                  type={"text"}
                                  placeholder={"Company's Name"}
                                  className={"text"}
                                  onChange={setFormData("Company's Name")}
                                  />
                                  <br/>
                                 <label>Package :</label>
                                 <br/>
                                <input
                                  type={"text"}
                                  placeholder={"Package"}
                                  className={"text"}
                                  onChange={setFormData("Package")}
                                  />
                                  <br/>
                                  <button type={"submit"} 
                                  className={"button"}>
                                 Apply..
                               </button>
                            </form>
                         
                      </div>
                    </div>
                );
    };
      
    

export default Search;

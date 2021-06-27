import React, { useState } from "react";
import "../css/Search.css";
import { useDispatch } from "react-redux";
import { addJob } from "../store/actions/auth";

function Search({ history }) {
  const dispatch = useDispatch();
  const initialState = { postName: "", companyName: "", package: "" };
  const [applyData, setApplyData] = useState(initialState);

  const setFormData = (type) => (event) => {
    if (type === "postName") {
      setApplyData((prevData) => ({
        ...prevData,
        postName: event.target.value,
      }));
    }

    if (type === "companyName") {
      setApplyData((prevData) => ({
        ...prevData,
        companyName: event.target.value,
      }));
    }

    if (type === "package") {
      setApplyData((prevData) => ({
        ...prevData,
        package: event.target.value,
      }));
    }
  };

  const onApply = (event) => {
    event.preventDefault();
    console.log(applyData);

    
    dispatch(
      addJob({
        postName: applyData.postName,
        companyName: applyData.companyName,
        package: applyData.package,
      })
    )
      .then((response) => {
        history.push("/");
      })
      .catch((Err) => {
        alert(Err);
        console.log("ERR => HomePage user", Err);
      });
  };

  return (
    <div className={"section"}>
      <div className={"page"}>
        <form className={"search__page"} onSubmit={onApply}>
          <h2>Add Job</h2>
          <label>Post Name :</label>
          <br />
          <input
            type={"text"}
            placeholder={"PostName"}
            className={"text"}
            onChange={setFormData("postName")}
          />
          <br />
          <label>Company's Name :</label>
          <br />
          <input
            type={"text"}
            placeholder={"Company's Name"}
            className={"text"}
            onChange={setFormData("companyName")}
          />
          <br />
          <label>Package :</label>
          <br />
          <input
            type={"text"}
            placeholder={"Package"}
            className={"text"}
            onChange={setFormData("package")}
          />
          <br />
          <button type={"submit"} className={"button"}>
            Apply..
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;

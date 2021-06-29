import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/JobSearch.css";
import { listJob } from "../store/actions/auth";

const JobSearch = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => {
    return state.auth.listJob;
  });
  console.log(jobs);
  useEffect(() => {
    dispatch(listJob())
      .then(() => {})
      .catch((err) => {
        console.log("ERR => while fetching all expenses");
      });
  }, []);

  return (
    <div className="display">
     
          <div class="flex-container">
         <div id="title">JOB-PORTAL.COM</div>
        <div>Home</div>
        <div>View</div>
        <div>Tools</div>
        <div>Edit</div>
        <div>About</div>
        </div>
      
     <h2>Find A Perfect Job for Yourself</h2>
      <div >
        <form >
          <input
          className={"search"}
            type="search"
            placeholder="Find your perfect Companies"
            required
          />
          <hr></hr>
        </form>

        <div className="container">
          
          { jobs &&
            jobs.map((job) => (
              <div class="icons">
                <p> Comany name: {job.companyName}</p>
                <p> Job name: {job.postName}</p>
                <p> Package: {job.package}</p>
                <p> Description: {job.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div class="footer">
       <p>Job Portal is  for searching a best Job for you.</p>
       <p></p>
       </div>
    </div>
     
  );
};

export default JobSearch;

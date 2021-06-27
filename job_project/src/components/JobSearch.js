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
    <>
      <div className={"search-page"}>
        <h2>Find A Perfect Job for Yourself</h2>
        <form>
          <input
            type="search"
            placeholder="Find your perfect Companies"
            required
          />
        </form>

        <div class="container">
          <h1>Software Companies</h1>
          { jobs &&
            jobs.map((job) => (
              <div class="icons">
                <p> Comany name: {job.companyName}</p>
                <p> Job name: {job.postName}</p>
                <p> Package: {job.package}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default JobSearch;

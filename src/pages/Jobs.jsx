import React, { useState, useEffect } from "react";
import axios from "axios";
import Job from "../components/Job";
import { Pagination } from "@mui/material";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobPerPage, setJobPerPage] = useState(10);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const lastJobIndex = currentPage * jobPerPage;
  const firstJobIndex = lastJobIndex - jobPerPage;
  const currentJobs = jobs.slice(firstJobIndex, lastJobIndex);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://devitjobs.us/api/jobsLight`,
      headers: {
        Accept: "application/vnd.api+json",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setJobs([...response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="jobs">
        <div className="container">
          {currentJobs ? (
            currentJobs.map((job, i) => {
              return <Job key={i} job={job} />;
            })
          ) : (
            <h1 className="text-center"> Not Found</h1>
          )}
        </div>
        <div className=" pagination">
          <Pagination
            count={Math.ceil(jobs.length / jobPerPage)}
            page={currentPage}
            onChange={handleChange}
          />
        </div>
      </section>
    </>
  );
}

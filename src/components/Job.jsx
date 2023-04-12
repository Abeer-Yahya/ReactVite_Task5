import React, { useState } from "react";
let jobs = [];

function Job(props) {
  const job = props.job;
  let apiDate = job.activeFrom.split("T")[0];
  let jobDate;
  function reverseString(apiDate) {
    return (jobDate = apiDate.split("-").reverse().join("-"));
  }
  reverseString(apiDate);
  return (
    <div className="jobCard">
      {!job.logoImg ? (
        <img
          src="https://s3-us-west-2.amazonaws.com/procure-now-public/assets/unknown-business-logo.png"
          width="20%"
        />
      ) : (
        <img src={job.logoImg} width="20%" />
      )}
      <p>
        <strong>{job.company},</strong> <br />
        <small>{job.address}</small>
      </p>

      <p className="date">{jobDate}</p>
      <p className="type"> {job.jobType}</p>

      <p>{job.name}</p>
      <a href={job.redirectJobUrl} target="blank">
        More info
      </a>
    </div>
  );
}
export default Job;

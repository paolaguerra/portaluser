import React from "react";
import { JobDescription } from "./JobDescription";
import { JobInvite } from "./JobInvite";

export const Jobs = () => {
  const jobAlert = window.localStorage.getItem("jobs");

  if (jobAlert === null) {
    return <JobInvite />;
  }

  const jobAlertArray = JSON.parse(jobAlert);

  return (
    <div>
      {jobAlertArray.map((job) => {
        return <JobDescription key={job.position} job={job} />;
      })}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { JobDescription } from "./JobDescription";
import { JobInvite } from "./JobInvite";

export const Jobs = () => {
  const [myJobList, setMyJobList] = useState([]);

  useEffect(() => {
    const jobAlert = window.localStorage.getItem("jobs");
    if (jobAlert !== null) {
      // Solo si hay algo en LS seteamos la variable del state:
      const jobAlertArray = JSON.parse(jobAlert);
      setMyJobList(jobAlertArray);
    }
  }, []);

  const handleDelete = (position) => {
    const newArray = myJobList.filter((jobItem) => {
      return jobItem.position !== position;
    });
    setMyJobList(newArray);
    
    let newArrayToString = JSON.stringify(newArray);
    window.localStorage.setItem('jobs', newArrayToString);
  };

  return (
    <div>
      {myJobList.length === 0 && <JobInvite />}
      {myJobList.map((job) => {
        return (
          <JobDescription
            key={job.position}
            onDelete={handleDelete}
            job={job}
          />
        );
      })}
    </div>
  );
};

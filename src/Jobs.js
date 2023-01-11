import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobDescription } from "./JobDescription";
import { JobInvite } from "./JobInvite";

export const Jobs = () => {
  // States del componente:
  const [myJobList, setMyJobList] = useState([]);
  const [clicks, setMyClicks] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cargando el componente Jobs");
    const jobAlert = window.localStorage.getItem("jobs");
    const clicksLS = window.localStorage.getItem("clicks");

    if (jobAlert !== null) {
      const jobAlertArray = JSON.parse(jobAlert);
      setMyJobList(jobAlertArray);
    }
    if (clicksLS !== null) {
      const clickNumber = parseInt(clicksLS);
      setMyClicks(clickNumber);
    }
  }, []);

  const handleDelete = (position) => {
    const newArray = myJobList.filter((jobItem) => {
      return jobItem.position !== position;
    });
    setMyJobList(newArray);

    let newArrayToString = JSON.stringify(newArray);
    window.localStorage.setItem("jobs", newArrayToString);
  };

  const handleApply = (position) => {
    // 1. Sumar el click
    const clicksCounter = clicks + 1;
    // 2. Guardar en localstorage
    window.localStorage.setItem("clicks", clicksCounter);
    navigate("/successfulapplication");
  };

  return (
    <div>
      {myJobList.length === 0 && <JobInvite />}
      {myJobList.map((job) => {
        return (
          <JobDescription
            key={job.position}
            job={job}
            onDelete={handleDelete}
            onApply={handleApply}
          />
        );
      })}
    </div>
  );
};

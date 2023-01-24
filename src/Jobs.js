import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobDescription } from "./JobDescription";
import { JobInvite } from "./JobInvite";

export const Jobs = () => {
  // States del componente:
  const [myJobList, setMyJobList] = useState([]);
  const [clicks, setMyClicks] = useState(0);
  // State el Input:
  const [myJob, setMyJob] = useState("");
  const [myLocation, setMyLocation] = useState("");
  const [myFilteredJobs, setMyFilteredJobs] = useState([]);

  const navigate = useNavigate();

  // Se ejecuta 1 vez cuando se carga el componente:
  useEffect(() => {
    const jobAlert = window.localStorage.getItem("jobs");
    const clicksLS = window.localStorage.getItem("clicks");

    if (jobAlert !== null) {
      const jobAlertArray = JSON.parse(jobAlert);
      setMyJobList(jobAlertArray);
      setMyFilteredJobs(jobAlertArray);
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
  /// Input ////

  const cambiosDelInputJobs = (event) => {
    setMyJob(event.target.value);
  };

  const cambiosDelInputLocation = (event) => {
    setMyLocation(event.target.value);
  };

  const handleSearch = () => {
    // Si no hay nada en el input, entonces copio
    // todos los valores originales en mi filtered array:
    if (myJob === "") {
      setMyFilteredJobs(myJobList);
    }
    else {
      const filteredJobs = myJobList.filter((jobItem) => {
        if (jobItem.position === myJob) {
          return true;
        } else {
  
          return false;
        }
      });
      setMyFilteredJobs(filteredJobs);
    }
  };

  return (
    <>    
    <div className="contenedor-notas">
    <div className="contenedor-input">
      <input
        className="textbox"
        placeholder="Job Title or Keywords"
        type="text"
        value={myJob}
        onChange={cambiosDelInputJobs}
        autoFocus
      ></input>
      <input
        className="textbox"
        placeholder="Location"
        type="text"
        value={myLocation}
        onChange={cambiosDelInputLocation}
        autoFocus
      ></input>
      <button
        onClick={handleSearch}
        type="buttom"
        className="btn btn-primary search"
      >
        Find Jobs
      </button>
    </div>
  </div>
    <div>
      {myFilteredJobs.length === 0 && <JobInvite />}
      {myFilteredJobs.map((job) => {
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
    </>
  );
};

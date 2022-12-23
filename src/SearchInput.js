import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [myJob, setMyJob] = useState("");
  const [myLocation, setMyLocation] = useState("");
  const navigate = useNavigate();

  const cambiosDelInputJobs = (event) => {
    setMyJob(event.target.value);
  };

  const cambiosDelInputLocation = (event) => {
    setMyLocation(event.target.value);
  };

  const handleSearch = () => {
    navigate("/jobs");
  };

  return (
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
  );
};

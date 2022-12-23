import React from "react";
import { useNavigate } from "react-router-dom";

export const JobAlert = () => {
  const navigate = useNavigate();

  const handleForm = () => {
    navigate("/form");
  };

  return (
    <div className="content-post-a-job">
      <h1 className="jobalert-title">Find your next <br />employees. Fast.</h1>
      <h4 className="jobalert-text">
        You know who you are looking for. <br />
        We will help you find it.
      </h4>
      <button
        onClick={handleForm}
        type="buttom"
        className="btn btn-primary btn-lg post-job"
      >
        Post a Job
      </button>
    </div>
  );
};

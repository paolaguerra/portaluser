import React from "react";
import { useNavigate } from "react-router-dom";

export const SuccessfulApplication = () => {
  const navigate = useNavigate();

  const redirectToJobs = () => {
    navigate("/jobs");
  };

  return (
    <div className="apply-to-a-new-job">
      <h1>your application has been successful. 🎉</h1>
      <h4 className="jobalert-text">
        You know who you are looking for. <br />
        We will help you find it.
      </h4>
      <button
        onClick={redirectToJobs}
        type="buttom"
        className="btn btn-primary btn-lg post-job"
      >
        Go to Jobs
      </button>
    </div>
  );
};

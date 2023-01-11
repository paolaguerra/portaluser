import React from 'react'
import { useNavigate } from "react-router-dom";

export const JobInvite = () => {
  const navigate = useNavigate();

  const redirectToForm = () => {
    navigate("/form");
  };

  return (
    <div className='job-invite'>
      <p>There is no job loaded so far, go to load the first job.</p>
      <button
          onClick={redirectToForm}
          type="button"
          className="btn btn-lg btn-secondary post-another-job"
        >
          Post a New Job
        </button>
    </div>
  )
}

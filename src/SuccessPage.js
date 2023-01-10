import React from "react";
import { useNavigate } from "react-router-dom";
import success from "./img/success.png";

export const SuccessPage = () => {
  const navigate = useNavigate();
  const redirectJobPage = () => {
    navigate("/jobs");
  };
  const redirectToForm = () => {
    navigate("/form");
  };
  return (
    <div className="contenedor-success">
      <img className="imagen-success" alt="success" src={success}></img>
      <div className="contenedor-texto-success">
        <p>
          <b>✨ Your Job has been published with success ✨</b>
        </p>
        <p className="description-success">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
      <div className="contenedor-botones">
        <button
          onClick={redirectJobPage}
          className="btn btn-lg btn btn-success success-buttom go-to-job-page"
        >
          Go to Jobs Page
        </button>
        <button
          onClick={redirectToForm}
          type="button"
          className="btn btn-lg btn-secondary post-another-job"
        >
          Post Another Job
        </button>
      </div>
    </div>
  );
};

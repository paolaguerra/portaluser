import React, { useContext } from "react";
import { FormContext } from "./context/UserContext";

export const FormPreview = () => {
  const { companyLS, emailformLS } = useContext(FormContext);

  return (
    <div className="card">
      <h5 className="card-header">Preview</h5>
      <div className="card-body">
        <h5 className="card-title">Your Job Alert Information</h5>
        <br />
        <p className="card-text">
          <b>Company Name:</b> {companyLS}
        </p>
        <p className="card-text">
          <b>Email</b> {emailformLS}
        </p>
        <br />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
};

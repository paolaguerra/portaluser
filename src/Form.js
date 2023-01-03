import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  const InputCompanyName = (event) => {
    setCompanyName(event.target.value);
  }

  const InputPosition = (event) => {
    setPosition(event.target.value);
  }

  const formPreview = () => {
    navigate("/form-preview");

  window.localStorage.setItem("companyname", companyName);
  window.dispatchEvent(new Event("storage"));

  window.localStorage.setItem("emailform", position);
  window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="form-input">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Company Name
        </span>
        <input
          onChange={InputCompanyName} 
          value={companyName}
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <span className="input-group-text">Position</span>
        <input
          onChange={InputPosition} 
          value={position}
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>

      <label for="basic-url" className="form-label"></label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          Your Company URL
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div class="input-group mb-3">
        <span className="input-group-text">Hour Price</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="input-group-text">.00</span>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">State</span>
        <input type="text" className="form-control" aria-label="Username" />
        <span className="input-group-text">City</span>
        <input type="text" className="form-control" aria-label="Server" />
      </div>

      <div className="input-group">
        <span className="input-group-text">Describe your offer</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
      <button type="button" onClick={formPreview} class="btn btn-lg btn-primary send-form">Send</button>
    </div>
  );
};

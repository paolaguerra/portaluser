import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [hourPrice, setHourPrice] = useState("$0");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [offerDescription, setOfferDescription] = useState("");

  const navigate = useNavigate();

  const InputCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const InputPosition = (event) => {
    setPosition(event.target.value);
  };

  const InputCompanyURL = (event) => {
    setCompanyURL(event.target.value);
  };

  const InputHourPrice = (event) => {
    setHourPrice(event.target.value);
  };

  const InputState = (event) => {
    setState(event.target.value);
  };

  const InputCity = (event) => {
    setCity(event.target.value);
  };

  const InputOfferDescription = (event) => {
    setOfferDescription(event.target.value);
  };

  const formPreview = () => {
    navigate("/form-preview");

    const pendingJob = {
      companyName,
      position,
      companyURL,
      hourPrice,
      state,
      city,
      offerDescription,
    };
    window.localStorage.setItem("pendingJob", JSON.stringify(pendingJob));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <h1 className="form-tittle">Hire the right person for your business</h1>
      <p className="form-text">
        No matter the skills, experience level, or qualifications you’re looking
        for, you’ll find the right people on Eazy Hire.
      </p>
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
            onChange={InputCompanyURL}
            value={companyURL}
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>

        <div class="input-group mb-3">
          <span className="input-group-text">Hour Price</span>
          <input
            onChange={InputHourPrice}
            value={hourPrice}
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">State</span>
          <input
            onChange={InputState}
            value={state}
            type="text"
            className="form-control"
            aria-label="Username"
          />
          <span className="input-group-text">City</span>
          <input
            onChange={InputCity}
            value={city}
            type="text"
            className="form-control"
            aria-label="Server"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Describe your offer</span>
          <textarea
            onChange={InputOfferDescription}
            value={offerDescription}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={formPreview}
          class="btn btn-lg btn-primary send-form"
        >
          Send
        </button>
      </div>
    </>
  );
};

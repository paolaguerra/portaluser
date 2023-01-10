import React, { useContext } from "react";
import { FormContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

export const FormPreview = () => {
  const navigate = useNavigate();
  const { pendingJobLS } = useContext(FormContext);
  const {
    companyName,
    position,
    companyURL,
    hourPrice,
    state,
    city,
    offerDescription,
  } = pendingJobLS;


  // crear un array en localstorage 

  const handleConfirmationToSuccessPage = () => {
    navigate("/successpage");

    // 1. Traer los jobs existentes:
    let existingJobsString = window.localStorage.getItem('jobs');
    let existingJobsArray = [];

    // LE estoy agregando la fecha de creacion
    pendingJobLS.createDate = moment().format('YYYY-MM-DD h:mm:ss a');

    if (existingJobsString === null) {
      // 2. Creamos el array porque no existe, y le agregamos el primer elemento:
      existingJobsArray = [pendingJobLS];
    } else {
      existingJobsArray = JSON.parse(existingJobsString);
      // 3. El array ya existe, entonces, tengo que agregar mi elemento a los existentes:
      existingJobsArray = [...existingJobsArray, pendingJobLS];
    }

    // Aca estoy seguro de que tengo un array con el nuevo elemento, ya sea que es el 
    // primero, o uno agregado a mi bolsa (array):
    console.log(existingJobsArray);

    existingJobsString = JSON.stringify(existingJobsArray);

    // 4. Guardar en local storage el job confirmado:
    window.localStorage.setItem('jobs', existingJobsString);

    // 5. Eliminar el pending job. Ya está confirmado:
    window.localStorage.removeItem('pendingJob');

  };

  return (
    <div className="card">
      <h5 className="card-header">Preview</h5>
      <div className="card-body">
        <br />
        <h5 className="card-title">Your Job Alert Information</h5>
        <br />
        <p className="card-text">
          <b>Company Name:</b> {companyName}
        </p>
        <br />
        <p className="card-text">
          <b>Position:</b> {position}
        </p>
        <br />
        <p className="card-text">
          <b>Company URL:</b> {companyURL}
        </p>
        <br />
        <p className="card-text">
          <b>Hour Price:</b> {hourPrice}
        </p>
        <br />
        <p className="card-text">
          <b>State:</b> {state}
        </p>
        <br />
        <p className="card-text">
          <b>City:</b> {city}
        </p>
        <br />
        <p className="card-text">
          <b>Offer Description:</b> {offerDescription}
        </p>
        <br />
        <br />
        <button onClick={handleConfirmationToSuccessPage} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};

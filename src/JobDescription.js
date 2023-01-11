import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export const JobDescription = (props) => {
  const { job } = props;

  const {
    companyName,
    position,
    companyURL,
    hourPrice,
    state,
    city,
    offerDescription,
    createDate,
  } = job;

  const handleDelete = () => {
    props.onDelete(position);
  };

  const handleApply = () => {
    props.onApply();
  };

 
  return (
    <div>
      <div className="card text-left">
        <div className="card-header">
          <p>{city} </p>
          {state}
        </div>
        <div className="card-body">
          <br />
          <h5 className="card-title">{position}</h5>
          <p className="card-text">{companyName}</p>
          <br />
          <p className="card-text">Hour Price: {hourPrice}</p>
          <br />
          <p className="card-text">Offer Description: {offerDescription}</p>
          <br />
          <p className="card-text">Website: {companyURL}</p>
          <br />
          <div id="liveAlertPlaceholder"></div>
          <br />
          <button
            onClick={handleApply}
            type="button"
            className="btn btn-primary"
            id="liveAlertBtn"
          >
            Apply Now
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
        <br />
        <div className="card-footer text-muted">
          {moment(createDate).fromNow()}
        </div>
      </div>
    </div>
  );
};

JobDescription.propTypes = {
  job: PropTypes.shape({
    companyName: PropTypes.string,
    position: PropTypes.string,
    companyURL: PropTypes.string,
    hourPrice: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    offerDescription: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

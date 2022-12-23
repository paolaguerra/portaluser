import React from "react";

export const JobDescription = () => {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      alert("Your application was successful!", "success");
    });
  }

  return (
    <div>
      <div className="card text-left">
        <div className="card-header">Cerritos CA</div>
        <div className="card-body">
          <h5 className="card-title">Junior Software Developer</h5>
          <p className="card-text">
            We pride ourselves in our strong, upbeat work culture and dynamic
            startup feel. We are looking for new team members that are
            enthusiastic and willing to learn and grow with the company. We’re
            looking for a partially remote junior software developer who can
            help with developing scripts and tools to support our digital
            advertising, product, and supply chain teams. This is a starting
            position with very high potential for advancement and career growth!
          </p>
          <div id="liveAlertPlaceholder"></div>
          <button type="button" className="btn btn-primary" id="liveAlertBtn">
            Apply Now
          </button>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

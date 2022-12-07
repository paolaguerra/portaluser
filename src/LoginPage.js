import React, { useState } from "react";

export const LoginPage = () => {
  const [myEmail, setMyEmail] = useState("");
  const [myPass, setMyPass] = useState("");

  const cambiosDelInputEmail = (event) => {
    setMyEmail(event.target.value);
  };

  const cambiosDelInputPass = (event) => {
    setMyPass(event.target.value);
  };

  const handleSave = () => {
    const userEmail = localStorage.getItem("email");
    let emailParaLS = "";

    if (userEmail === null) {
      emailParaLS = myEmail;
    } else {
      emailParaLS = userEmail + ", " + myEmail;
    }

    console.log(emailParaLS);
    setMyEmail("");

    localStorage.setItem("email", emailParaLS);

    const userPass = localStorage.getItem("password");
    let passParaLS = "";

    if (userPass === null) {
      passParaLS = myPass;
    } else {
      passParaLS = userPass + ", " + myPass;
    }

    console.log(passParaLS);
    setMyPass("");

    localStorage.setItem("password", passParaLS);
  };

  return (
    <div className="contenedor-login">
      <div className="login">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={myEmail}
            onChange={cambiosDelInputEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={myPass}
            onChange={cambiosDelInputPass}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={handleSave} type="buttom" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

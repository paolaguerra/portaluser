import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => { 
  const [myEmail, setMyEmail] = useState("");
  const [myPass, setMyPass] = useState("");
  const [showEmailError, setEmailError] = useState(false);
  const [showPassError, setPassError] = useState(false);
  const navigate = useNavigate();

  const cambiosDelInputEmail = (event) => {
    if (event.target.value !== "") {
      setEmailError(false);
    }

    setMyEmail(event.target.value);
  };

  const cambiosDelInputPass = (event) => {
    if (event.target.value !== "") {
      setPassError(false);
    }

    setMyPass(event.target.value);
  };

  const handleSave = () => {
    if (myEmail === "" || myPass === "") {
      if (myEmail === "") {
        setEmailError(true);
      }
      if (myPass === "") {
        setPassError(true);
      }

      return;
    }

    const userEmail = window.localStorage.getItem("email");
    let emailParaLS = "";

    if (userEmail === null) {
      emailParaLS = myEmail;
    } else {
      emailParaLS = userEmail + ", " + myEmail;
    }

    window.localStorage.setItem("email", emailParaLS);

    const userPass = window.localStorage.getItem("password");
    let passParaLS = "";

    if (userPass === null) {
      passParaLS = myPass;
    } else {
      passParaLS = userPass + ", " + myPass;
    }

    window.localStorage.setItem("password", passParaLS);
    window.dispatchEvent(new Event("storage"));

    // Redirect to the user profile page:

    navigate("/userprofile");
  };

  return (
    <>
    <h1 className="welcome-login">Welcome Back!</h1>
    <p className="p-login">Are you ready to take the next step?</p>
      <div>
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
              {showEmailError && (
                <div className="email-error">email is required</div>
              )}
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
            {showPassError && (
              <div className="pass-error">Password is required</div>
            )}
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
            <button
              onClick={handleSave}
              type="buttom"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import TagsInput from "./TagsInput";

export const UserProfile = () => {
  const [myStatus, setMyStatus] = useState("");
  const [clicks, setMyClicks] = useState(0)

  const { email } = useContext(UserContext);

  const navigate = useNavigate();

  const onLsClicks = () => {
    // When local storage changes, dump the list to
    // the console.
    setMyClicks(window.localStorage.getItem("clicks"));
  };

  useEffect(() => {
    onLsClicks();

    window.addEventListener("storage", onLsClicks);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsClicks);
    };
    return cleanUp;
  }, []);

  const logOut = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("status");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const cambiosDelStatus = (event) => {
    const newSelectedValue = event.target.value;
    setMyStatus(newSelectedValue);

    window.localStorage.setItem("status", newSelectedValue);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className="contenedor-primer-bloque">
        <div className="card user-profile">
          <div className="contenedor-user-profile">
            <h4>Hola {email}</h4>
            <p>Here is a glance of your activities</p>
            <button onClick={logOut} type="buttom" className="btn btn-primary">
              Log out
            </button>
          </div>
        </div>

        <div className="card user-status">
          <div className="contenedor-user-status">
            <h4>Job Search Status</h4>
            <select
              onChange={cambiosDelStatus}
              className="form-select job-status"
              aria-label="Default select example"
              value={myStatus}
            >
              <option>Status..</option>
              <option value="Actively interviewing 🚀">
                Actively interviewing 🚀
              </option>
              <option value="Loking for offers 🐑">Loking for offers 🐑</option>
              <option value="In a current job ✨">In a current job ✨</option>
              <option value="Loking for interviews 😢">
                Loking for interviews 😢
              </option>
              <option value="In a current job looking for a new offer 🙏">
                In a current job looking for a new offer 🙏{" "}
              </option>
              <option value="Unemployed 💔">Unemployed 💔</option>
            </select>
          </div>
        </div>

        <div className="card my-applies">
          <div className="contenedor-my-applies">
            <p>
              <b>Applied</b>
            </p>
            <h1>{clicks}</h1>
          </div>
        </div>

      <TagsInput></TagsInput>

      </div>
    </>
  );
};

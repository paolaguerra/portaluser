import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { StatusContext } from "./context/UserContext";

// const myFunc = (params) => {
//   const { isActive } = params;
//   let classCSS = "nav-link ";

//   if(isActive) {
//     classCSS = classCSS + " active"
//   }

//   return classCSS;
// };

export const Navbar = (props) => {
  const { status } = useContext(StatusContext);

  console.log(props);

  const [showLoginTab, setShowLoginTab] = useState(false);

  const cambiosDelNavBar = () => {
    if (
      window.localStorage.getItem("email") === null &&
      window.localStorage.getItem("password") === null
    ) {
      setShowLoginTab(true);
    } else {
      setShowLoginTab(false);
    }
  };

  useEffect(() => {
    cambiosDelNavBar();

    const onLsChange = () => {
      // When local storage changes, dump the list to
      // the console.
      console.log(window.localStorage.getItem("email"));
      cambiosDelNavBar();
    };

    window.addEventListener("storage", onLsChange);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsChange);
    };
    return cleanUp;
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Eazy Hire
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/jobs"
              >
                Jobs
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink> */}
              {showLoginTab === false && (
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/userprofile"
                >
                  User Portal
                </NavLink>
              )}
              {showLoginTab === true && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Profile
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">
                        <NavLink
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                          to="/login"
                        >
                          Manage Your Account
                        </NavLink>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <NavLink
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                          to="/jobalert"
                        >
                          Manage Job Alerts
                        </NavLink>
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <p className="status">Status: {status}</p>
        </div>
      </nav>
    </div>
  );
};

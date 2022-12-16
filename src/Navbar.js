import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// const myFunc = (params) => {
//   const { isActive } = params;
//   let classCSS = "nav-link ";

//   if(isActive) {
//     classCSS = classCSS + " active"
//   }

//   return classCSS;
// };

export const Navbar = (props) => {
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

  const onLsChange = () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(window.localStorage.getItem("email"));
    cambiosDelNavBar();
  };

  useEffect(() => {
    cambiosDelNavBar();

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
            Portal Web
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
              {showLoginTab === true && (
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
              {showLoginTab === false && (
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/userprofile"
                >
                  User Profile
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

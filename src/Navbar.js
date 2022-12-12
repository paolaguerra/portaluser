import React from "react";
import logo from "./img/logo.png";
import { Link, NavLink } from "react-router-dom";


// const myFunc = (params) => {
//   const { isActive } = params;
//   let classCSS = "nav-link ";

//   if(isActive) {
//     classCSS = classCSS + " active"
//   }

//   return classCSS;
// };


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Portal Web</Link>
          <img className="logo" alt="logo" src={logo}></img>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink
                    className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/">
                    Home
                </NavLink>

                <NavLink
                    className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/about">
                    About
                </NavLink>

                <NavLink
                    className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/login">
                    Login
                </NavLink>
                <NavLink
                    className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/userprofile">
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
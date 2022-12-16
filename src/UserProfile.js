import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const UserProfile = () => {
  const { email } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };
  return (
    <div className="user-profile">
      <h4>Hola {email}</h4>
      <button onClick={logOut} type="buttom" className="btn btn-primary">
        Log out
      </button>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <div className="user-profile">
      <h3>Hola User Profile</h3>
      <button onClick={logOut} type="buttom" className="btn btn-primary">
        Log out
      </button>
    </div>
  );
};

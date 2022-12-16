import { UserContext } from "./UserContext";
import React, { useEffect, useState } from "react";

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  const onLsChange = () => {
    // When local storage changes, dump the list to
    // the console.
    setEmail(window.localStorage.getItem("email"));
  };

  useEffect(() => {
    onLsChange();

    window.addEventListener("storage", onLsChange);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsChange);
    };
    return cleanUp;
  }, []);

  return (
    <UserContext.Provider value={{ email }}>{children}</UserContext.Provider>
  );
};

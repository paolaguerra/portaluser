import { useState, useEffect } from "react";
import { StatusContext } from "./UserContext";

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState("");

  const onLsChangeStatus = () => {
    // When local storage changes, dump the list to
    // the console.
    setStatus(window.localStorage.getItem("status"));
  };

  useEffect(() => {
    onLsChangeStatus();

    window.addEventListener("storage", onLsChangeStatus);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsChangeStatus);
    };
    return cleanUp;
  }, []);

  return (
    <StatusContext.Provider value={{ status }}>
      {children}
    </StatusContext.Provider>
  );
};

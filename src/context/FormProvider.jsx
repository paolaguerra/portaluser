import { FormContext } from "./UserContext";
import { useState, useEffect } from "react";

export const FormProvider = ({ children }) => {
  const [companyLS, setCompanyLS] = useState("");
  const [emailformLS, setEmailformLS] = useState("");

  const onLsChangeCompanyName = () => {
    // When local storage changes, dump the list to
    // the console.
    setCompanyLS(window.localStorage.getItem("companyname"));
  };

  useEffect(() => {
    onLsChangeCompanyName();

    window.addEventListener("storage", onLsChangeCompanyName);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsChangeCompanyName);
    };
    return cleanUp;
  }, []);

  const onLsChangeEmail = () => {
    // When local storage changes, dump the list to
    // the console.
    setEmailformLS(window.localStorage.getItem("emailform"));
  };

  useEffect(() => {
    onLsChangeEmail();

    window.addEventListener("storage", onLsChangeEmail);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsChangeEmail);
    };
    return cleanUp;
  }, []);

  return (
    <FormContext.Provider value={{ companyLS, emailformLS }}>
      {children}
    </FormContext.Provider>
  );
};

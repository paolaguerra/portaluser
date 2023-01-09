import { FormContext } from "./UserContext";
import { useState, useEffect } from "react";

export const FormProvider = ({ children }) => {
  const [pendingJobLS, setPendingJobLS] = useState(null);

  const onLsChangePendingJob = () => {
    const stringValue = window.localStorage.getItem("pendingJob");
    setPendingJobLS(JSON.parse(stringValue));
  };

  useEffect(() => {
    onLsChangePendingJob();

    window.addEventListener("storage", onLsChangePendingJob);

    const cleanUp = () => {
      window.removeEventListener("storage", onLsChangePendingJob);
    };
    return cleanUp;
  }, []);

  return (
    <FormContext.Provider value={{ pendingJobLS }}>
      {children}
    </FormContext.Provider>
  );
};

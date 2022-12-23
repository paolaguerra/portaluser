import { Route, Routes } from "react-router-dom";
import { Jobs } from "./Jobs";
import { UserProvider } from "./context/UserProvider";
import { SearchJobPage } from "./SearchJobPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";
import { JobAlert } from "./JobAlert";
import { Form } from "./Form";
import { StatusProvider } from "./context/StatusProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <StatusProvider>
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={<SearchJobPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobalert" element={<JobAlert />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </StatusProvider>
    </UserProvider>
  );
};

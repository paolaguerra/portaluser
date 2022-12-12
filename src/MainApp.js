import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";

export const MainApp = () => {
  return (
    <div>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/userprofile" element={ <UserProfile /> } />
      </Routes>
    </div>
  );
};

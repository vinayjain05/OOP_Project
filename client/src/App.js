import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/UserOnboarding/Login";
import Signup from "./components/UserOnboarding/Signup";
import Navbar from "./components/Navbar";
import PatientDashboard from "./components/PatientDashboard/PatDash";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import Otp from "./components/UserOnboarding/Otp";
import SignupDoc from "./components/UserOnboarding/SignupDoc";
import SignupPat from "./components/UserOnboarding/SignupPat";

function App() {
  const [currentPage, setCurrentPage] = useState(true);

  let handleActivePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        component={() => <Home pageActive={handleActivePage} />}
      />

      {currentPage === true ? <Navbar /> : ""}

      <Route
        path="/login"
        exact
        component={() => <Login pageActive={handleActivePage} />}
      />
      <Route
        path="/signup"
        exact
        component={() => <Signup pageActive={handleActivePage} />}
      />
      <Route
        path="/otp"
        exact
        component={() => <Otp pageActive={handleActivePage} />}
      />
      <Route
        path="/signupdoc"
        exact
        component={() => <SignupDoc pageActive={handleActivePage} />}
      />
      <Route
        path="/signuppat"
        exact
        component={() => <SignupPat pageActive={handleActivePage} />}
      />
      <Route
        path="/patdash"
        exact
        component={() => (
          <PatientDashboard
            {...{
              name: "Subrakanta Smith",
              specialization: "NEUROLOGIST",
              education: "MBBS, MD in Pulmonology",
              experience: "7 years",
              location: "Apollo, Bangalore",
              doctor: true,
            }}
          />
        )}
      />
      <Route
        path="/docdash"
        exact
        component={() => (
          <DoctorDashboard
            {...{
              name: "Subrakanta Smith",
              specialization: "NEUROLOGIST",
              education: "MBBS, MD in Pulmonology",
              experience: "7 years",
              location: "Apollo, Bangalore",
              doctor: true,
            }}
          />
        )}
      />
    </Router>
  );
}

export default App;

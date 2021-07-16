import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/UserOnboarding/Login";
import Signup from "./components/UserOnboarding/Signup";
import Navbar from "./components/Navbar";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
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
      <Route path="/" exact component={() => <Home />} />

      {currentPage === true ? <Navbar /> : ""}

      <Route path="/login" exact component={() => <Login />} />
      <Route path="/signup" exact component={() => <Signup />} />
      <Route path="/otp" exact component={() => <Otp />} />
      <Route path="/signupdoc" exact component={() => <SignupDoc />} />
      <Route path="/signuppat" exact component={() => <SignupPat />} />
      <Route
        path="/patdash"
        exact
        component={() => (
          <PatientDashboard
            {...{
              name: "Subrakanta Smit",
              specialization: "NEUROLOGIST",
              education: "MBBS, MD in Pulmonology",
              experience: "7 years",
              location: "Apollo, Bangalore",
              doctor: true,
              pageActive: handleActivePage,
              appointment: "date"
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
              pageActive: handleActivePage,
            }}
          />
        )}
      />
    </Router>
  );
}

export default App;

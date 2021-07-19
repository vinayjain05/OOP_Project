import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/UserOnboarding/Login";
import Signup from "./components/UserOnboarding/Signup";
// import Navbar from "./components/Navbar";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import Otp from "./components/UserOnboarding/Otp";
import SignupDoc from "./components/UserOnboarding/SignupDoc";
import SignupPat from "./components/UserOnboarding/SignupPat";
import BookingPage from "./components/BookingPage/Bookingpage";
import { withRouter } from "react-router";
import ProtectedRoute from "./Protected.Route";

function App() {
  const [currentPage, setCurrentPage] = useState(true);

  let handleActivePage = (page) => {
    setCurrentPage(page);
    // console.log(page);
  };

  return (
    <Switch>
      <Route path="/" exact component={() => <Home />} />

      {/* {currentPage === true ? <Navbar /> : ""} */}

      <Route path="/login" exact component={() => <Login />} />
      <Route path="/signup" exact component={() => <Signup />} />
      <ProtectedRoute path="/otp" exact component={Otp} />
      <ProtectedRoute path="/signupdoc" exact component={SignupDoc} />
      <ProtectedRoute path="/signuppat" exact component={SignupPat} />
      <ProtectedRoute
        path="/patdash"
        exact
        props={{
          name: "Subrakanta Smith",
          age: "25",
          address: "Bangalore",
          gender: "Male",
          medicalHistory: "Medical History",
          doctor: false,
          id: "",
          pageActive: handleActivePage,
        }}
        component={PatientDashboard}
      />
      <ProtectedRoute
        path="/docdash"
        exact
        props={{
          name: "Subrakanta Smith",
          specialization: "NEUROLOGIST",
          education: "MBBS, MD in Pulmonology",
          experience: "7 years",
          address: "Apollo, Bangalore",
          doctor: true,
          id: "",
          pageActive: handleActivePage,
        }}
        component={DoctorDashboard}
      />
      <ProtectedRoute
        path="/booking"
        exact
        props={{
          doctor: true,
          pageActive: handleActivePage,
        }}
        component={BookingPage}
      />
    </Switch>
  );
}

export default withRouter(App);

// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/UserOnboarding/Login";
import Otp from "./components/UserOnboarding/Otp";
import PatDash from "./components/PatientDashboard/PatDash";
import Signup from "./components/UserOnboarding/Signup";
import SignupDoc from "./components/UserOnboarding/SignupDoc";
import SignupPat from "./components/UserOnboarding/SignupPat";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/otp" exact component={Otp} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/signupdoc" exact component={SignupDoc} />
      <Route path="/signuppat" exact component={SignupPat} />      
      <Route path="/patdash" exact component={PatDash} />
    </Router>
  );
}

export default App;

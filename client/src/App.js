// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/UserOnboarding/Login";
import PatDash from "./components/PatientDashboard/PatDash";
import Signup from "./components/UserOnboarding/Signup";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/patdash" exact component={PatDash} />
      <Route path="/signup" exact component={Signup} />
    </Router>
  );
}

export default App;

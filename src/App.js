// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;

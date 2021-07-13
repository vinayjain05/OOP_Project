import './App.css';
import Login from  './pages/Login/Login.js'
import Otp from  './pages/Otp/Otp.js'
import Signup from  './pages/Signup/Signup.js'
import SignupPat from  './pages/SignupPat/SignupPat.js'
import SignupDoc from  './pages/SignupDoc/SignupDoc.js'
import { BrowserRouter, Switch,Route } from 'react-router-dom';

function App() {
  return (
      <div>
      <Login></Login>
      <Signup></Signup>
      <Otp></Otp>
      <SignupPat></SignupPat>

    </div> 
  );
}

export default App;

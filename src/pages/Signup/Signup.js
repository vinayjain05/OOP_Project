import React from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import logo from "../../images/logo.png";
import styles from './Signup.module.css';

export default class Signup extends Component {
   render() {
      return (
      <React.Fragment> 
         <div className={styles.signup}>
            <div class={styles.signupbgbox}>
               <div class={styles.signuplogo}>
                  <img src={logo} class ={styles.signuplogo} alt='logo'/>
               </div>
               <div class={styles.heading}>Sign-up</div>
               <div class={styles.descr}>Create your ScheDoc </div>
               <div><form class={styles.signupform}>
                  <input type="text" class={styles.uname} name="uname" placeholder="Username"/><br/><br/>
                  <input type="text" class={styles.email} name="email" placeholder="Email"/><br/><br/>
                  <input type="tel" class={styles.phone} name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number" /><br/><br/>
                  <input type="password" id="password1" name="password1" placeholder="Password"/><br/><br/>
                  <input type="password" id="password2" name="password2" placeholder="Retype Password"/><br/><br/><br/>
                  <div class="radio"><input type="radio" id="patient" name="type" value="patient"/><label for="patient">Patient</label></div>
                  <div class="radio"><input type="radio" id="doctor" name="type" value="doctor"/><label for="doctor">Doctor</label></div>
                  
            <button type="button">Login</button>
            
            </form></div>
               <div className={styles.signupor}>OR</div>
               <button type="button" class={styles.google}> Sign up with google</button>
               <div className={styles.back}> &lt;Back</div>
            </div>
         </div>
      </React.Fragment>
  );
}}

ReactDOM.render(<Signup/> ,document.getElementById('root'))

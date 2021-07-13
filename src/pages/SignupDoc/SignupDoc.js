import React from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import logo from "../../images/logo.png";

import styles from './SignupDoc.module.css';
export default class SignupDoc extends Component {
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
               <input type="text" class={styles.hospital} name="hospital" placeholder="Specialization"/><br/><br/>
                  <input type="text" class={styles.years} name="years" placeholder="Years of experience"/><br/><br/>
                  <input type="text" class={styles.edu} name="edu" placeholder="Highest Level of Education"/><br/><br/>
                  <input type="text" class={styles.hospital} name="hospital" placeholder="Hospital"/><br/><br/>
                  <input type="text" class={styles.hospitaladd} name="hospitaladd" placeholder="Hospital Address"/><br/><br/>
               
                  <button type="button" >Login</button>
            
            </form></div>
               <div className={styles.signupor}>OR</div>
               <button type="button" class={styles.google}> Sign up with google</button>
               <div className={styles.back}> &lt;Back</div>
            </div>
         </div>
      </React.Fragment>
  );
}}
ReactDOM.render(<SignupDoc/> ,document.getElementById('root'))
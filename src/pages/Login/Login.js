import React from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import styles from './Login.module.css';
import logo from "../../images/logo.png";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
      <div className={styles.login}>
            <div className={styles.bgbox}>
              <div className={styles.logo}>
                <img src={logo} className ={styles.logo} alt='logo'/>
              </div>
              <div className={styles.heading}>Login</div>
              <div className={styles.descr}>Sign in to your account</div>
              <div><form className={styles.form}>
                <input type="text"name="uname" placeholder="Username"/><br/><br/><br/>
                <input type="password" name="password" placeholder="Password"/><br/><br/><br/>
                <button type={styles.button}>Login</button>
              </form></div>
              <div className={styles.or}>----------------OR----------------</div>
              <button type="button" className={styles.google}>Sign in with google</button>
              <div className={styles.back}> &lt;Back</div>
          </div>
        </div>
      </React.Fragment>
  );
}}

ReactDOM.render(<Login/> ,document.getElementById('root'))

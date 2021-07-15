import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "../../css/Login.module.css";
import logo from "../../svg/logo.png";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.login}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>Login</div>
            <div className={styles.descr}>Sign in to your account</div>
            <div>
              <form className={styles.form}>
                <div><input type="text" name="uname" placeholder="Username" /></div>
                <div><input type="password" name="password" placeholder="Password" /></div>
                <div><button><Link to="/otp" className={styles.button}>Login</Link></button></div>
              </form>
            </div>
            <div className={styles.or}>----------------OR----------------</div>
            <button type="button" className={styles.google}>
              <Link to="/otp" className={styles.button}>
                <img  alt="Google sign-in" src="./google.jfif" />
              </Link>
            </button>
            
            <div className={styles.back}> <Link to="/" className={styles.button}>&lt;Back</Link></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

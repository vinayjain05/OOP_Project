import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "../../css/otp.module.css";
import logo from "../../svg/logo.png";

export default class Otp extends Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/login"); // <--- The page you want to redirect your user to.
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.otp}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>OTP</div>
            <div className={styles.descr}>
              Please enter OTP recieved on the registered mobile number
            </div>
            <div>
              <form className={styles.form}>
                <input
                  type="number"
                  placeholder="123456"
                  min="100000"
                  max="999999"
                />
                <button>
                  <Link to="/patdash" className={styles.button}>&gt;</Link>
                </button>
              </form>
            </div>
            <div className={styles.back}>
              <Link to="/login" className={styles.button}>
                &lt;Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

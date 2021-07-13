import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import styles from "../../css/otp.module.css";
import logo from "../../svg/logo.png";

export default class Otp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.login}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>OTP</div>
            <div className={styles.descr}>
              Please enter OTP recieved on the <br></br>registered mobile number
            </div>
            <div>
              <form className={styles.form}>
                <input type="text" placeholder="123456" />
                <br />
                <br />
                <br />
                <button type={styles.button}>Login</button>
              </form>
            </div>
            <div className={styles.back}> &lt;Back</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

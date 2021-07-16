import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../svg/logo.png";
import styles from "../../css/Signup.module.css";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.signup}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>Sign-up</div>
            <div className={styles.descr}>Create your ScheDoc Account</div>
            <div>
              <form className={styles.form}>
                <div>
                  <input
                    type="text"
                    className={styles.uname}
                    name="uname"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className={styles.email}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    className={styles.phone}
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password1"
                    name="password1"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder="Retype Password"
                  />
                </div>
                <div>
                  <button>
                    <Link to="/signupdoc" className={styles.button}>
                      Doctor
                    </Link>
                  </button>
                  <button>
                    <Link to="/signuppat" className={styles.button}>
                      Patient
                    </Link>
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.or}>----------------OR----------------</div>
            <button type="button" className={styles.google}>
              <Link to="/otp" className={styles.button}>
                <img alt="Google sign-in" src="./google.jfif" />
              </Link>
            </button>
            <div className={styles.back}>
              {" "}
              <Link to="/" className={styles.button}>
                &lt;Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

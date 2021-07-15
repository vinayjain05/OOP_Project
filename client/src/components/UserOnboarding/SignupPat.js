import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../svg/logo.png";
import styles from "../../css/SignupPat.module.css";
import { Link } from "react-router-dom";

export default class SignupPat extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.signuppat}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>Sign-up</div>
            <div className={styles.descr}>Create your ScheDoc as a Patient</div>
            <div>
              <form class={styles.form}>
                <div>
                  <input
                    type="text"
                    className={styles.gender}
                    name="gender"
                    placeholder="Gender(dropdown)"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className={styles.age}
                    name="age"
                    placeholder="Age"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.add}
                    name="add"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.hist}
                    name="hist"
                    placeholder="Medical history"
                  />
                </div>
                <div>
                  <button>
                    <Link to="/patdash" className={styles.button}>
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
              <Link to="/signup" className={styles.button}>
                &lt;Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

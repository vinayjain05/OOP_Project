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
              <form className={styles.form}>
                <div>
                  <input
                    type="text"
                    className={styles.gender}
                    name="gender"
                    placeholder="Gender" 
                    pattern="M|F|m|f"
                    title="Please enter M or F"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className={styles.age}
                    name="age"
                    placeholder="Age"
                    pattern="[0-9]{2}"
                    title="Please enter valid age" 
                    required                   
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.add}
                    name="add"
                    placeholder="Address"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.hist}
                    name="hist"
                    placeholder="Medical history"
                    required
                  />
                </div>
                <div>
                  <button className={styles.button} >
                      Patient
                  </button>
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../svg/logo.png";
import styles from "../../css/SignupPat.module.css";

export default class SignupPat extends Component {
  componentDidMount() {
    this.props.pageActive(false);
  }
  componentWillUnmount() {
    this.props.pageActive(true);
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.signup}>
          <div className={styles.signupbgbox}>
            <div className={styles.signuplogo}>
              <img src={logo} className={styles.signuplogo} alt="logo" />
            </div>
            <div className={styles.heading}>Sign-up</div>
            <div className={styles.descr}>Create your ScheDoc</div>
            <div>
              <form class={styles.signupform}>
                <input
                  type="text"
                  className={styles.gender}
                  name="gender"
                  placeholder="Gender(dropdown)"
                />
                <br />
                <br />
                <input
                  type="text"
                  className={styles.age}
                  name="age"
                  placeholder="Age"
                />
                <br />
                <br />
                <input
                  type="text"
                  className={styles.add}
                  name="add"
                  placeholder="Address"
                />
                <br />
                <br />
                <input
                  type="text"
                  className={styles.hist}
                  name="hist"
                  placeholder="Medical history"
                />
                <br />
                <br />
                <button type="button">Login</button>
              </form>
            </div>
            <div className={styles.signupor}>OR</div>
            <button type="button" className={styles.google}>
              {" "}
              Sign up with google
            </button>
            <div className={styles.back}> &lt;Back</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

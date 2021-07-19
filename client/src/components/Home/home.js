import React, { Component } from "react";
import HomePicture from "../../svg/video.mp4";
// import { ReactComponent as Door } from "../../svg/door1.svg";
import styles from "../../css/home.module.css";
import { Link } from "react-router-dom";
import logo from "../../svg/logo.png";


export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.homeContainer}>
        <div className={styles.logo}>
            <img src={logo} className={styles.logo} alt="logo" />
          </div>
          <div className={styles.homedocsContainer}>
          <video src={HomePicture} autoPlay loop muted alt="loading..." />
          </div>
          <div className={styles.board}>
            <div className={styles.curtain}>{/* <Door /> */}</div>
            <div className={styles.dias}>
              <div className={styles.introText}>
                <h1>Looking for your HealthCare partner?</h1>
                <br />
                <span>We are here for you!</span>
              </div>
              <div className={styles.loginButtons}>
                <Link to="/signup" className={styles.signupbtn}>
                  <button>
                    <p>Sign up</p>
                  </button>
                </Link>
                <Link to="/login" className={styles.loginbtn}>
                  <button>
                    <p>Login</p>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.curtain}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

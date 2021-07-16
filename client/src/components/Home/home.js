import React, { Component } from "react";
import { ReactComponent as HomePicture } from "../../svg/homedocs.svg";
import { ReactComponent as Door } from "../../svg/door1.svg";
import styles from "../../css/home.module.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.homeContainer}>
          <div className={styles.homedocsContainer}>
            <HomePicture className={styles.landingsvg} />
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
                <button>
                  <Link to="/signup" className={styles.signupbtn}>
                    Sign up
                  </Link>
                </button>
                <button>
                  <Link to="/login" className={styles.loginbtn}>
                    Login
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.curtain}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

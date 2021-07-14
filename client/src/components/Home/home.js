import React, { Component } from "react";
import { ReactComponent as HomePicture } from "../../svg/homedocs.svg";
import { ReactComponent as Door } from "../../svg/door1.svg";
import styles from "../../css/home.module.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    this.props.pageActive(false);
  }
  componentWillUnmount() {
    this.props.pageActive(true);
  }
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
                <Link to="/signup" className={styles.signupbtn}>
                  <button>Sign up</button>
                </Link>
                <Link to="/login" className={styles.loginbtn}>
                  <button>Login</button>
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

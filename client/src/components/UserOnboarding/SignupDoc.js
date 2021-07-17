import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../svg/logo.png";
import { Link } from "react-router-dom";
import styles from "../../css/SignupDoc.module.css";

export default class SignupDoc extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      phone:"",
      password: ""
    };
    
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.signup}>
          <div class={styles.bgbox}>
            <div class={styles.logo}>
              <img src={logo} class={styles.logo} alt="logo" />
            </div>
            <div class={styles.heading}>Sign-up</div>
            <div class={styles.descr}>
              Create your ScheDoc Account as a Doctor{" "}
            </div>
            <div>
              <form class={styles.form}>
                <div>
                  <input
                    type="text"
                    class={styles.hospital}
                    name="hospital"
                    placeholder="Specialization"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    class={styles.years}
                    name="years"
                    placeholder="Years of experience"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class={styles.edu}
                    name="edu"
                    placeholder="Highest Level of Education"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class={styles.hospital}
                    name="hospital"
                    placeholder="Hospital"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class={styles.hospitaladd}
                    name="hospitaladd"
                    placeholder="Hospital Address"
                    required
                  />
                </div>
                <div>
                  <button type="submit">
                    <Link to="/patdash" className={styles.button}>
                      Sign up
                    </Link>
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

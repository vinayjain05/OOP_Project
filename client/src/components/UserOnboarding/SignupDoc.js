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
      specialization: "",
      yearsofexperience: "",
      education:"",
      hospital: "",
      hospitaladdress: ""
    };
  }

  handleSpecializationChange = evt => {
    this.setState({ specialization: evt.target.value });
  }; 
  handleYearsChange = evt => {
    this.setState({ yearsofexperience: evt.target.value });
  };
  handlePhoneChange = evt => {
    this.setState({ education: evt.target.value });
  };
  handleHosChange = evt => {
    this.setState({ hospital: evt.target.value });
  };
  handleSubmit = () => {
    const { username,email, phone, password } = this.state;
    alert(` ${username} ${email } ${ phone} ${password}`);
  };
  
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
                    type="text"
                    class={styles.years}
                    name="years"
                    placeholder="Years of experience"
                    required
                    pattern="[0-9]{2}"
                    title="Please enter years of experience between 0-99"
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
                  <button type="submit" >
                      Sign up
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

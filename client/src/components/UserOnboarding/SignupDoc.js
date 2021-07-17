import React from "react";
import { Component } from "react";
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
  handleEducationChange = evt => {
    this.setState({ education: evt.target.value });
  };
  handleHosptialChange = evt => {
    this.setState({ hospital: evt.target.value });
  };
  
    handleHosptialAddressChange = evt => {
    this.setState({ hospitaladdress: evt.target.value });
  };
  handleSubmit = () => {
    const {  specialization,
    yearsofexperience ,
    education,
    hospital,
    hospitaladdress} = this.state;
    //alert(` ${specialization} ${yearsofexperience } ${education} ${hospital} ${hospitaladdress}`);
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
              <form class={styles.form}  onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    class={styles.hospital}
                    name="hospital"
                    placeholder="Specialization"
                    required
                    value={this.state.specialization}
                    onChange={this.handleSpecializationChange} 
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
                    value={this.state.yearsofexperience}
                    onChange={this.handleYearsChange}
                    />
                </div>
                <div>
                  <input
                    type="text"
                    class={styles.edu}
                    name="edu"
                    placeholder="Highest Level of Education"
                    required
                    value={this.state.education}
                    onChange={this.handleEducationChange}

                  />
                </div>
                <div>
                  <input
                    type="text"
                    class={styles.hospital}
                    name="hospital"
                    placeholder="Hospital"
                    required
                    value={this.state.hospital}
                    onChange={this.handleHosptialChange}

                  />
                </div>
                <div>
                  <input
                    type="text"
                    class={styles.hospitaladd}
                    name="hospitaladd"
                    placeholder="Hospital Address"
                    required
                    value={this.state.hospitaladdress}
                    onChange={this.handleHosptialAddressChange}

                  />
                </div>
                <div>
                  <button type="submit" onClick= {this.submitForm} >
                      Sign up
                  </button>
                </div>
              </form>
              <div className={styles.back}>
              {" "}
              <Link to="/signup" className={styles.button}>
                &lt;Back
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

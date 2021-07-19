import React from "react";
import { Component } from "react";
import logo from "../../svg/logo.png";
import { Link } from "react-router-dom";
import styles from "../../css/SignupDoc.module.css";
import Auth from "../../Auth";
import { withRouter } from "react-router";
import axios from "axios";

class SignupDoc extends Component {
  constructor() {
    super();
    this.state = {
      specialization: "",
      yearsofexperience: "",
      education: "",
      hospital: "",
      hospitaladdress: "",
      isDoctor: true,
    };
  }

  componentDidMount() {
    this.setState({ ...this.props.location.state });
  }

  handleSpecializationChange = (evt) => {
    this.setState({ specialization: evt.target.value });
  };
  handleYearsChange = (evt) => {
    this.setState({ yearsofexperience: evt.target.value });
  };
  handleEducationChange = (evt) => {
    this.setState({ education: evt.target.value });
  };
  handleHosptialChange = (evt) => {
    this.setState({ hospital: evt.target.value });
  };

  handleHosptialAddressChange = (evt) => {
    this.setState({ hospitaladdress: evt.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    let userDetails = { ...this.state };
    console.log(userDetails);
    await axios
      .post(
        "http://oopbackend.herokuapp.com/otpgenerator/",
        { email: this.state.email, isLogin: false },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        Auth.signup(true);
        console.log(res);
        this.props.history.push({
          pathname: "/otp",
          state: { ...this.state, otp: res.data },
          from: "/signupdoc",
        });
        // this.setState({ otp: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.signup}>
          <div className={styles.logo}>
            <img
              src={logo}
              className={styles.logo}
              alt="logo"
              onClick={() => {
                this.props.history.push({
                  pathname: "/",
                });
              }}
            />
          </div>
          <div className={styles.bgbox}>
            <div className={styles.heading}>Sign-up</div>
            <div className={styles.descr}>
              Create your ScheDoc Account as a Doctor{" "}
            </div>
            <div>
              <form className={styles.form} onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    className={styles.hospital}
                    name="hospital"
                    placeholder="Specialization"
                    required
                    value={this.state.specialization}
                    onChange={this.handleSpecializationChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className={styles.years}
                    name="years"
                    placeholder="Years of experience"
                    required
                    pattern="[0-9]"
                    title="Please enter years of experience between 0-99"
                    value={this.state.yearsofexperience}
                    onChange={this.handleYearsChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.edu}
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
                    className={styles.hospital}
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
                    className={styles.hospitaladd}
                    name="hospitaladd"
                    placeholder="Hospital Address"
                    required
                    value={this.state.hospitaladdress}
                    onChange={this.handleHosptialAddressChange}
                  />
                </div>
                <div>
                  <button type="submit" onClick={this.submitForm}>
                    Sign up
                  </button>
                </div>
              </form>
              <div className={styles.back}>
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

export default withRouter(SignupDoc);

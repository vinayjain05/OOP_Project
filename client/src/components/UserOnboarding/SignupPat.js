import React from "react";
import { Component } from "react";
import logo from "../../svg/logo.png";
import styles from "../../css/SignupPat.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import Auth from "../../Auth";
import Cookies from "js-cookie";
import CSRFToken from "./Csrftoken";

class SignupPat extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      age: "",
      address: "",
      medicalhistory: "",
    };
  }

  async componentDidMount() {
    let csrftoken = "";
    // await axios
    //   .get("https://oopbackend.herokuapp.com/csrf_cookie", {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     csrftoken = res.data.csrfToken;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.setState({ ...this.props.location.state, csrftoken: csrftoken });
  }
  handleGenderChange = (evt) => {
    this.setState({ gender: evt.target.value });
  };
  handleAgeChange = (evt) => {
    this.setState({ age: evt.target.value });
  };
  handleAddressChange = (evt) => {
    this.setState({ address: evt.target.value });
  };
  handleMedicalHistoryChange = (evt) => {
    this.setState({ medicalhistory: evt.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.xsrfHeaderName = "X-CSRFToken";
    await axios
      .post(
        "http://oopbackend.herokuapp.com/otpgenerator/",
        { email: "parinavputhran@gmail.com", isLogin: false },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        Auth.login(true);
        console.log(res);
        this.setState({ otp: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push({
      pathname: "/otp",
      state: this.state,
      from: "/signuppat",
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.signuppat}>
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
            <div className={styles.descr}>Create your ScheDoc as a Patient</div>
            <div>
              <form
                className={styles.form}
                onSubmit={this.handleSubmit}
                // method="post"
                // action="http://oopbackend.herokuapp.com/otpgenerator"
              >
                {/* <CSRFToken /> */}
                <div>
                  <input
                    type="text"
                    className={styles.gender}
                    name="gender"
                    placeholder="Gender (Male or Female)"
                    // pattern="M|F|m|f"
                    title="Please enter M or F"
                    required
                    value={this.state.gender}
                    onChange={this.handleGenderChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className={styles.age}
                    name="age"
                    placeholder="Age"
                    pattern="[0-9]"
                    title="Please enter valid age"
                    required
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.add}
                    name="add"
                    placeholder="Address"
                    required
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={styles.hist}
                    name="hist"
                    placeholder="Medical history"
                    value={this.state.medicalhistory}
                    onChange={this.handleMedicalHistoryChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={styles.button}
                    onClick={this.submitForm}
                  >
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

export default withRouter(SignupPat);

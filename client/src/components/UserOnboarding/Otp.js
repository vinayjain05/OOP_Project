import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/otp.module.css";
import logo from "../../svg/logo.png";
import axios from "axios";
import { withRouter } from "react-router";
import Auth from "../../Auth";

class Otp extends Component {
  state = { frompath: "/login", enteredOtp: "" };
  componentDidMount() {
    console.log(
      {
        frompath: this.props.location.from,
        ...this.props.location.state,
      },
      "otp",
      typeof this.props.location.from !== "undefined" &&
        this.props.location.from.length !== 0
    );

    console.log(this.state);
    if (
      typeof this.props.location.from !== "undefined" &&
      this.props.location.from.length !== 0
    )
      this.setState({
        frompath: this.props.location.from,
        ...this.props.location.state,
      });
  }
  handleOtpSubmit = async (event) => {
    event.preventDefault();

    // let data=null;

    let userDetails = {
      userName: this.state.username,
      name: this.state.username,
      email: this.state.email,
      mobile: this.state.phone,
      isDoctor: false,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,
      medicalHistory: this.state.medicalhistory,
    };

    let reguser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(userDetails, reguser);
    if (this.state.enteredOtp == this.state.otp) {
      await axios
        .post("https://oopbackend.herokuapp.com/registeruser/", reguser, {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((res) => {
          Auth.login(true);

          let pathname = this.state.isDoctor
            ? "https://oopbackend.herokuapp.com/registeruserdoc/"
            : "https://oopbackend.herokuapp.com/registeruserpat/";
          console.log(res);
          axios
            .post(pathname, userDetails)
            .then((res) => {
              console.log(res, "inside");
              if (this.state.isDoctor) {
                // this.setState({ slots: res.data });
              } else {
                axios
                  .get("https://oopbackend.herokuapp.com/registeruserdoc/")
                  .then((res) => {
                    console.log(res, "insidehere");
                    this.setState({ doctorData: res.data });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });

          // if (this.state.isDoctor)
          //   this.props.history.push({
          //     pathname: "/docdash",
          //     state: { ...this.state },
          //   });
          // else
          //   this.props.history.push({
          //     pathname: "/patdash",
          //     state: { ...this.state },
          //   });
        })
        .catch((err) => console.log(err, "here"));
    }
  };

  handleOtpChange = (event) => {
    this.setState({ enteredOtp: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.otp}>
          <div className={styles.logo}>
            <img src={logo} className={styles.logo} alt="logo" />
          </div>
          <div className={styles.bgbox}>
            <div className={styles.heading}>OTP</div>
            <div className={styles.descr}>
              Please enter OTP recieved on the registered mobile number
            </div>
            <div>
              <form className={styles.form} onSubmit={this.handleOtpSubmit}>
                <input
                  type="text"
                  placeholder="OTP"
                  pattern="^[0-9]{1,6}$"
                  title=" Should be 6 digits"
                  autoComplete="off"
                  value={this.state.enteredOtp}
                  onChange={this.handleOtpChange}
                  required
                />
                <button type="submit" className={styles.button}>
                  &gt;
                </button>
              </form>
            </div>
            <div className={styles.back}>
              <Link to={this.state.frompath} className={styles.button}>
                &lt;Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Otp);

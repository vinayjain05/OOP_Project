import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/Login.module.css";
import logo from "../../svg/logo.png";
import { withRouter } from "react-router";
import axios from "axios";
import Auth from "../../Auth";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (evt) => {
    this.setState({ username: evt.target.value });
  };

  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "http://oopbackend.herokuapp.com/loginuser/",
        {
          username: this.state.username,
          password: this.state.password,
          otpauth: false,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        // Auth.login(true);
        Auth.login(true);
        // this.setState({ otp: res.data });

        console.log(res, "here");
        axios
          .post(
            "http://oopbackend.herokuapp.com/otpgenerator/",
            {
              username: this.state.username,
              isLogin: true,
            },
            {
              headers: {
                accept: "application/json",
                "content-type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res, "login here");
            this.props.history.push({
              pathname: "/otp",
              state: { ...this.state, otp: res.data },
              from: "/login",
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        alert(`Incorrect Username or Password`);
      });
  };

  render() {
    const { username, password } = this.state;
    //const isEnabled = email.length > 0 && password.length > 0;
    const isEnabled = 1;
    return (
      <React.Fragment>
        <div className={styles.login}>
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
            <div className={styles.heading}>Login</div>
            <div className={styles.descr}>Sign in to your account</div>
            <div>
              <form className={styles.form} onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    placeholder="Full Name"
                    pattern="[0-9a-zA-Z]{6,}"
                    title="Minimum six characters of only numbers and letters"
                    value={this.state.username}
                    required
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div>
                  {/* <button
                    type="submit"
                    onClick={this.submitForm}
                    disabled={!isEnabled}
                  >
                    doc
                  </button> */}
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
            <div className={styles.or}>----------------OR----------------</div>
            <button type="button" className={styles.google}>
              <Link to="/otp" className={styles.button}>
                <img alt="Google sign-in" src="./google.jpg" />
              </Link>
            </button>
            <button type="button" className={styles.facebook}>
              <Link to="/otp" className={styles.button}>
                <img alt="Facebook sign-in" src="./facebookcircle.png " />
              </Link>
            </button>
            <div className={styles.back}>
              <Link to="/" className={styles.button}>
                &lt;Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);

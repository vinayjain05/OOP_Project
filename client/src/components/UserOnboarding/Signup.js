import React from "react";
import { Component } from "react";
import logo from "../../svg/logo.png";
import styles from "../../css/Signup.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Auth from "../../Auth";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
    };
  }

  componentDidMount() {
    Auth.signup(false);
  }

  handleUsernameChange = (evt) => {
    this.setState({ username: evt.target.value });
  };
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  };
  handlePhoneChange = (evt) => {
    this.setState({ phone: evt.target.value });
  };
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  };
  handleSubmit = async (event) => {
    const { username, email, phone, password } = this.state;
    event.preventDefault();
    console.log(this.state);
    // await axios
    //   .post(
    //     "https://oopbackend.herokuapp.com/registeruserpat",
    //     {
    //       email: email,
    //       isLogin: false,
    //     },
    // {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // }
    //   )
    //   .then((res) => {
    //     Auth.login(true);
    //     // this.setState({ doctorsDetails: res.data });
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let path =
      event.nativeEvent.submitter.name === "doctor"
        ? "/signupdoc"
        : "/signuppat";

    Auth.signup(true);

    this.props.history.push({
      pathname: path,
      state: this.state,
    });

    //alert(` ${username} ${email } ${ phone} ${password}`);
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
            <div className={styles.descr}>Create your ScheDoc Account</div>
            <div className={styles.warning}>
              This information cannot be editted later, please make sure your
              details are correct
            </div>
            <div>
              <form className={styles.form} onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    className={styles.uname}
                    name="uname"
                    placeholder="Full Name"
                    required
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className={styles.email}
                    name="email"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className={styles.phone}
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="Phone Number"
                    title="Please enter valid 10-digit phone number"
                    required
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password1"
                    placeholder="Password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6  ,}$"
                    title="Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6  ,}$"
                    title="Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
                    placeholder="Retype Password"
                    required
                  />
                </div>
                <div>
                  <button
                    name="doctor"
                    className={styles.userSelectBtn}
                    type="submit"
                    onClick={this.submitForm}
                  >
                    Doctor
                  </button>
                  <button
                    name="patient"
                    type="submit"
                    className={styles.userSelectBtn}
                    onClick={this.submitForm}
                  >
                    Patient
                  </button>
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

export default withRouter(Signup);

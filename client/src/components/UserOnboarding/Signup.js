import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../svg/logo.png";
import styles from "../../css/Signup.module.css";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      phone:"",
      password: ""
    };
  }

  handleUsernameChange = evt => {
    this.setState({ username: evt.target.value });
  }; 
  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };
  handlePhoneChange = evt => {
    this.setState({ phone: evt.target.value });
  };
  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };
  handleSubmit = () => {
    const { username,email, phone, password } = this.state;
    alert(` ${username} ${email } ${ phone} ${password}`);
  };

  render() {
    
    return (
      <React.Fragment>
        <div className={styles.signup}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>Sign-up</div>
            <div className={styles.descr}>Create your ScheDoc Account</div>
            <div>
              <form class={styles.form}  onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    className={styles.uname}
                    name="uname"
                    placeholder="Username"
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
                    type="text"
                    class={styles.phone}
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
                  <button type="submit" onClick= {this.submitForm}>
                    Doctor
                  </button>
                  <button type="submit" onClick= {this.submitForm}>
                    <Link to="/signuppat" className={styles.button}>
                      Patient
                    </Link>
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.or}>----------------OR----------------</div>
            <button type="button" className={styles.google}>
              <Link to="/otp" className={styles.button}>
                <img alt="Google sign-in" src="./google.jfif" />
              </Link>
            </button>
            <button type="button" className={styles.facebook}>
              <Link to="/otp" className={styles.button}>
                <img alt="Facebook sign-in" src="./facebook.png " />
              </Link>
            </button>
            <div className={styles.back}>
              {" "}
              <Link to="/signup" className={styles.button}>
                &lt;Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

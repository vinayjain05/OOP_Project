import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "../../css/Login.module.css";
import logo from "../../svg/logo.png";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleUsernameChange = evt => {
    this.setState({ username: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    alert(`Signed up with username: ${username} password: ${password}`);
  };
  

  render() { 
    const { username, password } = this.state;
//const isEnabled = email.length > 0 && password.length > 0;
    const isEnabled = 1;
    return (
     <React.Fragment>
        <div className={styles.login}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>Login</div>
            <div className={styles.descr}>Sign in to your account</div>
            <div>
              <form className={styles.form}  onSubmit={this.handleSubmit}>
                <div>
                  <input 
                 type="text"
                 name="username"
                 autocomplete="off"
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
                    autocomplete="off"
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                     />
                </div>
                <div>
                
                  <button type="submit" onClick= {this.submitForm}  disabled={!isEnabled}>
                    doc
                  </button>
                  <button type="submit" >
                    <Link to="/otp" className={styles.button} >
                      Patient Login
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

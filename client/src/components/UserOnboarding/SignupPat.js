import React from "react";
import { Component } from "react";
import logo from "../../svg/logo.png";
import styles from "../../css/SignupPat.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import Auth from "../../Auth";

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

  componentDidMount() {
    this.setState({ ...this.props.location.state });
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
    let userDetails = { ...this.state, isDoctor: false };
    console.log(userDetails);
    let authenticated = false;
    // await axios
    //   .post("/registeruser", userDetails)
    //   .then((res) => { Auth.login(true);
    //     this.setState({slots:res.data}).catch((err)=>{console.log(err)})
    //     console.log(res.data)});
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.signuppat}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>Sign-up</div>
            <div className={styles.descr}>Create your ScheDoc as a Patient</div>
            <div>
              <form className={styles.form} onSubmit={this.handleSubmit}>
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

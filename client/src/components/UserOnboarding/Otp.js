import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/otp.module.css";
import logo from "../../svg/logo.png";
import axios from "axios";
import { withRouter } from "react-router";

class Otp extends Component {
  state = { frompath: "/login" };
  componentDidMount() {
    if (
      typeof this.props.location.from !== "undefined" &&
      this.props.location.from.length !== 0
    )
      this.setState({ frompath: this.props.location.from });
  }
  submitForm(e) {
    e.preventDefault();
    // let data=null;
    // await axios
    //   .post("/loginuser", this.state)
    //   .then((res) => {Auth.login(true);
    // data=res.data
    //     this.setState({slots:res.data}).catch(err=>{
    // this.props.history.push("/login");
    // })
    //     console.log(res.data)});
    // <--- The page you want to redirect your user to.
    //  if(data.doctor===true)
    //   this.props.history.push({pathname:"/docdash", state: data,});
    // else
    //   this.props.history.push({pathname:"/patdash", state: data,});
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.otp}>
          <div className={styles.bgbox}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.heading}>OTP</div>
            <div className={styles.descr}>
              Please enter OTP recieved on the registered mobile number
            </div>
            <div>
              <form className={styles.form}>
                <input
                  type="text"
                  placeholder="OTP"
                  pattern="^[0-9]{1,6}$"
                  title=" Should be 6 digits"
                  autoComplete="off"
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

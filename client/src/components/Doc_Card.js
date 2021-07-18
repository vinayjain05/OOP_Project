import React, { Component } from "react";
import styles from "../css/doccard.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Card extends Component {
  componentDidMount() {
    // console.log(this.props);
    let val = !this.props.doctor
      ? document.getElementById("profile-card").classList.add(styles.patient)
      : "";
  }

  handleDoctorSelect = async () => {
    let doctorDetails = {
      name: this.props.name,
      specialization: this.props.specialization,
      education: this.props.education,
      experience: this.props.experience,
      userLocation: this.props.userLocation,
      id: this.props.id,
    };

    // await axios
    //   .post("/doctortt", this.props.location.doctorDetails.id)
    //   .then((res) => {
    //     this.setState({slots:res.data,originalSlots:res.data})
    //     console.log(res.data)});

    this.props.history.push({
      pathname: "/booking",
      state: doctorDetails,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div id="profile-card" className={styles.profileCard}>
          <div className={styles.image}>
            <img
              src="https://picsum.photos/200"
              className={styles.cardImage}
              alt=""
            />
          </div>
          <div className={styles.info}>
            <div>
              <h3 className={styles.nameHead}>{this.props.name}</h3>
              <div>{this.props.specialization}</div>
              <div>{this.props.education}</div>
              <div>{this.props.experience}</div>
              <div>{this.props.userLocation}</div>
              {!this.props.doctor ? (
                <div>
                  <button
                    type="button"
                    className={styles.bookaptbtn}
                    onClick={this.handleDoctorSelect}
                  >
                    <p>Book Appointment</p>
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Card);

import React, { Component } from "react";
import styles from "../css/doccard.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";

class Card extends Component {
  componentDidMount() {
    // console.log(this.props);
    let val = !this.props.doctor
      ? document.getElementById("profile-card").classList.add(styles.patient)
      : "";
  }

  handleDoctorSelect = async () => {
    let doctorDetails = {
      name: this.props.doctorDetails.name,
      userName: this.props.doctorDetails.userName,
      specialization: this.props.doctorDetails.specialization,
      education: this.props.doctorDetails.education,
      experience: this.props.doctorDetails.experience,
      hospitalName: this.props.doctorDetails.hospitalName,
      hospitalLocation: this.props.doctorDetails.hospitalLocation,
      id: this.props.doctorDetails.id,
    };

    // let bookingDetails = [];
    // await axios
    //   .get("https://oopbackend.herokuapp.com/bookslot/")
    //   .then((res) => {
    //     // this.setState({slots:res.data,originalSlots:res.data})
    //     bookingDetails = res.data;
    //     console.log(bookingDetails, "booking slot");
    //   })
    //   .catch((err) => console.log(err));

    // let slots = bookingDetails.filter((bookingDetail) => {
    //   if (bookingDetail.doc == doctorDetails.username)
    //     return bookingDetail.slot;
    // });

    // console.log(slots);
    this.props.history.push({
      pathname: "/booking",
      // state: { ...doctorDetails, slots },
      state: {
        doctorDetails: { ...doctorDetails },
        patientDetails: { ...this.props.patientDetails },
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div id="profile-card" className={styles.profileCard}>
          {/*<div className={styles.image}>
            <img
              src="https://picsum.photos/200"
              className={styles.cardImage}
              alt=""
            />
    </div>*/}
          <div className={styles.info}>
            <div>
              <h3 className={styles.nameHead}>
                {this.props.doctorDetails.name}
              </h3>
              <div>{this.props.doctorDetails.specialization}</div>
              <div>{this.props.doctorDetails.education}</div>
              <div>{this.props.doctorDetails.experience}</div>
              <div>{`${this.props.doctorDetails.hospitalName}, ${this.props.doctorDetails.hospitalLocation}`}</div>
              {!this.props.patientDetails.doctor ? (
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

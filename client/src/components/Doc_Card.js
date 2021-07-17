import React, { Component } from "react";
import styles from "../css/doccard.module.css";
import { Link } from "react-router-dom";

export default class Card extends Component {
  state = {};
  componentDidMount() {
    let val = !this.props.doctor
      ? document.getElementById("profile-card").classList.add(styles.patient)
      : "";

    this.setState({
      id: this.props.id,
      specialization: this.props.specialization,
      education: this.props.education,
      experience: this.props.experience,
      location: this.props.location,
      doctor: true,
    });
  }

  handleDoctorSelect = () => {};
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
                  <Link
                    to={{
                      pathname: "/booking",
                      state: {
                        test: `test`,
                      },
                    }}
                  >
                    <button
                      className={styles.bookaptbtn}
                      // onClick={this.handleDoctorSelect}
                    >
                      <p>Book Appointment</p>
                    </button>
                  </Link>
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

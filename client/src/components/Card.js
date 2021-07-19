import React, { Component } from "react";
import styles from "../css/card.module.css";

export default class Card extends Component {
  componentDidMount() {
    let val = !this.props.doctor
      ? document.getElementById("profile-card").classList.add(styles.patient)
      : "";
  }
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
              <div>{this.props.address}</div>
              {!this.props.doctor ? (
                <div>
                  <button className={styles.bookaptbtn}>
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

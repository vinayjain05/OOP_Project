import React, { Component } from "react";
import styles from "../css/patcard.module.css";

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
          {/*<div className={styles.image}>
            <img
              src="https://picsum.photos/200"
              className={styles.cardImage}
              alt=""
            />
    </div>*/}
          <div className={styles.info}>
            <div>
              <h3 className={styles.nameHead}>{this.props.name}</h3>
              <div>{this.props.age}</div>
              <div>{this.props.gender}</div>
              <div>{this.props.address}</div>
              <div>{this.props.medicalHistory}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

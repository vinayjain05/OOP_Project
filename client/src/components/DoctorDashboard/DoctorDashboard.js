import React, { Component } from "react";
import styles from "../../css/doctorDashboard.module.css";
import Timetable from "../../Timetable";

export default class DoctorDashboard extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    // let prop = { ...this.props };
    console.log(this.props.name);
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.docDashboard}>
          <div className={styles.docInfo}>
            <div className={styles.profileCard}>
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
                  <div>{this.props.location}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aptTab}>
            <Timetable />
            <div className={styles.refInfo}>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Available</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Unavailable</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Appointment Scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

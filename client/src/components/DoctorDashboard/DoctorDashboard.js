import React, { Component } from "react";
import styles from "../../css/doctorDashboard.module.css";
import Timetable from "../../Timetable";
import Card from "../Card";

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
            <Card {...this.props} />
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

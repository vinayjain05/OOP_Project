import React from "react";
import DocCard from "./DocCard";
import { Component } from "react";
import { TeamObjOne } from "./Data";
import styles from "../../css/PatientDashboard.module.css";

export default class PatientDashboard extends Component {
  componentDidMount() {
    this.props.pageActive(true);
  }
  componentWillUnmount() {
    this.props.pageActive(false);
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.usercard}>
          <div className={styles.userInfo}>
            <DocCard {...TeamObjOne} />
          </div>
          <div className={styles.text}>
            <div className={styles.heading}>
              <h1>Here’s a list of doctors available in your region</h1>
            </div>
            <div className={styles.subheading}>
              <div>
                Depending on availability, you can book an appointment with your
                preferred doctor for a time slot of <b>15 minutes.</b>
              </div>
              <div>
                For online appointments, the consultation fee is <b>₹100</b>
              </div>
              <div>
                For in-person appointments, the consultation fee is <b>₹500</b>
              </div>
            </div>
            <div className={styles.doccard}>
              <div className={styles.docInfo}>
                <DocCard {...TeamObjOne} />
              </div>
              <div className={styles.docInfo}>
                <DocCard {...TeamObjOne} />
              </div>
              <div className={styles.docInfo}>
                <DocCard {...TeamObjOne} />
              </div>
              <div className={styles.docInfo}>
                <DocCard {...TeamObjOne} />
              </div>
              <div className={styles.docInfo}>
                <DocCard {...TeamObjOne} />
              </div>
              <div className={styles.docInfo}>
                <DocCard {...TeamObjOne} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

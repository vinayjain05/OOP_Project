import React from "react";
import { Component } from "react";
import styles from "../../css/PatientDashboard.module.css";
import Card from "../Card";


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

        <div className={styles.docDashboard}>
          <div className={styles.patInfo}>
            <div className={styles.card}><Card {...this.props} /></div>
            <div className={styles.appInfo}>
            <div className={styles.appheading}> Appointments</div>
          </div>
          </div>
         
          <div className={styles.aptTab}>
          <div className={styles.heading}{...this.props.app}>
              <h1>Here’s a list of doctors available in your region</h1>
            </div>
            <div className={styles.subheading}>
              <div>
                Depending on availability, you can book an appointment with your
                preferred doctor for a time slot of <b>15 minutes.</b>
              </div>
              <div>
                For online appointments, the consultation fee is <b>₹500</b>
              </div>
              <div>
                For in-person appointments, the consultation fee is <b>₹1000</b>
              </div>
            </div>
            <div className={styles.doccard}>
              <div className={styles.docInfo}>
                {/*<DocCard {...TeamObjOne} />*/}
              <Card {...this.props} />
              </div>
              <div className={styles.docInfo}>
                {/*<DocCard {...TeamObjOne} />*/}
              <Card {...this.props} />
              </div>
              <div className={styles.docInfo}>
                {/*<DocCard {...TeamObjOne} />*/}
              <Card {...this.props} />
              </div>
              <div className={styles.docInfo}>
                {/*<DocCard {...TeamObjOne} />*/}
              <Card {...this.props} />
              </div>
              <div className={styles.docInfo}>
                {/*<DocCard {...TeamObjOne} />*/}
              <Card {...this.props} />
              </div>
              <div className={styles.docInfo}>
                {/*<DocCard {...TeamObjOne} />*/}
              <Card {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

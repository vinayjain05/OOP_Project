import React, { Component } from "react";
import styles from "../../css/bookingpage.module.css";
import Timetable from "../Timetable";
import Card from "../Card";

export default class BookingPage extends Component {
  state = {
    consultationSelect: false,
  };
  componentDidMount() {
    this.props.pageActive(true);
  }
  componentWillUnmount() {
    this.props.pageActive(false);
  }

  handleConsultationClick = (event) => {
    let val = this.state.consultationSelect
      ? [
          document
            .getElementById(this.state.consultationSelect)
            .classList.remove(styles.active),
          event.target.classList.add(styles.active),
          this.setState({ consultationSelect: event.target.id }),
        ]
      : [
          event.target.classList.add(styles.active),
          this.setState({ consultationSelect: event.target.id }),
        ];
  };

  handleTimeSlots = (slot) => {};
  render() {
    return (
      <React.Fragment>
        <div className={styles.bookingDashboard}>
          <div className={styles.docInfo}>
            <Card {...this.props} />
            <div className={styles.bookaptBtn}>
              <button
                id="videoconsultation"
                className={styles.consultationbtn}
                onClick={this.handleConsultationClick}
              >
                Video Consultation
              </button>
              <button
                id="inpersonconsultation"
                className={styles.consultationbtn}
                onClick={this.handleConsultationClick}
              >
                In-Person Consultation
              </button>
              <button className={styles.bookbtn}>Book Appointment</button>
            </div>
          </div>
          <div className={styles.aptTab}>
            <Timetable timeslots={this.handleTimeSlots} />
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

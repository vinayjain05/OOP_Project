import React, { Component } from "react";
import styles from "../../css/bookingpage.module.css";
import Timetable from "../Timetable";
import Card from "../Card";

export default class BookingPage extends Component {
  state = {
    consultationSelect: false,
    slots: new Array(48).fill(0),
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

  handleTimeSlots = (slots) => {
    // console.log(slots);
    let val = document
      .getElementById("bookbtn")
      .classList.contains(styles.active)
      ? slots.includes(true)
        ? ""
        : [
            document.getElementById("bookbtn").classList.remove(styles.active),
            document
              .getElementById("mandateinfo")
              .classList.remove(styles.slotavailable),
          ]
      : slots.includes(true)
      ? [
          document.getElementById("bookbtn").classList.add(styles.active),
          document
            .getElementById("mandateinfo")
            .classList.add(styles.slotavailable),
        ]
      : "";

    this.setState({ slots: slots });
  };
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
              <button id="bookbtn" className={styles.bookbtn}>
                Book Appointment
              </button>
            </div>
            <div id="mandateinfo" className={styles.madateinfo}>
              <span>&#8727;</span>
              <p>Please select the type of consultation and a slot</p>
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

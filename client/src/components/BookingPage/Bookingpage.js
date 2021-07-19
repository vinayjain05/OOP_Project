import React, { Component } from "react";
import styles from "../../css/bookingpage.module.css";
import Timetable from "../Timetable";
import Card from "../Card";
import BookingModal from "./Bookingmodal";
import { withRouter } from "react-router";
import axios from "axios";

class BookingPage extends Component {
  state = {
    consultationSelect: false,
    slots: new Array(48).fill(0),
    amount: null,
    active: false,
  };
  async componentDidMount() {
    this.props.pageActive(true);
    console.log({ ...this.props.location.state });
    this.setState({ doctorDetails: { ...this.props.location.state } });
    // await axios
    //   .post("/doctortt", this.props.location.state.id)
    //   .then((res) => {
    //     this.setState({slots:res.data})
    //     console.log(res.data)});
  }

  componentWillUnmount() {
    this.props.pageActive(false);
  }

  handleBooking = () => {
    let slots = [];
    this.state.slots.forEach((x, index) => {
      if (x == 1) {
        slots.push(index);
      }
    });

    if (slots.length !== 0 && this.state.consultationSelect) {
      let consultType =
        this.state.consultationSelect === "videoconsultation" ? true : false;
      let amountType = consultType ? 500 : 1000;
      this.setState({ amount: slots.length * amountType, active: true });

      let bookingDetails = {
        doctorID: "",
        consultationType: consultType,
        slots: slots,
      };
      console.log(bookingDetails);
    }
  };

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
    this.handleTimeSlots(this.state.slots);
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
      ? document
          .getElementById("videoconsultation")
          .classList.contains(styles.active) ||
        document
          .getElementById("inpersonconsultation")
          .classList.contains(styles.active)
        ? [
            document.getElementById("bookbtn").classList.add(styles.active),
            document
              .getElementById("mandateinfo")
              .classList.add(styles.slotavailable),
          ]
        : ""
      : "";
    this.setState({ slots: slots });
  };
  handleModalActive = (active) => {
    this.setState({ active: active });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.bookingDashboard}>
          <div className={styles.docInfo}>
            <Card {...this.state.doctorDetails} {...this.props} />
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
              <button
                id="bookbtn"
                className={styles.bookbtn}
                onClick={this.handleBooking}
              >
                Book Appointment
              </button>
            </div>
            <div id="mandateinfo" className={styles.madateinfo}>
              <p>Please select the type of consultation and choose a slot</p>
            </div>
          </div>
          <div className={styles.aptTab}>
            <Timetable
              busySlots={this.state.slots}
              timeslots={this.handleTimeSlots}
            />
            <div className={styles.refInfo}>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Available</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>In progress(unconfirmed)</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Unavailable</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Doctor Busy</span>
              </div>
            </div>
          </div>
        </div>
        <BookingModal
          active={this.state.active}
          modalActive={this.handleModalActive}
          amount={this.state.amount}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(BookingPage);

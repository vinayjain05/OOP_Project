import React, { Component } from "react";
import styles from "../../css/bookingpage.module.css";
import Timetable from "../Timetable";
import Card from "../Card";

export default class BookingPage extends Component {
  state = {
    consultationSelect: false,
    slots: new Array(48).fill(0),
    value: "",
    amount: null,
  };
  componentDidMount() {
    this.props.pageActive(true);
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
    let consultType =
      this.state.consultationSelect === "videoconsultation" ? true : false;
    let amountType = consultType ? 500 : 1000;
    this.setState({ amount: slots.length * amountType });
    document.getElementById("bookingmodal").classList.add(styles.active);
    let bookingDetails = {
      doctorID: "",
      consultationType: consultType,
      slots: slots,
    };
    console.log(bookingDetails);
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

  handleMessage = (event) => {
    if (event.target.value.length > 0)
      document.getElementById("proceedpayment").classList.add(styles.active);
    else
      document.getElementById("proceedpayment").classList.remove(styles.active);
    this.setState({ value: event.target.value });
  };

  handleCloseModal = () => {
    document.getElementById("bookingmodal").classList.remove(styles.active);
  };

  handleProceedPayment = () => {};
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
              <button
                id="bookbtn"
                className={styles.bookbtn}
                onClick={this.handleBooking}
              >
                Book Appointment
              </button>
            </div>
            <div id="mandateinfo" className={styles.madateinfo}>
              <span>&#8727;</span>
              <p>Please select the type of consultation and Book a Slot</p>
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
                <span>In progress(unconfirmed)</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Doctor Busy</span>
              </div>
            </div>
          </div>
        </div>
        <div id="bookingmodal" className={styles.bookingModalContainer}>
          <div className={styles.bookingDetails}>
            <span className={styles.closebtn} onClick={this.handleCloseModal}>
              &times;
            </span>
            <div className={styles.bookingInfo}>
              <div> Amount to be Paid: &#8377;: {this.state.amount}</div>
              <div>
                <textarea
                  type="text"
                  name="message"
                  autoComplete="off"
                  required
                  className={styles.message}
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
              </div>
              <div>
                <button id="proceedpayment" onClick={this.handleProceedPayment}>
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

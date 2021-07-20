import React from "react";
import { Component } from "react";
import styles from "../../css/PatientDashboard.module.css";
import Card from "../Doc_Card";
import PatCard from "../Pat_Card";
import { withRouter } from "react-router";
import EditModal from "./EditmodalPat";
import Auth from "../../Auth";
import axios from "axios";

class PatientDashboard extends Component {
  state = {
    doctorDetails: Array.from({ length: 6 }, (_, i) => {
      return {
        name: "Subrakanta Smith",
        specialization: "NEUROLOGIST",
        education: "MBBS, MD in Pulmonology",
        experience: "7 years",
        hospitalName: "Apollo",
        hospitalLocation: "Bangalore",
        id: "1",
        appointment: "5:",
      };
    }),
    appointments: Array.from({ length: 15 }, (_, i) => {
      return i;
    }),
  };

  async componentDidMount() {
    console.log(this.props, "props home");
    this.props.pageActive(true);
    let doctorData = [];
    await axios
      .get("https://oopbackend.herokuapp.com/registeruserdoc/")
      .then((res) => {
        console.log(res, "insidehere");
        doctorData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    //
    this.setState((prevState) => {
      return doctorData.length !== 0 ? { ...this.props } : { ...this.props };
    });
    // this.setState((prevState) => {
    //   return doctorData.length !== 0
    //     ? { ...this.props, doctorDetails: doctorData }
    //     : { ...this.props };
    // });
    // console.log(this.state.doctorDetails);
  }
  componentWillUnmount() {
    this.props.pageActive(false);
  }

  handleEdit = () => {
    this.setState({ active: true });
    // let editDetails = {
    //   age: this.props.age,
    //   address: "",
    //   medicalhistory: "",
    // };
    // console.log(editDetails);
  };

  handleModalActive = (active) => {
    this.setState({ active: active });
  };

  handlePatientDetailsChange = (newDetails) => {
    console.log(this.state, "props bf");
    this.setState({
      age: newDetails.age ? newDetails.age : this.state.age,
      address: newDetails.address ? newDetails.address : this.state.address,
      medicalHistory: newDetails.medicalHistory
        ? newDetails.medicalHistory
        : this.state.medicalHistory,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.patDashboard}>
          <div className={styles.patInfo}>
            <div className={styles.card}>
              <PatCard {...this.state} />
            </div>
            <div className={styles.appInfo}>
              <h4>Appointments:</h4>
              <div className={styles.appointmentList}>
                {this.state.appointments.map((time, j) => (
                  <div className={styles.appointment} key={j}>
                    <span>Appointment No: {time + 1}</span>
                  </div>
                ))}
              </div>
              {/* <div className={styles.time}>5:30-6:30 Doctor</div> */}
            </div>
            <div className={styles.modifyBtn}>
              <div className={styles.reschedule}>
                <button type="button" className={styles.reschedulebtn}>
                  Reschedule
                </button>
              </div>
              {/* <div className={styles.cancel}>
                <button type="button" className={styles.cancelbtn}>
                  Delete appointment
                </button>
              </div> */}
              <div className={styles.delete}>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => {
                    Auth.logout();
                    this.props.history.push({
                      pathname: "/",
                    });
                  }}
                >
                  Delete Account
                </button>
              </div>
              <div className={styles.editProfile}>
                <button onClick={this.handleEdit}>Edit Profile</button>
              </div>
              <div className={styles.logout}>
                <button
                  type="button"
                  className={styles.logoutBtn}
                  onClick={() => {
                    Auth.logout();
                    this.props.history.push({
                      pathname: "/",
                    });
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className={styles.aptTab}>
            <div className={styles.heading} {...this.props.app}>
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
              {this.state.doctorDetails.map((doctorDetail, j) => {
                return (
                  <div className={styles.docInfo} key={j}>
                    <Card {...doctorDetail} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <EditModal
          active={this.state.active}
          modalActive={this.handleModalActive}
          changePatientDetails={this.handlePatientDetailsChange}
          {...this.state}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(PatientDashboard);

import React from "react";
import { Component } from "react";
import styles from "../../css/PatientDashboard.module.css";
import Card from "../Doc_Card";
import PatCard from "../Pat_Card";
import axios from "axios";
import { withRouter } from "react-router";
import EditModal from "./EditmodalPat";

class PatientDashboard extends Component {
  state = {
    doctorDetails: Array.from({ length: 6 }, (_, i) => {
      return {
        name: "Subrakanta Smith",
        specialization: "NEUROLOGIST",
        education: "MBBS, MD in Pulmonology",
        experience: "7 years",
        userLocation: "Apollo, Bangalore",
        id: "1",
      };
    }),
  };

  componentDidMount() {
    console.log(this.props);
    this.props.pageActive(true);
    // this.setState({data:{...this.props.location.state}})
    // console.log(this.state.doctorDetails);
  }
  componentWillUnmount() {
    this.props.pageActive(false);
  }

  handleEdit = () => {
    this.setState({ active: true });

    let editDetails = {
      age: this.props.age,
      address: "",
      medicalhistory: "",
    };
    console.log(editDetails);
  };

  handleModalActive = (active) => {
    this.setState({ active: active });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.patDashboard}>
          <div className={styles.patInfo}>
            <div className={styles.card}>
              <PatCard {...this.props} />
            </div>
            <div className={styles.appInfo}> Appointments</div>
            <div className={styles.editProfile}>
              <button onClick={this.handleEdit}>Edit Profile</button>
            </div>
            <div className={styles.delete}>
              <button type="button" className={styles.delete}>
                Delete
              </button>
            </div>
            <div className={styles.logout}>
              <button type="button" className={styles.logout}>
                Logout
              </button>
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
          amount={this.state.amount}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(PatientDashboard);

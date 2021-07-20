import React, { Component } from "react";
import styles from "../../css/doctorDashboard.module.css";
import Timetable from "../Timetable";
import Card from "../Card";
import axios from "axios";
import EditModal from "./EditmodalDoc";
import Auth from "../../Auth";
import { withRouter } from "react-router";

class DoctorDashboard extends Component {
  state = {
    changeAvailability: false,
    originalSlots: new Array(48).fill(0),
    slots: new Array(48).fill(0),
    busySlotsMarked: false,
  };

  async componentDidMount() {
    this.props.pageActive(true);
    let doctorData = null;
    await axios
      .get("https://oopbackend.herokuapp.com/bookslot/")
      .then((res) => {
        doctorData = res.data;
        console.log(doctorData, "insidehere");
      })
      .catch((err) => {
        console.log(err);
      });

    let doctorDetails = { ...this.props.location.state };

    let slots = [...this.state.slots];
    doctorData.map((data) => {
      if (data.doc == doctorDetails.userName) {
        if (data.pat == "busy") slots[data.slot] = -2;
        else slots[data.slot] = -1;
      }
    });
    console.log(this.props, doctorDetails, slots, "preps here for");
    this.setState({
      ...this.props,
      doctorDetails: { ...doctorDetails },
      slots: slots,
    });
    // this.setState({data:{...this.props.location.state}})
  }
  componentWillUnmount() {
    this.props.pageActive(false);
  }

  handleTimeSlots = (slots) => {
    let val = this.state.originalSlots.map((x, i) => {
      if (x == slots[i]) return 1;
    });
    val = !val.reduce((a, b) => a + b, 0)
      ? document
          .getElementById("changeavailabity")
          .classList.contains(styles.active)
        ? ""
        : document
            .getElementById("changeavailabity")
            .classList.add(styles.active)
      : document
          .getElementById("changeavailabity")
          .classList.remove(styles.active);
    this.setState({ slots: slots });
  };

  paymentHandler = async (confirmBooking) => {
    await axios
      .post("https://oopbackend.herokuapp.com/bookslot/", confirmBooking, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((res) => {
        // this.setState({slots:res.data,originalSlots:res.data})
        let paymentSuccessDetails = res.data;
        console.log(paymentSuccessDetails, "payment details");
      })
      .catch((err) => console.log(err));
  };

  handleChangeAvailability = async () => {
    document.getElementById("changeavailabity").classList.remove(styles.active);
    console.log(this.state.slots);
    this.state.slots.map((slot, j) => {
      if (slot) {
        let confirmBooking = {
          slot: parseInt(j),
          doc: this.state.doctorDetails.userName,
          pat: "busy",
          type: true,
        };
        console.log(confirmBooking);
        this.paymentHandler(confirmBooking);
      }
    });

    this.setState((prevState) => {
      return { originalSlots: prevState.slots };
    });
  };

  handleEdit = () => {
    console.log(this.state);
    this.setState({ active: true });
  };

  handleModalActive = async (active, closeType = "close", stateHere) => {
    console.log(this.state, "state here");
    if (closeType === "confirm") {
      let doctorDetails = {
        userName: this.state.doctorDetails.username,
        name: this.state.doctorDetails.name,
        email: this.state.doctorDetails.email,
        mobile: this.state.doctorDetails.phone,
        isDoctor: this.state.doctorDetails.isDoctor,
        specialization: stateHere.specialization,
        experience: stateHere.experience,
        degree: stateHere.education,
        hospitalName: stateHere.address.split(", ")[0],
        hospitalLocation: stateHere.address.split(", ")[1],
      };

      this.setState({ ...doctorDetails });
      // axios
      //   .put(
      //     "https://oopbackend.herokuapp.com/registeruserdoc/",
      //     doctorDetails,
      //     {
      //       headers: {
      //         accept: "application/json",
      //         "content-type": "application/json",
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   });
    } else {
      this.setState({ active: active });
    }
  };

  handleBusySlots = (active) => {
    this.setState({ busySlotsMarked: active, slots: new Array(48).fill(0) });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.docDashboard}>
          <div className={styles.docInfo}>
            <Card {...this.state.doctorDetails} />
            <div className={styles.modifyBtn}>
              <div className={styles.editProfile}>
                <button onClick={this.handleEdit}>Edit Profile</button>
              </div>
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
                  Delete
                </button>
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
            {/* <div className={styles.editProfile}>
              <button>Edit Profile</button>
            </div> */}
          </div>
          <div className={styles.aptTab}>
            <Timetable
              isDoctor={true}
              busySlots={this.state.slots}
              timeslots={this.handleTimeSlots}
              path="doctor"
              busySlotsRegisterer={this.state.busySlotsMarked}
              busySlotsHandler={this.handleBusySlots}
            />
            <div className={styles.refInfo}>
              <div className={styles.changeAvailability}>
                <button
                  id="changeavailabity"
                  onClick={this.handleChangeAvailability}
                >
                  Change Availability
                </button>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Available</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Busy</span>
              </div>
              <div className={styles.colorLegends}>
                <div></div>
                <span>Appointment Scheduled</span>
              </div>
            </div>
          </div>
        </div>
        <EditModal
          active={this.state.active}
          modalActive={this.handleModalActive}
          {...this.state}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(DoctorDashboard);

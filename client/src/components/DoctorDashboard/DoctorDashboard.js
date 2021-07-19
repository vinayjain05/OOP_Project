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
  };

  componentDidMount() {
    this.props.pageActive(true);
    this.setState({ ...this.props });
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

  handleChangeAvailability = async () => {
    document.getElementById("changeavailabity").classList.remove(styles.active);
    // await axios
    //   .post("/doctortt", this.state.slots)
    //   .then((res) => {
    //     this.setState({slots:res.data,originalSlots:res.data})
    //     console.log(res.data)});

    this.setState((prevState) => {
      return { originalSlots: prevState.slots };
    });
  };

  handleEdit = () => {
    this.setState({ active: true });
  };

  handleModalActive = (active) => {};

  render() {
    return (
      <React.Fragment>
        <div className={styles.docDashboard}>
          <div className={styles.docInfo}>
            <Card {...this.props} />
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

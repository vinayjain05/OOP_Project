import React, { Component } from "react";
import styles from "../../css/editpat.module.css";

export default class EditModal extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    let val =
      this.props.active !== prevProps.active
        ? document.getElementById("editmodal").classList.add(styles.active)
        : "";
  }

  handleCloseModal = () => {
    document.getElementById("editmodal").classList.remove(styles.active);
    this.props.modalActive(false);
  };
  handleAgeChange = (evt) => {
    this.setState({ age: evt.target.value });
  };
  handleAddressChange = (evt) => {
    this.setState({ address: evt.target.value });
  };
  handleMedicalHistoryChange = (evt) => {
    this.setState({ medicalhistory: evt.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    let userDetails = { ...this.state, isDoctor: false };
    console.log(userDetails.age);
    document.getElementById("editmodal").classList.remove(styles.active);
    this.props.modalActive(false);
  };

  render() {
    return (
      <React.Fragment>
        <div id="editmodal" className={styles.bookingModalContainer}>
          <div className={styles.bookingDetails}>
            <span className={styles.closebtn} onClick={this.handleCloseModal}>
              &times;
            </span>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  className={styles.uname}
                  name="uname"
                  disabled
                  required
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  className={styles.email}
                  name="email"
                  placeholder="Email"
                  disabled
                  required
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.phone}
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="Phone Number"
                  title="Please enter valid 10-digit phone number"
                  required
                  disabled
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  className={styles.age}
                  name="age"
                  placeholder={this.props.age}
                  pattern="[0-9]"
                  title="Please enter valid age"
                  required
                  value="{this.state.age}"
                  onChange={this.handleAgeChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.add}
                  name="add"
                  placeholder="Address"
                  required
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.hist}
                  name="hist"
                  placeholder="Medical history"
                  value={this.state.medicalhistory}
                  onChange={this.handleMedicalHistoryChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={styles.button}
                  onClick={this.submitForm}
                >
                  Edit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

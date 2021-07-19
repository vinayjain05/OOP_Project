import React, { Component } from "react";
import styles from "../../css/editpat.module.css";

export default class EditModal extends Component {
  state = {
    name: "",
    age: "",
    gender: "",
    address: "",
    medicalHistory: "",
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({
      name: this.props.name,
      gender: this.props.gender,
      age: this.props.age,
      address: this.props.address,
      medicalHistory: this.props.medicalHistory,
    });
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.active ? true : false;
  }
  componentDidUpdate(prevProps, prevState) {
    document.getElementById("editmodal").classList.add(styles.active);
  }

  handleCloseModal = () => {
    document.getElementById("editmodal").classList.remove(styles.active);
    this.props.modalActive(false, { ...this.state });
  };
  handleAgeChange = (evt) => {
    this.setState({ age: evt.target.value });
  };
  handleAddressChange = (evt) => {
    this.setState({ address: evt.target.value });
  };
  handleMedicalHistoryChange = (evt) => {
    this.setState({ medicalHistory: evt.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    document.getElementById("editmodal").classList.remove(styles.active);
    this.props.modalActive(false);
    // let userDetails = { ...this.state, isDoctor: false };
    // console.log(userDetails.age);
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
                <label htmlFor="name" className={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  className={styles.name}
                  name="name"
                  disabled
                  placeholder={this.props.name}
                  title="Name"
                  value={this.state.name}
                />
              </div>
              <div>
                <label htmlFor="gender" className={styles.formLabel}>
                  Gender
                </label>
                <input
                  type="text"
                  className={styles.gender}
                  name="gender"
                  disabled
                  placeholder={this.props.gender}
                  title="Gender"
                  value={this.state.gender}
                />
              </div>

              <div>
                <label htmlFor="age" className={styles.formLabel}>
                  Age
                </label>
                <input
                  type="number"
                  className={styles.age}
                  name="age"
                  placeholder={this.props.age}
                  pattern="[0-9]"
                  title="Please enter valid age"
                  value={this.state.age}
                  onChange={this.handleAgeChange}
                />
              </div>
              <div>
                <label htmlFor="address" className={styles.formLabel}>
                  Address{" "}
                </label>

                <input
                  type="text"
                  className={styles.address}
                  name="address"
                  placeholder={this.props.address}
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div>
              <label htmlFor="hist" className={styles.formLabel}>
                  MedicalHistory
                </label>

                <input
                  type="text"
                  className={styles.medicalHistory}
                  name="hist"
                  placeholder={this.props.medicalHistory}
                  value={this.state.medicalHistory}
                  onChange={this.handleMedicalHistoryChange}
                />
              </div>
              <div>
                <button type="submit" className={styles.button}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

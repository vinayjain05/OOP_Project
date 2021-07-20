import React, { Component } from "react";
import styles from "../../css/editdoc.module.css";

export default class EditModal extends Component {
  state = {
    name: "",
    specialization: "",
    degree: "",
    address: "",
    experience: "",
    // breakhere: true,
  };

  componentDidMount() {
    console.log(this.props, "preasydknsa");

    // console.log(this.props.degree);
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.active ? true : false;
  }
  componentDidUpdate(prevProps, prevState) {
    document.getElementById("editmodal").classList.add(styles.active);
    // console.log(this.props);
    if (prevProps != this.props) {
      this.setState({
        name: this.props.location.state.name,
        specialization: this.props.location.state.specialization,
        degree: this.props.location.state.degree,
        address: `${this.props.location.state.hospitalName},${this.props.location.state.hospitalLocation}`,
        experience: this.props.location.state.experience,
      });
    }
  }

  handleCloseModal = () => {
    document.getElementById("editmodal").classList.remove(styles.active);
    this.props.modalActive(false, "close", {});
    // this.setState({ breakhere: !this.state.breakhere });
  };
  handleSpecializationChange = (evt) => {
    this.setState({ specialization: evt.target.value });
  };
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  };
  handleAddressChange = (evt) => {
    this.setState({ address: evt.target.value });
  };
  handleExperienceChange = (evt) => {
    this.setState({ experience: evt.target.value });
  };
  handleDegreeChange = (evt) => {
    this.setState({ degree: evt.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    document.getElementById("editmodal").classList.remove(styles.active);
    this.props.modalActive(false, "confirm", this.state);
    // this.setState({ breakhere: !this.state.breakhere });
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
                  placeholder={this.state.name}
                  title="Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div>
                <label htmlFor="gender" className={styles.formLabel}>
                  Specialization
                </label>
                <input
                  type="text"
                  className={styles.gender}
                  name="gender"
                  placeholder={this.state.specialization}
                  title="Gender"
                  value={this.state.specialization}
                  onChange={this.handleSpecializationChange}
                />
              </div>

              <div>
                <label htmlFor="age" className={styles.formLabel}>
                  Degree
                </label>
                <input
                  type="number"
                  className={styles.age}
                  name="age"
                  placeholder={this.state.degree}
                  pattern="[0-9]"
                  title="Please enter valid age"
                  value={this.state.degree}
                  onChange={this.handleDegreeChange}
                />
              </div>
              <div>
                <label htmlFor="address" className={styles.formLabel}>
                  Hospital
                </label>

                <input
                  type="text"
                  className={styles.address}
                  name="address"
                  placeholder={this.state.address}
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div>
                <label htmlFor="hist" className={styles.formLabel}>
                  Experience
                </label>

                <input
                  type="text"
                  className={styles.medicalHistory}
                  name="hist"
                  placeholder={this.state.experience}
                  value={this.state.experience}
                  onChange={this.handleExperienceChange}
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

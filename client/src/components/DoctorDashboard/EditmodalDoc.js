import React, { Component } from "react";
import styles from "../../css/editdoc.module.css";

export default class EditModal extends Component {
  state = {
    name: "",
    specialization: "",
    education: "",
    address: "",
    experience: "",
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({
      name: this.props.name,
      specialization: this.props.specialization,
      education: this.props.education,
      address: this.props.address,
      experience: this.props.experience,
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
  handleSpecializationChange = (evt) => {
    this.setState({ specialization: evt.target.value });
  };
  handleAddressChange = (evt) => {
    this.setState({ address: evt.target.value });
  };
  handleExperienceChange = (evt) => {
    this.setState({ experience: evt.target.value });
  };
  handleEducationChange = (evt) => {
    this.setState({ education: evt.target.value });
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
                  Specialization
                </label>
                <input
                  type="text"
                  className={styles.gender}
                  name="gender"
                  placeholder={this.props.specialization}
                  title="Gender"
                  value={this.state.specialization}
                  onClick={this.handleSpecializationChange}
                />
              </div>

              <div>
                <label htmlFor="age" className={styles.formLabel}>
                  Education
                </label>
                <input
                  type="number"
                  className={styles.age}
                  name="age"
                  placeholder={this.props.education}
                  pattern="[0-9]"
                  title="Please enter valid age"
                  value={this.state.education}
                  onChange={this.handleEducationChange}
                />
              </div>
              <div>
                <label htmlFor="address" className={styles.formLabel}>
                  Address
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
                  Experience
                </label>

                <input
                  type="text"
                  className={styles.medicalHistory}
                  name="hist"
                  placeholder={this.props.experience}
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


import React, { Component } from "react";
import styles from "../../css/editdoc.module.css";

export default class EditModal extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    let val =
      this.props.active !== prevProps.active
        ? document.getElementById("editmodal").classList.add(styles.active)
        : "";
  }
  handleSpecializationChange = (evt) => {
    this.setState({ specialization: evt.target.value });
  };
  handleYearsChange = (evt) => {
    this.setState({ yearsofexperience: evt.target.value });
  };
  handleEducationChange = (evt) => {
    this.setState({ education: evt.target.value });
  };
  handleHosptialChange = (evt) => {
    this.setState({ hospital: evt.target.value });
  };

  handleHosptialAddressChange = (evt) => {
    this.setState({ hospitaladdress: evt.target.value });
  };
  handleCloseModal = () => {
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
            </span>{" "}
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
                  type="text"
                  className={styles.hospital}
                  name="hospital"
                  placeholder="Specialization"
                  required
                  value={this.state.specialization}
                  onChange={this.handleSpecializationChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  className={styles.years}
                  name="years"
                  placeholder="Years of experience"
                  required
                  pattern="[0-9]"
                  title="Please enter years of experience between 0-99"
                  value={this.state.yearsofexperience}
                  onChange={this.handleYearsChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.edu}
                  name="edu"
                  placeholder="Highest Level of Education"
                  required
                  value={this.state.education}
                  onChange={this.handleEducationChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.hospital}
                  name="hospital"
                  placeholder="Hospital"
                  required
                  value={this.state.hospital}
                  onChange={this.handleHosptialChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.hospitaladd}
                  name="hospitaladd"
                  placeholder="Hospital Address"
                  required
                  value={this.state.hospitaladdress}
                  onChange={this.handleHosptialAddressChange}
                />
              </div>
              <div>
                <button type="submit" onClick={this.submitForm}>
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

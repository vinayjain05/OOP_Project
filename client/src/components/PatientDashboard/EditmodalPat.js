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
                    type="number"
                    className={styles.age}
                    name="age"
                    placeholder="Age"
                    pattern="[0-9]"
                    title="Please enter valid age"
                    required
                    value={this.state.age}
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

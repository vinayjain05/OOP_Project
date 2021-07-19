import React, { Component } from "react";
import styles from "../../css/bookingmodal.module.css";

export default class BookingModal extends Component {
  state = {};

  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.active ? true : false;
  }

  componentDidUpdate(prevProps, prevState) {
    document.getElementById("bookingmodal").classList.add(styles.active);
  }

  handleMessage = (event) => {
    if (event.target.value.length > 0)
      document.getElementById("proceedpayment").classList.add(styles.active);
    else
      document.getElementById("proceedpayment").classList.remove(styles.active);
    this.setState({ value: event.target.value });
  };

  handleCloseModal = () => {
    document.getElementById("bookingmodal").classList.remove(styles.active);
    this.props.modalActive(false);
  };
  handleProceedPayment = () => {};

  render() {
    return (
      <React.Fragment>
        <div id="bookingmodal" className={styles.bookingModalContainer}>
          <div className={styles.bookingDetails}>
            <span className={styles.closebtn} onClick={this.handleCloseModal}>
              &times;
            </span>
            <div className={styles.bookingInfo}>
              <div> Amount to be Paid: &#8377;: {this.props.amount}</div>
              <div>
                <textarea
                  type="text"
                  name="message"
                  autoComplete="off"
                  required
                  className={styles.message}
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
              </div>
              <div>
                <button id="proceedpayment" onClick={this.handleProceedPayment}>
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

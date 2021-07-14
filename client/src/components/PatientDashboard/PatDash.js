import React from 'react';
import Doc_card from './Doc_card';
import {TeamObjOne} from './Data';
import styles from "../../css/PatDash.module.css";

function PatDash () {
  return (
  <React.Fragment>
    
    <div className={styles.heading}><h1>Here’s a list of doctors available in your region</h1></div>
    <div className={styles.subheading}><div>Depending on availability, you can book an appointment with your preferred doctor for a time slot of <b>15 minutes.</b></div>
    <div>For online appointments, the consultation fee is <b>₹100</b></div>
    <div>For in-person appointments, the consultation fee is <b>₹500</b></div></div>
    <div className={styles.container}>
      <Doc_card {...TeamObjOne} />
      <Doc_card {...TeamObjOne} />
      <Doc_card {...TeamObjOne} />
      <Doc_card {...TeamObjOne} />
      </div>

  </React.Fragment>
  );
}

export default PatDash;
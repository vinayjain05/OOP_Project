import React, { Component } from "react";
import { ReactComponent as HomePicture } from "../../svg/homedocs.svg";
import styles from "../../css/home.module.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.homeContainer}>
          <div className={styles.homedocsContainer}>
            <HomePicture className={styles.landingsvg} />
          </div>
          <div className={styles.glassBoard}>
            <div className={styles.topBoard}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

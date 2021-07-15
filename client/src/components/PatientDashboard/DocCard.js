import React from "react";
import styles from "../../css/DocCards.module.css";

function DocCards({ name, role, edu, exp, loc, img, alt }) {
  return (
    <React.Fragment>
      <div className={styles.profileCard}>
        <div className={styles.image}>
          <img src={img} className={styles.cardImage} alt="" />
        </div>
        <div className={styles.info}>
          <div>
            <h3 className={styles.nameHead}>{name}</h3>
            <div>{role}</div>
            <div>{edu}</div>
            <div>{exp}</div>
            <div>{loc}</div>
          </div>
        </div>
        <div class={styles.button}>
          <button>Book appointment</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DocCards;

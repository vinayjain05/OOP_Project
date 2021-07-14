import React from "react";
import styles from "../../css/Doc_cards.module.css";

function Doc_cards({ name, role, edu, exp, loc, img, alt }) {
  return (
    <React.Fragment>
      <div className={styles.member}>
        <div className={styles.img}>
          <img src={img} alt="Team_image" />
        </div>
        <h3>{name}</h3>
        <div>
          <p className={styles.role}>{role}</p>
          <p>
            <b>{edu} </b>
          </p>
          <p>{exp}</p>
          <p>{loc}</p>
        </div>

        <div className={styles.center}>
          <button>Book appointment</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Doc_cards;

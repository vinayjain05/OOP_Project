import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import styles from "../css/navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div>
            <span className={styles.pageLogo}>
              <Link to="/">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;

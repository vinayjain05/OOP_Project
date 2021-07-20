import React, { Component } from "react";
import styles from "../css/timetable.module.css";

export default class Timetable extends Component {
  state = {
    datetabs: [],
    slots: new Array(48).fill(0),
  };
  componentDidMount() {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay() + 2; // First day is the day of the month - the day of the week
    var firstday = new Date(curr.setDate(first));
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.state.datetabs.push(
      new Date(curr.setDate(curr.getDate() - 1))
        .toUTCString()
        .split(monthNames[curr.getMonth()].slice(0, 3))[0] +
        monthNames[curr.getMonth()].slice(0, 3)
    );
    // console.log(new Date().getDate());

    Array.apply(null, Array(6))
      .map(Number.prototype.valueOf, 1)
      .map((i) => {
        let newdate =
          new Date(curr.setDate(curr.getDate() + i))
            .toUTCString()
            .split(monthNames[curr.getMonth()].slice(0, 3))[0] +
          monthNames[curr.getMonth()].slice(0, 3);

        this.setState((previousState) => {
          return { datetabs: [...previousState.datetabs, newdate] };
        });
        // console.log(newdate);
      });

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    // let s = today.getSeconds();
    function checkTime(i, md = "am") {
      if (i < 10 && (i != 0 || md == "am") && i !== "00") {
        i = "0" + i;
      }
      return i;
    }
    m = checkTime(m, "am");
    // h %= 12;
    h = checkTime(h, "am");

    // s = checkTime(s);
    Array.from(document.getElementsByClassName(styles.timeSlots)).forEach(
      (timeslottab) => {
        let md = Array.from(
          timeslottab.getElementsByClassName(styles.timeHead)
        )[0].innerHTML;
        Array.from(timeslottab.getElementsByClassName(styles.timeBtn)).forEach(
          (timebtn) => {
            let timebtnval = timebtn.innerHTML.split(" -")[0];
            let timebtnh = timebtnval.split(":")[0];
            if (md.split(">")[1].split("<")[0].split(" ")[1] == "pm") {
              timebtnh =
                parseInt(timebtnval.split(":")[0]) !== 12
                  ? parseInt(timebtnval.split(":")[0]) + 12
                  : parseInt(timebtnval.split(":")[0]);
            } else {
              timebtnh = checkTime(timebtnh);
            }
            let timebtnm = checkTime(timebtnval.split(":")[1]);
            // console.log(
            //   timebtnh + ":" + timebtnm,
            //   h + ":" + m,
            //   timebtnh + ":" + timebtnm < h + ":" + m
            // );
            let val = "";
            if (!this.props.isDoctor) {
              val =
                timebtnh + ":" + timebtnm <= h + ":" + m
                  ? [
                      timebtn.classList.remove(styles.normal),
                      timebtn.classList.add(styles.timeExceeded),
                    ]
                  : "";
            } else {
              val =
                timebtnh + ":" + timebtnm <= h + ":" + m
                  ? [
                      timebtn.classList.remove(styles.normal),
                      timebtn.classList.add(styles.doctordash),
                    ]
                  : "";
            }
          }
        );
        // timebtn.value.split(" -")[0] - currh<0?;
      }
    );

    console.log(this.props.busySlots, "busy Slots");
    this.props.busySlots.map((slot) => {
      console.log("enter", slot);
      if (
        !document
          .getElementById(String(slot))
          .classList.contains(styles.timeExceeded)
        //   ||
        // this.props.isDoctor
      ) {
        console.log("enter", slot);
        document.getElementById(String(slot)).classList.remove(styles.normal);
        document.getElementById(String(slot)).classList.add(styles.busy);
      }
    });
    this.setState({ slots: this.props.busySlots });
    // let currh = new Date().getHours() !== 0 ? new Date().getHours() % 12 : 0;
    // currh = currh === 0 ? 12 : currh;
  }

  componentDidUpdate() {
    // console.log(this.props, "prepher here");
    if (this.props.busySlots.includes(-1) && this.props.path == "booking") {
      this.props.busySlots.map((slot, i) => {
        // console.log("enterhere", slot, i);
        if (
          !document
            .getElementById(String(i))
            .classList.contains(styles.timeExceeded) &&
          slot == -1
        ) {
          document.getElementById(String(i)).classList.remove(styles.normal);
          document.getElementById(String(i)).classList.add(styles.busy);
        }
      });
      this.props.busySlotsHandler(true);
    }
    if (this.props.busySlots.includes(-2) && this.props.path == "doctor") {
      this.props.busySlots.map((slot, i) => {
        // console.log("enterhere", slot, i);
        if (
          !document
            .getElementById(String(i))
            .classList.contains(styles.timeExceeded) &&
          slot == -1
        ) {
          document.getElementById(String(i)).classList.remove(styles.normal);
          document.getElementById(String(i)).classList.add(styles.busy);
        } else if (
          !document
            .getElementById(String(i))
            .classList.contains(styles.timeExceeded) &&
          slot == -2
        ) {
          document.getElementById(String(i)).classList.add(styles.normal);
          document.getElementById(String(i)).classList.add(styles.selfbusy);
        }
      });
      this.props.busySlotsHandler(true);
    }
  }

  handleSlotSelect = (event) => {
    // console.log(event.target);

    // if (event.target.classList.contains(styles.active)) {
    if (event.target.classList.contains(styles.normal)) {
      let slots = [...this.state.slots];
      slots[event.target.id] = !slots[event.target.id];

      this.props.timeslots(slots);
      // slots[]
      // }
      let val = event.target.classList.contains(styles.active)
        ? [event.target.classList.remove(styles.active)]
        : [event.target.classList.add(styles.active)];

      this.setState({
        slots: slots,
      });
    }

    // event.target.style.backgroundColor =
    //   event.target.style.backgroundColor === "#EEEE00" ? "#39FF39" : "#EEEE00";
  };

  handleMouseEnter = (event) => {
    let val = !event.target.classList.contains(styles.active)
      ? event.target.classList.add(styles.mouseover)
      : "";
  };

  handleMouseLeave = (event) => {
    event.target.classList.remove(styles.mouseover);
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.timetable}>
          <div className={styles.dates}>
            {this.state.datetabs.map((date, i) => {
              let active = "";
              if (date.split(" ")[1] === String(new Date().getDate())) {
                active = styles.active;
              }
              return (
                <div className={active} key={i} id={`date-${i}`}>
                  <span>{date}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.timings}>
            {Array.from({ length: 12 }, (_, i) => i + 9).map((i, j) => {
              i = i % 12;
              let md = "am";
              if (i < 9) md = "pm";
              i = i === 0 ? 12 : i;
              j = j * 4;
              return (
                <div className={styles.timeSlots} key={i}>
                  <div className={styles.timeHead}>
                    <h3>{i + " " + md}</h3>
                  </div>
                  <div className={styles.timeBtns}>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      id={j}
                      className={`${styles.timeBtn} ${styles.normal}`}
                    >
                      {i + ":00 - " + i + ":15"}
                    </button>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      id={j + 1}
                      className={`${styles.timeBtn} ${styles.normal}`}
                    >
                      {i + ":15 - " + i + ":30"}
                    </button>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      id={j + 2}
                      className={`${styles.timeBtn} ${styles.normal}`}
                    >
                      {i + ":30 - " + i + ":45"}
                    </button>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      id={j + 3}
                      className={`${styles.timeBtn} ${styles.normal}`}
                    >
                      {i + ":45 - " + String(parseInt(i + 1)) + ":00"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

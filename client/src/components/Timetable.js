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
  }

  handleSlotSelect = (event) => {
    // console.log(event.target);

    if (event.target.classList.contains(styles.active)) {
      let slots = [...this.state.slots];
      let slotIndex = event.target.value.split;
      // slots[]
    }
    let val = event.target.classList.contains(styles.active)
      ? [event.target.classList.remove(styles.active)]
      : [event.target.classList.add(styles.active)];

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
            {this.state.datetabs.map((date) => {
              let active = "";
              if (date.split(" ")[1] === String(new Date().getDate())) {
                active = styles.active;
              }
              return (
                <div className={active}>
                  <span>{date}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.timings}>
            {Array.from({ length: 12 }, (_, i) => i + 9).map((i) => {
              i = i % 12;
              let md = "am";
              if (i < 9) md = "pm";
              i = i === 0 ? 12 : i;

              return (
                <div
                  className={styles.timeSlots}
                  key={`${i} + ":00 - " + ${i} + ":15"`}
                >
                  <div className={styles.timeHead}>
                    <h3>{i + " " + md}</h3>
                  </div>
                  <div className={styles.timeBtns}>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      key={`${i} + ":00 - " + ${i} + ":15"`}
                    >
                      {i + ":00 - " + i + ":15"}
                    </button>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      key={i + ":15 - " + i + ":30"}
                    >
                      {i + ":15 - " + i + ":30"}
                    </button>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      key={i + ":30 - " + i + ":45"}
                    >
                      {i + ":30 - " + i + ":45"}
                    </button>
                    <button
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      onClick={this.handleSlotSelect}
                      key={i + ":45 - " + i + ":00"}
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

import React, { Component } from "react";
import { withRouter } from "react-router";
import jQuery from "jquery";
import axios from "axios";

class CSRFToken extends Component {
  state = { csrftoken: "" };
  async componentDidMount() {
    await axios
      .get("https://oopbackend.herokuapp.com/csrf_cookie", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          csrftoken: res.data.csrftoken,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   getCookie = (name) => {
  //     var cookieValue = null;
  //     console.log(document.cookie);
  //     if (document.cookie && document.cookie !== "") {
  //       var cookies = document.cookie.split(";");
  //       for (var i = 0; i < cookies.length; i++) {
  //         var cookie = jQuery.trim(cookies[i]);
  //         if (cookie.substring(0, name.length + 1) === name + "=") {
  //           cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  //           break;
  //         }
  //       }
  //     }
  //     return cookieValue;
  //   };

  render() {
    return (
      <input
        type="hidden"
        name="csrfmiddlewaretoken"
        value={this.state.csrftoken}
      />
    );
  }
}
export default withRouter(CSRFToken);

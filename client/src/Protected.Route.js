import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <Route
        {...this.props.props}
        render={() => {
          if (!Auth.isAuthenticated()) {
            // console.log({...props})
            return <this.props.component {...this.props.props} />;
          } else if (Auth.hasSignupDetails()) {
            return <this.props.component {...this.props.props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            );
          }
        }}
      />
    );
  }
}

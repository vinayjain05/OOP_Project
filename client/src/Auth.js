class Auth {
  constructor() {
    this.authenticated = false;
    this.signupDetails = false;
  }

  signup(signupDetails) {
    this.signupDetails = signupDetails;
  }

  login(authenticated) {
    this.authenticated = authenticated;
    // cb();
  }

  logout(authenticated) {
    this.authenticated = authenticated;
    // cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  hasSignupDetails() {
    return this.signupDetails;
  }
}

export default new Auth();

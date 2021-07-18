class Auth {
  constructor() {
    this.authenticated = false;
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
}

export default new Auth();

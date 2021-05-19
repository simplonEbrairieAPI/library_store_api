class UserEntity {
  constructor({ id, firstName, lastName, email, password, role }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

  validateEmail() {
    const email_format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (this.email != email_format) ? false : true
  }

  validateProfile() {
    if (!this.firstname || !this.lastName)
      return false;
    else
      return true;
  }

  validateLogin() {
    if (!this.email || !this.password)
      return false;
    else
      return true;
  }
}
export default UserEntity;
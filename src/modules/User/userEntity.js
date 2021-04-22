class UserEntity {

  constructor({ firstName, lastName, email, password, role }) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.email = email;
    this.password = password;
    this.role = null;
  }

  validate() {
    if (!this.firstName || this.lastName || !this.email || !this.password || !this.role)
      return false;
    else
      return true;
  }

}

export default UserEntity;
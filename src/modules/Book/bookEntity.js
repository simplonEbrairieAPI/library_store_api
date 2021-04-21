class BookEntity {

  constructor({ id }) {
    this.id = id;

  }

  validate() {
    if (!this.id)
      return false;
    else
      return true;
  }

}

export default BookEntity;
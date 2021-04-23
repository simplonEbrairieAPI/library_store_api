class BookEntity {
  constructor({ id, title, description, editors, authorId }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.editors = editors;
    this.authorId = authorId;
  }

  validate() {
    if (!this.id)
      return false;
    else
      return true;
  }

}

export default BookEntity;
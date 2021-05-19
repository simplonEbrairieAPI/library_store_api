class BorrowEntity {

  constructor({ id, userId, bookId, transaction }) {
    this.id = id;
    this.userId = userId;
    this.bookId = bookId;
  }

}

export default BorrowEntity;
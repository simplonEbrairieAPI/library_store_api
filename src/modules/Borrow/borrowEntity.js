class BorrowEntity {

  constructor({ id, userId, bookId, transaction }) {
    this.id = id;
    this.userId = userId;
    this.resourceId = bookId;
    this.transaction = transaction;
  }

}

export default BorrowEntity;
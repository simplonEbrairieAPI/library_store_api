class BookRepository {
  constructor(bookDao) {
    this.bookDao = bookDao;
  }

  async findAllBooks() {
    return await this.bookDao.findAll();
  }
}

export default BookRepository;
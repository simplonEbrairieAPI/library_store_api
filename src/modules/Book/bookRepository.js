class BookRepository {

  constructor(bookDao) {
    this.bookDao = bookDao;
    // this.bcrypt = bcrypt;
    console.log('4,0', this.bookDao)

  }

  async findAllBooks() {
    console.log('4,1')
    return await this.bookDao.findAll();
  }

}

export default BookRepository;
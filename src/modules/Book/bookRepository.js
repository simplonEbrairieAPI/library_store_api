import Author from "../Author/authorDao";

class BookRepository {
  constructor(bookDao) {
    this.bookDao = bookDao;
  }

  async findAllBooks() {
    let data = await this.bookDao.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "editors",
        "authorId",
      ],
      order: [["id", "DESC"]],
      include: [
        {
          model: Author,
          attributes: ["firstName", "lastName"],
        },
      ],
      nest:true,
      raw:true
    });
    return data;
  }

  async findBookById(bookId) {
    return await this.bookDao.findOne({ where : { id: bookId} })
  }

  async getStockOfABook(bookId) {
    return await this.bookDao.findOne({ 
      attributes: [ "quantity" ], 
      where : { id: bookId} 
    })
  }

  async updateStock (bookId) {
  //
  }

}

export default BookRepository;
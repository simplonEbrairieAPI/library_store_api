import BookEntity from './bookEntity';
class BookService {
  constructor(bookRepository) {
    this.bookRepo = bookRepository;

    console.log('labas')
  }

  async getAll() {

    const books = await this.bookRepo.findAllBooks();

    return books.map((book) => new UserEntity(book));
  }


}
export default BookService;
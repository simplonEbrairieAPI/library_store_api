import BookEntity from './bookEntity';
class BookService {
  constructor({ bookRepository }) {
    this.bookRepo = bookRepository;
  }

  async getAll() {
    const books = await this.bookRepo.findAllBooks();
    return books.map((book) => new BookEntity(book));
  }
}
export default BookService;
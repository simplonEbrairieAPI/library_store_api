import BookEntity from './bookEntity';
class BookService {
  constructor({ bookRepository }) {
    this.bookRepo = bookRepository;
  }

  async getAll() {
    const books = await this.bookRepo.findAllBooks();
    return books;
  }

  async isBookAvailable(bookId) {
    const quantity = await this.bookRepo.getStockOfABook(BookId)
    if (quantity <= 0) return false
    return true
  }

  async incrementBookQuantity (bookId) {
    //
  }
}
export default BookService;
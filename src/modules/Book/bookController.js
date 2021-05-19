class BookController {
  constructor({ bookService }) {
    this.bookService = bookService;
  }

  getAll = async ({ res }) => {
    try {
      let books = await this.bookService.getAll();
      console.log("want to know if we are in the try of method getAll", books)
      res.status(200).json(books);
    } catch (err) {
      console.error("error in bookController.js", err.stack)
      res.status(400).json("big trouble to get all books");
    }
  }
}

export default BookController;
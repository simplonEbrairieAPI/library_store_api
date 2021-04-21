class BookController {

  constructor({ bookService }) {
    this.bookService = bookService;
  }

  getAll = async ({ res }) => {
    try {
      let users = await this.bookService.getAll();
      console.log("want to know if we are in the try of method getAll", books)
      res.status(200).json(books);
    } catch (err) {
      console.log("error in bookController.js .catch is functionnal ")
      res.status(400).json(err.message + "  " + "big trouble in Bookcontroller.js");
    }
  }
}

export default BookController;
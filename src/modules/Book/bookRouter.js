class BookRouter {
  constructor({ router, bookController }) {
    this.router = router;
    this.initializeRoutes({ bookController });
    return this.router;
  }

  initializeRoutes({ bookController }) {
    this.router.route('/books')
      .get(bookController.getAll)
    // .get((req, res) => {
    //   res.json({ message: " book ça va ?" })
    // })
  }
}

export default BookRouter;
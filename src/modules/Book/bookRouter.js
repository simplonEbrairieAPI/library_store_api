class BookRouter {
  constructor({ router, bookController }) {
    this.router = router;
    this.initializeRoutes({ bookController });
    return this.router;
  }

  initializeRoutes({ bookController }) {
    console.log("1")

    this.router.route('/users')
      .get(bookController.getAll)

    this.router.route('/')
      .get((req, res) => {
        res.json({ message: "YOOOO you are on the home page" })
      })
  }
}

export default BookRouter;




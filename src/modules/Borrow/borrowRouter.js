class BorrowRouter {
  constructor(router, borrowController) {
    this.router = router;
    this.initializeRoutes(borrowController)
    return this.router;
  }

  initializeRoutes( borrowController ) {
    this.router.route('/borrow/:userId')
      .get(borrowController.getAllLoansByUser)

    this.router.route('/borrow')
      .post(borrowController.create);
  }
}

export default BorrowRouter;
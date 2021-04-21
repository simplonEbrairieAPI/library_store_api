class ComicsRouter {
  constructor({ router, comicsController }) {
    this.router = router;
    this.initializeRoutes({ comicsController });
    return this.router;
  }

  initializeRoutes({ comicsController }) {
    this.router.route('/comics')
      .get(comicsController.getAll)
  }
}

export default ComicsRouter;

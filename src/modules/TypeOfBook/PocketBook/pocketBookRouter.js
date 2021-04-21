class PocketBookRouter {
  constructor({ router, pocketBookController }) {
    this.router = router;
    this.initializeRoutes({ pocketBookController });
    return this.router;
  }

  initializeRoutes({ pocketBookController }) {
    this.router.route('/pocketBooks')
      .get(pocketBookController.getAll)
  }
}

export default PocketBookRouter;

class NovelRouter {
  constructor({ router, novelController }) {
    this.router = router;
    this.initializeRoutes({ novelController });
    return this.router;
  }

  initializeRoutes({ novelController }) {
    this.router.route('/novel')
      .get(novelController.getAll)
  }
}

export default NovelRouter;

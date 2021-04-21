class MangaRouter {
  constructor({ router, mangaController }) {
    this.router = router;
    this.initializeRoutes({ mangaController });
    return this.router;
  }

  initializeRoutes({ mangaController }) {
    this.router.route('/mangas')
      .get(mangaController.getAll)
  }
}

export default MangaRouter;

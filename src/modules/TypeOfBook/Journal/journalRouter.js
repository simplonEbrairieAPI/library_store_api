class JournalRouter {
  constructor({ router, journalController }) {
    this.router = router;
    this.initializeRoutes({ journalController });
    return this.router;
  }

  initializeRoutes({ journalController }) {
    this.router.route('/journal')
      .get(journalController.getAll)
  }
}

export default JournalRouter;

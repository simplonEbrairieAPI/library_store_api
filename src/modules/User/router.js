class UserRouter {
  constructor({ router }) {
    this.router = router;
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.route('/users')
      .get((req, res) => {
        res.json({ message: "YOOOO you are on /users route" })
      })
  }
}

export default UserRouter;
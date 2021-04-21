class UserRouter {
  constructor({ router, userController }) {
    this.router = router;
    this.initializeRoutes({ userController });
    return this.router;
  }

  initializeRoutes({ userController }) {
    this.router.route('/users')
      .get(userController.getAll)
    this.router.route('/')
      .get((req, res) => {
        res.json({ message: "YOOOO you are on the home page" })
      })

    this.router.route('/users/:id')
      .get(userController.getOne)
  }
}

export default UserRouter;
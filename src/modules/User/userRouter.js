class UserRouter {
  constructor(router, userController, auth) {
    this.router = router;
    this.initializeRoutes(userController, auth);
    return this.router;
  }

  initializeRoutes(userController, auth) {
    this.router.route('/users')
      .get(auth.authenticate, userController.getAll)
      .post(userController.register);

    this.router.route('/user/authenticate')
      .get(userController.login);

    this.router.route('/users/:id')
      .get(auth.authenticate, userController.getOne)

    this.router.route('/')
      .get((req, res) => {
        res.json({ message: "YOOOO you are on the home page" })
      })
  }
}

export default UserRouter;
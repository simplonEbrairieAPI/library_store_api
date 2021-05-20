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
      .post(userController.login);

    this.router.route('/user/me')
      .get(auth.authenticate, userController.me);

    this.router.route('/user/:id')
      .get(auth.authenticate, userController.getOneById)

    this.router.route('/')
      .get((req, res) => {
        res.json({ message: "YOOOO you are on the home page" })
      })
  }
}

export default UserRouter;
class UserRouter {
  constructor({ router, userController }) {
    this.router = router;
    this.initializeRoutes({ userController });
    return this.router;
  }

  initializeRoutes({ userController }) {
    console.log("1")

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

  // initializeRoutes({ auth, userController }) {
    // this.router.route('/users')
      // .get(auth.authenticate, userController.getAll)
      // .post(userController.register);

    // this.router.route('/users/authenticate').post(userController.login);
  // }



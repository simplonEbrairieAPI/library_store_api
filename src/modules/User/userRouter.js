class UserRouter {
  constructor({ router, userController }) {
    this.router = router;
    this.initializeRoutes({ userController });
    return this.router;
  }

  initializeRoutes({ userController }) {
    this.router.route('/users')
      .get(userController.getAll)
    // .post(userController.register);


    this.router.route('/users/:id')
      .get(userController.getOne)



    this.router.route('/')
      .get((req, res) => {
        res.json({ message: "YOOOO you are on the home page" })
      })
  }
}

export default UserRouter;



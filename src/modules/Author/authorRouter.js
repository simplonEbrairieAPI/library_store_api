

class AuthorRouter {
  constructor({ router }) {
    this.router = router;
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {



    this.router.route('/author')
      .get((req, res) => {
        res.json({ message: "Hello Author ça va ?" })
      })
  }
}

export default AuthorRouter;

  // initializeRoutes({ auth, userController }) {
    // this.router.route('/users')
      // .get(auth.authenticate, userController.getAll)
      // .post(userController.register);

    // this.router.route('/users/authenticate').post(userController.login);
  // }



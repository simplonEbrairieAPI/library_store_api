class BookController {

  constructor({ bookService }) {
    this.bookService = bookService;
    // this.jwt = jwtService;
  }

  getAll = async ({ res }) => {
    console.log("2")
    try {
      let users = await this.bookService.getAll();
      console.log("want to know if we are in the try of method getAll", books)
      res.status(200).json(books);
    } catch (err) {
      console.log("error in bookController.js .catch is functionnal ")
      res.status(400).json(err.message + "  " + "big trouble in Bookcontroller.js");
    }
  }

  // register = async (req, res) => {
  //   try {
  //     const user = await this.userService.register({ ...req.body });
  //     res.status(201).json(user);
  //   }
  //   catch (err) {
  //     console.error(err);
  //     res.status(400).json(err.message);
  //   }
  // }

  // login = async (req, res) => {
  //   try {
  //     const user = await this.userService.login({ ...req.body });
  //     const token = await this.jwt.generateToken({ id: user.id });
  //     res.status(200).json(token);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(400).json(err.message);
  //   }
  // }

}

export default UserController;
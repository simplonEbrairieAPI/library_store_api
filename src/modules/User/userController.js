class UserController {

  constructor({ userService }) {
    this.userService = userService;
    // this.jwt = jwtService;
  }

  getAll = async ({ res }) => {
    console.log("2")
    try {
      let users = await this.userService.getAll();
      console.log("re ici", users)
      res.status(200).json(users);
    } catch (err) {
      console.log("2,5")
      res.status(400).json(err.message + "  " + "super gros problème");
    }
  }

  getOne = async (req,res) => {
    // console.log('find one user');
    // console.log(req.params.id);
    try {
      let findUser = req.params.id;
      // console.log(req.params.id);
      let user = await this.userService.getOne(findUser);
      res.status(200).json(user);
      

    } catch (err) {
      console.log('nobody\'s there');
      res.status(400).json('error in findoneuser', err.message);
    }
  };

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
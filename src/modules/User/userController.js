class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  getAll = async ({ res }) => {
    try {
      let users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  getOne = async (req, res) => {
    try {
      let findUser = req.params.id;
      let user = await this.userService.getOne(findUser);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json('error in findoneuser', err.message);
    }
  };

  register = async (req, res) => {
    try {
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(user);
    }
    catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }


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
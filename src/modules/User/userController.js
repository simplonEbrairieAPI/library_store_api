class UserController {
  constructor(userService, jwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  getAll = async (req, res, next) => {
    try {
      let users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (err) {
      // next(err)
      console.error(err);
      res.status(400).json(err.message);
    }
  }

  getOne = async (req, res, next) => {
    try {
      let findUser = req.params.id;
      let user = await this.userService.getOne(findUser);
      res.status(200).json(user);
    } catch (err) {
      // next(err)
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  register = async (req, res, next) => {
    try {
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(user);
    }
    catch (err) {
      // next(err)
      console.error(err);
      res.status(400).json(err.message);
    }
  }

  login = async (req, res) => {
    try {
      const user = await this.userService.login({ ...req.body });
      console.log("controller ---", req.body)
      const token = await this.jwtService.generateToken({ id: user.id });
      res.status(200).json(token);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }
}


export default UserController;
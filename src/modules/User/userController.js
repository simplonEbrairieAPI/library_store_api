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

  getOneById = async (req, res, next) => {
    try {
      let userId = req.params.id;
      let user = await this.userService.getOneById(userId);
      res.status(200).json(user);
    } catch (err) {
      // next(err)
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  register = async (req, res, next) => {
    try {
      const { email } = req.body
      const userExist = await this.userService.getOneByEmail(email)
      if (!userExist) {
        const user = await this.userService.register({ ...req.body });
        res.status(201).json({
          success: true,
          user: user
        });
      } else {
        res.status(200).json({
          success: false,
          error: "we already know this email..."
        });
      }
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
      if (!user) {
        res.status(200).json({
          success: false,
          error: "Email ou mot de passe incorrect"
        })
      } else {
        const token = await this.jwtService.generateToken({ id: user.id });
        res.status(200).cookie('token', token, {
          // expires: new Date(Date.now() + 300000), // milisecondes = 5 min
          secure: false, // set to true if your using https
          httpOnly: true,
        }).json({
          success: true,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          }
          // cookie: `Expires at ${new Date(Date.now() + 300000)}`
        });
      }
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  }

  me = async (req, res) => {
    try {
      const user = await this.userService.getOneById(req.currentUserId)
      res.status(200).json({
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      });
    }
    catch (err) {
      console.error(err);
      res.status(403).json(err.message);
    }
  }
}

export default UserController;
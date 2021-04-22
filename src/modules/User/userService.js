import UserEntity from './userEntity';
class UserService {
  constructor({ userRepository }) {
    this.userRepo = userRepository;
  }

  async getAll() {
    const users = await this.userRepo.findAllUsers();
    return users.map((user) => new UserEntity(user));
  }

  async getOne(findUser) {
    const user = await this.userRepo.findOneUser(findUser);
    return user
  }

  // async register(userData) {
  //   const userEntity = new UserEntity(userData);
  //   console.log("qjqjqjqqjqjqjqjqj register of USERSERVICE ", userEntity)
  //   // if (!userEntity.validate())
  //   //   throw new Error('User entity validation error: Missing parameters');

  //   const newUser = await this.userRepo.createUser(userEntity);
  //   console.log("newuser ca donne quoi service", newUser)

  //   return new UserEntity(newUser);
  // }


  // async register(userData) {
  //   const userEntity = new UserEntity(userData);
  //   if (!userEntity.validate())
  //     throw new this.ErrorHandler(400, 'Missing required email and password fields');

  //   const newUser = await this.userRepo.create(userEntity);
  //   await this.mailer.sendMail(userEntity);
  //   return new UserEntity(newUser);
  // }

  // async login(userData) {
  //   const userEntity = new UserEntity(userData);
  //   if (!userEntity.validate())
  //     throw new Error('User entity validation error: Missing parameters');

  //   const user = await this.userRepo.findByEmail(userEntity);
  //   if (!user)
  //     throw new Error('Account do not exist');

  //   const passwordMatch = await this.userRepo.compareHash(userEntity.password, user.password);
  //   if (!passwordMatch)
  //     throw new Error('Password do not match');

  //   return new UserEntity(user);
}

export default UserService;


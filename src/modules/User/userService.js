import UserEntity from './userEntity';

class UserService {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async getAll() {
    const users = await this.userRepo.findAllUsers();
    return users.map((user) => new UserEntity(user));
  }

  async getOneById(userId) {
    const user = await this.userRepo.findUserById(userId);
    return user
  }
  async getOneByEmail(email) {
    const user = await this.userRepo.findUserByEmail(email);
    return user
  }
  async register(userData) {
    const userEntity = new UserEntity({});
    // if (!userEntity.validateProfile() || !userEntity.validateLogin()) throw new Error('User entity validation error: Missing parameters')

    const newUser = await this.userRepo.createUser(userData);
    return new UserEntity(newUser);
  }

  async login(userData) {
    const userEntity = new UserEntity(userData);
    const user = await this.userRepo.findUserByEmail(userEntity.email);
    if (!user) {
      return false
    }
    const passwordCheck = await this.userRepo.compareHash(userEntity.password, user.password);
    if (!passwordCheck) {
      return false
    }

    return new UserEntity(user);
  }

}

export default UserService;
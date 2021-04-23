import UserEntity from './userEntity';

class UserService {
  constructor(userRepository) {
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

  async register(userData) {
    const userEntity = new UserEntity({});

    // if (!userEntity.validateProfile() || !userEntity.validateLogin()) throw new Error('User entity validation error: Missing parameters')


    const newUser = await this.userRepo.createUser(userData);
    return new UserEntity(newUser);
  }
}

export default UserService;
import bcrypt from "bcrypt"

class UserRepository {
  constructor(userDao) {
    this.userDao = userDao;

  }

  compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);

  async findAllUsers() {
    return await this.userDao.findAll();
  }

  async findUserById(findUser) {
    return await this.userDao.findOne({ where: { id: findUser } })
  }

  async findUserByEmail(findUser) {
    return await this.userDao.findOne({ where: { email: findUser.email } })
  }

  async createUser(userData) {
    const bcrypting = bcrypt.genSaltSync(10);
    userData.password = bcrypt.hashSync(userData.password, bcrypting);
    return await this.userDao.create(userData);
  }
}
export default UserRepository;
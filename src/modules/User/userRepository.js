import bcrypt from "bcrypt"

class UserRepository {
  constructor(userDao) {
    this.userDao = userDao;
  }

  async findAllUsers() {
    return await this.userDao.findAll();
  }

  async findOneUser(findUser) {
    return await this.userDao.findOne({ where: { id: findUser } })
  }

  async createUser(userData) {
    const bcrypting = bcrypt.genSaltSync(10);
    userData.password = bcrypt.hashSync(userData.password, bcrypting);
    return await this.userDao.create(userData);
  }
}
export default UserRepository;
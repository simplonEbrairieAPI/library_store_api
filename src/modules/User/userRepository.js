class UserRepository {
  constructor(userDao) {
    this.userDao = userDao;
  }

  async findAllUsers() {
    return await this.userDao.findAll();
  }

  async findOneUser(findUser) {
    return await this.userDao.findOne({where: {id:findUser}})
  }

  // async create(userEntity) {
  // const salt = this.bcrypt.genSaltSync(10);
  // userEntity.password = this.bcrypt.hashSync(userEntity.password, salt);
  // return await this.userDAO.create(userEntity);
  // }

  // async findByEmail(userEntity) {
  // return await this.userDAO.findOne({where: {email: userEntity.email}});
  // }

  // compareHash = async (password, hash) => await this.bcrypt.compareSync(password, hash);
}

export default UserRepository;
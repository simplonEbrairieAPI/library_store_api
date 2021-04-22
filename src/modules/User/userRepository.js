class UserRepository {
  constructor({ userDao, bcrypt }) {
    this.userDao = userDao;
    this.bcrypt = bcrypt;
  }

  async findAllUsers() {
    console.log("ok")
    return await this.userDao.findAll();
  }

  async findOneUser(findUser) {
    return await this.userDao.findOne({ where: { id: findUser } })
  }

  // async createUser(userEntity) {
  //   console.log('CreateUser of UserRepository here')
  //   // const salt = this.bcrypt.genSaltSync(10);
  //   // userEntity.password = this.bcrypt.hashSync(userEntity.password, salt);

  //   console.log('passage de parametre entity', typeof userEntity)
  //   console.log('------')
  //   console.log(userEntity.password)
  //   console.log('__________________ 1 2 3 soleil')
  //   // console.log(await this.userDAO.create(userEntity))
  //   console.log('salut')
  //   return await this.userDAO.create(userEntity);
  //   console.log('')
  // }

  // async findByEmail(userEntity) {
  // return await this.userDAO.findOne({where: {email: userEntity.email}});
  // }

  // compareHash = async (password, hash) => await this.bcrypt.compareSync(password, hash);
}

export default UserRepository;


// class UserRepository {

//   constructor({ userDao, bcrypt }) {
//     this.userDAO = userDao;
//     this.bcrypt = bcrypt;
//   }

//   async findAll() {
//     return await this.userDAO.findAll();
//   }

//   async create(userEntity) {
//     const salt = this.bcrypt.genSaltSync(10);
//     userEntity.password = this.bcrypt.hashSync(userEntity.password, salt);
//     return await this.userDAO.create(userEntity);
//   }

//   async findByEmail(userEntity) {
//     return await this.userDAO.findOne({ where: { email: userEntity.email } });
//   }

//   compareHash = async (password, hash) => await this.bcrypt.compareSync(password, hash);

// }

// export default UserRepository;
// class UserRepository {

//   constructor(userDao) {
//     this.userDao = userDao;
//     // this.bcrypt = bcrypt;
//     console.log('4,0', this.userDao)

//   }

//   async findAllUsers() {
//     console.log('4,1')
//     return await this.userDao.findAll();
//   }
//   findAllBookByAuthor

//   // async create(userEntity) {
//   // const salt = this.bcrypt.genSaltSync(10);
//   // userEntity.password = this.bcrypt.hashSync(userEntity.password, salt);
//   // return await this.userDAO.create(userEntity);
//   // }

//   // async findByEmail(userEntity) {
//   // return await this.userDAO.findOne({where: {email: userEntity.email}});
//   // }

//   // compareHash = async (password, hash) => await this.bcrypt.compareSync(password, hash);

// }

// export default UserRepository;
// import UserEntity from './userEntity';
// class UserService {
//   constructor(userRepository) {
//     this.userRepo = userRepository;
//     // this.mailer = mailer;
//   }

//   async getAll() {
//     console.log("3")
//     const users = await this.userRepo.findAllUsers();
//     console.log("3,5", users)
//     return users.map((user) => new UserEntity(user));
//   }

//   // async register(userData) {
//   //   const userEntity = new UserEntity(userData);
//   //   if (!userEntity.validate())
//   //     throw new Error('User entity validation error: Missing parameters');

//   //   const newUser = await this.userRepo.create(userEntity);
//   //   await this.mailer.sendMail(userEntity);
//   //   return new UserEntity(newUser);
//   // }

//   // async login(userData) {
//   //   const userEntity = new UserEntity(userData);
//   //   if (!userEntity.validate())
//   //     throw new Error('User entity validation error: Missing parameters');

//   //   const user = await this.userRepo.findByEmail(userEntity);
//   //   if (!user)
//   //     throw new Error('Account do not exist');

//   //   const passwordMatch = await this.userRepo.compareHash(userEntity.password, user.password);
//   //   if (!passwordMatch)
//   //     throw new Error('Password do not match');

//   //   return new UserEntity(user);
//   // }
// }
// export default UserService;
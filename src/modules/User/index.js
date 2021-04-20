import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';

import User from './userDao';
import UserRepository from './userRepository';
import UserService from './userService';
import UserController from "./userController"
import UserRouter from './userRouter';

const router = Router();
const userDao = User.init(db.sequelize, DataTypes);
console.log("1.0 cou", typeof userDao)
const userRepository = new UserRepository(userDao);
const userService = new UserService(userRepository);
const userController = new UserController({ userService })
const userRouter = new UserRouter({ router, userController });

export { userDao, userService };
export default userRouter;
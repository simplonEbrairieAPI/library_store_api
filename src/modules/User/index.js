import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';
import bcrypt from "bcrypt"

import UserDao from './userDao';

import UserRepository from './userRepository';
import UserService from './userService';
import UserController from "./userController"
import UserRouter from './userRouter';

const router = Router();

const userRepository = new UserRepository({ userDao: UserDao, bcrypt });
const userService = new UserService({ userRepository });
const userController = new UserController({ userService })
const userRouter = new UserRouter({ router, userController });

export { UserDao, userService };
export default userRouter;
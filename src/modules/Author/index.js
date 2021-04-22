import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';

import AuthorDao from './authorDao';
// import UserRepository from './userRepository';
// import UserService from './userService';
// import UserController from "./userController"
import AuthorRouter from './authorRouter';

const router = Router();
const authorDao = AuthorDao.init(db.sequelize, DataTypes);
// const userRepository = new UserRepository(userDao);
// const userService = new UserService(userRepository);
// const userController = new UserController({ userService })

const authorRouter = new AuthorRouter({ router });

export { authorDao };

export default authorRouter;
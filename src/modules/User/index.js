import { Router } from 'express';
// import { DataTypes } from 'sequelize/types';
import db from '\src\config\database.js';

import User from './dao';
import UserRouter from './router';

const router = Router();
const userDao = User.init(db.sequelize)
const userRouter = new UserRouter({ router });

export { userDao };

export default userRouter;
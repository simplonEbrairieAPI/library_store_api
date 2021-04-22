import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';

import AuthorDao from './authorDao';
import AuthorRouter from './authorRouter';

const router = Router();

// const authorDao = AuthorDao.init(db.sequelize, DataTypes);

const authorRouter = new AuthorRouter({ router });

export { AuthorDao };

export default authorRouter;
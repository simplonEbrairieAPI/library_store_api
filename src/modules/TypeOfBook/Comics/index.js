import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../../config/database';

import Type_Comics from './type_ComicsDao';
import ComicsRepository from './comicsRepository';
import ComicsService from './comicsService';
import ComicsController from './comicsController';
import ComicsRouter from './comicsRouter';

const router = Router();
const comicsDao = Type_Comics.init(db.sequelize, DataTypes);
const comicsRepository = new ComicsRepository(comicsDao);
const comicsService = new ComicsService(comicsRepository);
const comicsController = new ComicsController({ comicsService })
const comicsRouter = new ComicsRouter({ router, comicsController });

export { comicsDao, comicsService };
export default comicsRouter;
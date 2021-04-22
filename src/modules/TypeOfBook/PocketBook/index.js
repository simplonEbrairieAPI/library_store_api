import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../../config/database';

import Type_PocketBook from './type_PocketBookDao';
import PocketBookRepository from './pocketBookRepository';
import PocketBookService from './pocketBookService';
import PocketBookController from './pocketBookController';
import PocketBookRouter from './pocketBookRouter';

const router = Router();
const pocketBookDao = Type_PocketBook.init(db.sequelize, DataTypes);
const pocketBookRepository = new PocketBookRepository(pocketBookDao);
const pocketBookService = new PocketBookService(pocketBookRepository);
const pocketBookController = new PocketBookController({ pocketBookService })
const pocketBookRouter = new PocketBookRouter({ router, pocketBookController });

export { pocketBookDao, pocketBookService };
export default pocketBookRouter;
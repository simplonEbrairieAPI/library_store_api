import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../../config/database';

import Type_Novel from './type_NovelDao';
import NovelRepository from './novelRepository';
import NovelService from './novelService';
import NovelController from './novelController';
import NovelRouter from './novelRouter';

const router = Router();
const novelDao = Type_Novel.init(db.sequelize, DataTypes);
const novelRepository = new NovelRepository(novelDao);
const novelService = new NovelService(novelRepository);
const novelController = new NovelController({ novelService })
const novelRouter = new NovelRouter({ router, novelController });

export { novelDao, novelService };
export default novelRouter;
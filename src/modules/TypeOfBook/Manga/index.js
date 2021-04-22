import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../../config/database';

import Type_Manga from './type_MangaDao';
import MangaRepository from './mangaRepository';
import MangaService from './mangaService';
import MangaController from './mangaController';
import MangaRouter from './mangaRouter';

const router = Router();
const mangaDao = Type_Manga.init(db.sequelize, DataTypes);
const mangaRepository = new MangaRepository(mangaDao);
const mangaService = new MangaService(mangaRepository);
const mangaController = new MangaController({ mangaService })
const mangaRouter = new MangaRouter({ router, mangaController });

export { mangaDao, mangaService };
export default mangaRouter;
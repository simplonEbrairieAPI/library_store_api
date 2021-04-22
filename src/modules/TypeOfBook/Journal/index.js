import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../../config/database';

import Type_Journal from './type_JournalDao';
import JournalRepository from './journalRepository';
import JournalService from './journalService';
import JournalController from './journalController';
import JournalRouter from './journalRouter';

const router = Router();
const journalDao = Type_Journal.init(db.sequelize, DataTypes);
const journalRepository = new JournalRepository(journalDao);
const journalService = new JournalService(journalRepository);
const journalController = new JournalController({ journalService })
const journalRouter = new JournalRouter({ router, journalController });

export { journalDao, journalService };
export default journalRouter;
import { Router } from 'express';

import BorrowDao from './borrowDao';
import BorrowRepository from './borrowRepository';
import BorrowService from './borrowService';
import BorrowController from './borrowController';
import BorrowRouter from './borrowRouter';

const router = Router();

const borrowRepository = new BorrowRepository(BorrowDao);
const borrowService = new BorrowService( borrowRepository );
const borrowController = new BorrowController( borrowService );
const borrowRouter = new BorrowRouter(router, borrowController );

export { BorrowDao };
export default borrowRouter;
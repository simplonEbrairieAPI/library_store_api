import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';

import BookDao from './bookDao';
import BookRepository from './bookRepository';
import BookService from './bookService';
import BookController from "./bookController"
import BookRouter from './bookRouter';

const router = Router();

// const bookDao = BookDao.init(db.sequelize, DataTypes);

const bookRepository = new BookRepository(BookDao);
const bookService = new BookService(bookRepository);
const bookController = new BookController({ bookService })
const bookRouter = new BookRouter({ router, bookController });

export { BookDao, bookService };
export default bookRouter;
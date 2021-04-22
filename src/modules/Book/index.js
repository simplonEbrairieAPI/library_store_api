import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';

import Book from './bookDao';
import BookRepository from './bookRepository';
import BookService from './bookService';
import BookController from "./bookController"
import BookRouter from './bookRouter';

const router = Router();

const bookDao = Book.init(db.sequelize, DataTypes);
const bookAssociation = Book.associate(db.sequelize.models);

const bookRepository = new BookRepository(bookDao);
const bookService = new BookService(bookRepository);
const bookController = new BookController({ bookService })
const bookRouter = new BookRouter({ router, bookController });

export { bookDao, bookService };
export default bookRouter;
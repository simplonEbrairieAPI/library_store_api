import userRouter from './User';
import authorRouter from './Author';
import bookRouter from './Book';
import comicsRouter from './TypeOfBook/Comics';
import journalRouter from './TypeOfBook/Journal';
import mangaRouter from './TypeOfBook/Manga';
import novelRouter from './TypeOfBook/Novel';
import pocketBookRouter from './TypeOfBook/PocketBook';

//Associations 
class Associations {

  static associate(book) {
    // define association here

    return this;
  }
}

const routes = 
  [
    userRouter, 
    comicsRouter, 
    journalRouter, 
    mangaRouter,
    novelRouter, 
    pocketBookRouter, 
    authorRouter,
    bookRouter
  ];

export default routes;
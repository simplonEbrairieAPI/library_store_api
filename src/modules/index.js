// Routes
import userRouter from './User';
import authorRouter from './Author';
import bookRouter from './Book';
import comicsRouter from './TypeOfBook/Comics';
import journalRouter from './TypeOfBook/Journal';
import mangaRouter from './TypeOfBook/Manga';
import novelRouter from './TypeOfBook/Novel';
import pocketBookRouter from './TypeOfBook/PocketBook';

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


// Associations 
import { UserDao } from './User';
import { AuthorDao } from './Author';
import { BookDao } from './Book';
import { ComicsDao } from './TypeOfBook/Comics';
import { JournalDao } from './TypeOfBook/Journal';
import { MangaDao } from './TypeOfBook/Manga';
import { NovelDao } from './TypeOfBook/Novel';
import { PocketBookDao } from './TypeOfBook/PocketBook';

// class Associations {
//   static associate() {
//     AuthorDao.belongsToMany(BookDao, { through: "copyright" });
//     BookDao.belongsToMany(AuthorDao, { through: "copyright" });
//     return this;
//   }
// }

// Associations.associate()

export default routes;
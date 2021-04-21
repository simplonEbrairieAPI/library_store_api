import userRouter from './User';
import authorRouter from './Author';
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
    authorRouter
  ];

export default routes;
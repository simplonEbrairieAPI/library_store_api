import userRouter from './User';
import authorRouter from './Author';
import bookRouter from './Book';

//Associations 
class Associations {

  static associate(book) {
    // define association here

    return this;
  }
}


const routes = [userRouter, authorRouter, bookRouter];
export default routes;
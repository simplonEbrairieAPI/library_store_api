import User from "../User/userDao";
import Book from "../Book/bookDao";

class BorrowRepository {
  constructor(borrowDao) {
    this.borrowDao = borrowDao;
  }

  async findAllLoansByUser(findUser) {
    const data = await this.borrowDao.findAll({
      where: { userId: findUser },
      order: [["id", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["email", "firstName"],
        },
        {
          model : Book, 
          attributes: ["title", "description","quantity"]
        }
      ],
      nest:true,
      raw:true
    });
    return data;
  }
  
  async create(borrowEntity) {
    return await this.borrowDao.create(borrowEntity);
  }
}

export default BorrowRepository;
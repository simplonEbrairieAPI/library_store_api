import BorrowEntity from './borrowEntity';

class BorrowService {
  constructor(borrowRepository) {
    this.borrowRepo = borrowRepository;
  }

  async getAllLoansByUser(findUser) {
    const loans = await this.borrowRepo.findAllLoansByUser(findUser);
    return loans;
  }

  async create(borrowData) {
    const borrowEntity = new BorrowEntity(borrowData);
    const newLoan = await this.borrowRepo.create(borrowEntity);
    return new BorrowEntity(newLoan);
  }
}

export default BorrowService;
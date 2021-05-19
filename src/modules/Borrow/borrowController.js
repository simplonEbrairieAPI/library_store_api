class BorrowController {
  constructor( borrowService ) {
    this.borrowService = borrowService;
  }

  getAllLoansByUser = async ( req, res ) => {
    try {
      let findUser = req.params.userId;
      let borrows = await this.borrowService.getAllLoansByUser(findUser);
      res.status(200).json(borrows);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }

  create = async (req, res) => {
    try {
      const borrowItem = await this.borrowService.create({ ...req.body });
      res.status(201).json(borrowItem);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }
}

export default BorrowController;
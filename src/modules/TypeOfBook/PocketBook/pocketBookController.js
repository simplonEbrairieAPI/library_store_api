class PocketBookController {

  constructor({ pocketBookService }) {
    this.pocketBookService = pocketBookService;
  }

  getAll = async ({ res }) => {
    try {
      let pocketBooks = await this.pocketBookService.getAll();
      res.status(200).json(pocketBooks);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

export default PocketBookController;
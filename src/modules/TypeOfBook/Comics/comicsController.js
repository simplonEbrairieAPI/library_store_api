class ComicsController {

  constructor({ comicsService }) {
    this.comicsService = comicsService;
  }

  getAll = async ({ res }) => {
    try {
      let comicsS = await this.comicsService.getAll();
      res.status(200).json(comicsS);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

export default ComicsController;
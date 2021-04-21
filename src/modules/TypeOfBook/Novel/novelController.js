class NovelController {

  constructor({ novelService }) {
    this.novelService = novelService;
  }

  getAll = async ({ res }) => {
    try {
      let novels = await this.novelService.getAll();
      res.status(200).json(novels);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

export default NovelController;
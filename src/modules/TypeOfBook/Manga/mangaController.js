class MangaController {

  constructor({ mangaService }) {
    this.mangaService = mangaService;
  }

  getAll = async ({ res }) => {
    try {
      let mangas = await this.mangaService.getAll();
      res.status(200).json(mangas);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

export default MangaController;
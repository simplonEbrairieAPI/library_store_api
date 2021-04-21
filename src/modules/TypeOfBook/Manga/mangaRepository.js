class MangaRepository {

  constructor(mangaDao) {
    this.mangaDao = mangaDao;
  }

  async findAllMangas() {
    return await this.mangaDao.findAll();
  }
}

export default MangaRepository;
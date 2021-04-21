class NovelRepository {

  constructor(novelDao) {
    this.novelDao = novelDao;
  }

  async findAllNovels() {
    return await this.novelDao.findAll();
  }
}

export default NovelRepository;
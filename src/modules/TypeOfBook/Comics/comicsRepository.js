class ComicsRepository {

  constructor(comicsDao) {
    this.comicsDao = comicsDao;
  }

  async findAllComicsS() {
    return await this.comicsDao.findAll();
  }
}

export default ComicsRepository;
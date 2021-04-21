class PocketBookRepository {

  constructor(pocketBookDao) {
    this.pocketBookDao = pocketBookDao;
  }

  async findAllPocketBook() {
    return await this.pocketBookDao.findAll();
  }
}

export default PocketBookRepository;
class JournalRepository {

  constructor(journalDao) {
    this.journalDao = journalDao;
  }

  async findAllJournals() {
    return await this.journalDao.findAll();
  }
}

export default JournalRepository;
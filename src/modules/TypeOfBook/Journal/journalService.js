import JournalEntity from './journalEntity';
class JournalService {
  constructor(journalRepository) {
    this.journalRepo = journalRepository;
  }

  async getAll() {
    const users = await this.journalRepo.findAllJournals();
    return users.map((journal) => new JournalEntity(journal));
  }
}
export default JournalService;
import PocketBookEntity from './pocketBookEntity';
class PocketBookService {
  constructor(pocketBookRepository) {
    this.pocketBookRepo = pocketBookRepository;
  }

  async getAll() {
    const users = await this.pocketBookRepo.findAllPocketBook();
    return users.map((pocket) => new PocketBookEntity(pocket));
  }
}
export default PocketBookService;
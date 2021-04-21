import ComicsEntity from './comicsEntity';
class ComicsService {
  constructor(comicsRepository) {
    this.comicsRepo = comicsRepository;
  }

  async getAll() {
    const users = await this.comicsRepo.findAllComicsS();
    return users.map((comic) => new ComicsEntity(comic));
  }
}
export default ComicsService;
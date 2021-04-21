import NovelEntity from './novelEntity';
class NovelService {
  constructor(novelRepository) {
    this.novelRepo = novelRepository;
  }

  async getAll() {
    const users = await this.novelRepo.findAllNovels();
    return users.map((novel) => new NovelEntity(novel));
  }
}
export default NovelService;
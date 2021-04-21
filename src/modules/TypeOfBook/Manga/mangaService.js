import MangaEntity from './mangaEntity';
class MangaService {
  constructor(mangaRepository) {
    this.mangaRepo = mangaRepository;
  }

  async getAll() {
    const users = await this.mangaRepo.findAllMangas();
    return users.map((manga) => new MangaEntity(manga));
  }
}
export default MangaService;
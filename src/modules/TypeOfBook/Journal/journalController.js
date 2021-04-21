class JournalController {

  constructor({ journalService }) {
    this.journalService = journalService;
  }

  getAll = async ({ res }) => {
    try {
      let journals = await this.journalService.getAll();
      res.status(200).json(journals);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

export default JournalController;
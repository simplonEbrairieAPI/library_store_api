class Server {
  constructor({ express, routes, middlewares }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeApplicationRouter(routes);
    this.initializeMiddlewares(middlewares);
  }

  initializeBodyParsing(express) {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  initializeMiddlewares({ csrf, morgan }) {
    this.app.use(morgan('dev'));
    this.app.get('/csrf', csrf, (req, res) => { res.status(200).json(req.csrfToken()) })
  }

  listen(port) {
    this.app.listen(port, () => console.log(`application started on port : ${port}`));
  }
}

export default Server;
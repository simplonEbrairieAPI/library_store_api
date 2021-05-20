import cors from 'cors'

class Server {
  constructor({ express, routes, middlewares }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeMiddlewares(middlewares);
    this.initializeApplicationRouter(routes); // INFO Initialiser les routes en dernier ! (après les middlewares et le parsing)
  }

  initializeBodyParsing(express) {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors({
      origin: 'http://localhost:1234',
      credentials: true,
    }))
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  initializeMiddlewares({ csrf, cookieParser, morgan }) {
    this.app.use(cookieParser())
    this.app.use(morgan('dev'));

    // this.app.use(morgan('combined',{stream:logger.stream}));
    this.app.get('/csrf', csrf, (req, res) => { res.status(200).json(req.csrfToken()) })
  }

  listen(port) {
    this.app.listen(port, () => console.log(`application started on port : ${port}`));
  }
}

export default Server;
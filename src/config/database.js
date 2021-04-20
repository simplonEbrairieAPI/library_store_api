import { Sequelize } from 'sequelize';
import config from './env';


//Modules
import { userDao } from '../modules/User';

const sequelize = new Sequelize(
  config.database_name,
  config.database_password,
  config.database_username,
  {
    host: "127.0.0.1",
    port: config.database_port,
    dialect: "mysql"
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Connection to ${config.database} has been established successfully.`
    );
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = UserModel(sequelize, Sequelize);

db.sequelize.sync();

export default db;
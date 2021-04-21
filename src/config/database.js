import { Sequelize } from 'sequelize';
import config from './env';

const sequelize = new Sequelize(
  config.database_name,
  config.database_user,
  config.database_password,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: config.database_port,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Connection to ${config.database_name} has been established successfully.`
    );
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const db = { sequelize, Sequelize }

// db.sequelize.sync();


export default db;
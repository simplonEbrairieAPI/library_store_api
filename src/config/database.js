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

const db = { sequelize, Sequelize }

export default db;
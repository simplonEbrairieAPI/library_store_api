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

// Config locate each Dao to do Association
import fs from 'fs';
import path from 'path';
const basename = path.basename(__filename);

const allModulesFolders = fs.readdirSync('./src/modules/');
allModulesFolders.forEach(folder => {

  console.log("1 --- each folder in modules",folder)

  if(folder !== 'index.js'){
    fs.readdirSync("./src/modules/"+folder)
      .filter((file) => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-6) === 'Dao.js'
        ); 
      })
      .forEach((file) => {
        const model = path.join(
          `./src/modules/${folder}`,
          file
        )
        db[model.name] = model;
        console.log("2 --- is it the correct dao file for model :",model)
      })
  }});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// db.sequelize.sync();

export default db;
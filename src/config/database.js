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
  if (folder !== 'index.js') {
    fs.readdirSync("./src/modules/" + folder)
      .filter((file) => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-6) === 'Dao.js'
        );
      })
      .forEach((file) => {
        const model = require(path.join(
          `../modules/${folder}/${file}`
        ))
        const fileName = (file.charAt(0).toUpperCase() + file.slice(1)).replace("Dao.js", "");
        db.sequelize.models[fileName] = model.default;
      })
  } if (folder === 'TypeOfBook') {
    const typeOfBookFolder = fs.readdirSync("./src/modules/TypeOfBook")
    typeOfBookFolder.forEach(folderOfFolder => {
      if (folder !== 'index.js') {
        fs.readdirSync("./src/modules/TypeOfBook/" + folderOfFolder)
          .filter((file) => {
            return (
              file.indexOf('.') !== 0 &&
              file !== basename &&
              file.slice(-6) === 'Dao.js'
            );
          })
          .forEach((file) => {
            const model = require(path.join(
              `../modules/TypeOfBook/${folderOfFolder}/${file}`
            ))
            const fileName = (file.charAt(0).toUpperCase() + file.slice(1)).replace("Dao.js", "")
            db.sequelize.models[fileName] = model.default
          })
      }
    })
  }
});

Object.keys(db.sequelize.models).forEach((modelName) => {
  if (db.sequelize.models[modelName]) {
    db.sequelize.models[modelName].associate(db.sequelize.modelName);
  }
});

// db.sequelize.sync({ force: true });

export default db;
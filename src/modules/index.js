import userRouter from "./User";
import authorRouter from "./Author";
import bookRouter from "./Book";
import comicsRouter from "./TypeOfBook/Comics";
import journalRouter from "./TypeOfBook/Journal";
import mangaRouter from "./TypeOfBook/Manga";
import novelRouter from "./TypeOfBook/Novel";
import pocketBookRouter from "./TypeOfBook/PocketBook";
import borrowRouter from "./Borrow";

import config from "../config/env";
import db from "../config/database";
import fs from "fs";
import path from "path";

const basename = path.basename(__filename);

const allModulesFolders = fs.readdirSync("./src/modules/");
allModulesFolders.forEach((folder) => {
  if (folder !== "index.js") {
    fs.readdirSync("./src/modules/" + folder)
      .filter((file) => {
        return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-6) === "Dao.js"
        );
      })
      .forEach((file) => {
        const model = require(path.join(`../modules/${folder}/${file}`));
        const fileName = (file.charAt(0).toUpperCase() + file.slice(1)).replace(
          "Dao.js",
          ""
        );
        db.sequelize.models[fileName] = model.default;
      });
  }
  if (folder === "TypeOfBook") {
    const typeOfBookFolder = fs.readdirSync("./src/modules/TypeOfBook");
    typeOfBookFolder.forEach((folderOfFolder) => {
      if (folder !== "index.js") {
        fs.readdirSync("./src/modules/TypeOfBook/" + folderOfFolder)
          .filter((file) => {
            return (
              file.indexOf(".") !== 0 &&
              file !== basename &&
              file.slice(-6) === "Dao.js"
            );
          })
          .forEach((file) => {
            const model = require(path.join(
              `../modules/TypeOfBook/${folderOfFolder}/${file}`
            ));
            const fileName = (
              file.charAt(0).toUpperCase() + file.slice(1)
            ).replace("Dao.js", "");
            db.sequelize.models[fileName] = model.default;
          });
      }
    });
  }
});

Object.keys(db.sequelize.models).forEach((modelName) => {
  if (db.sequelize.models[modelName]) {
    db.sequelize.models[modelName].associate(db.sequelize.models);
  }
});

db.sequelize
  .authenticate()
  // .sync({ force: true })
  .then(() => {
    console.log(
      `Connection to ${config.database_name} has been established successfully.`
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const routes = [
  userRouter,
  comicsRouter,
  journalRouter,
  mangaRouter,
  novelRouter,
  pocketBookRouter,
  authorRouter,
  bookRouter,
  borrowRouter,
];

export default routes;

import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class Book extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: DataTypes.STRING,
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
        editors: DataTypes.STRING,
        authorId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
      }, { sequelize, modelName: 'Book', freezeTableName: true, timestamps: false }
    );
  }

  static associate(models) {
    this.belongsTo(models.Author,
      {
        foreignKey: {
          name: "authorId",
          as: "Author"
        }
      })
    return this;
  }
};

Book.init(db.sequelize, DataTypes);

export default Book;
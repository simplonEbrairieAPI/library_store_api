import { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        editors: DataTypes.STRING,
        authorId: DataTypes.INTEGER,
      }, { sequelize, modelName: 'Book' }
    );
  }

  static associate(models) {

    this.belongsTo(models.Author, 
      {
        foreignKey: {
          name: "authorId",
        }
      });

    return this;

  }
};

export default Book;
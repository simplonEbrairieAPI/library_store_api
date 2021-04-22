import { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        editors: DataTypes.STRING,
      }, { sequelize, modelName: 'Book' }
    );
  }
  static associate() {
    // define association here
    Book.belongsToMany(Author, { through: Copyright });
    return this;
  }
};

export default Book;
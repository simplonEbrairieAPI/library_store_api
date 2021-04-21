import { Model } from 'sequelize';


class Author extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
      }, { sequelize, modelName: 'Author' }
    );
  }
  static associate(book) {
    // define association here

    return this;
  }
};

export default Author;
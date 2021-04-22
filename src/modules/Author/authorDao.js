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
  static associate() {
    // define association here
    Author.belongsToMany(Book, { through: Copyright });

    return this;
  }
};

export default Author;
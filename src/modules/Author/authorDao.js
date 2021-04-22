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
  static associate(models) {
    // this.belongsTo(models.Book);
    // define association here
    // this.belongsToMany(models.Book, { through: "Copyright" });
    return this;
  }
};

export default Author;
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
    // console.log("bababababa", models)
    // define association here
    // this.belongsTo(models.Author, { through: Copyright });
    // this.belongsTo(models.Author, {
    //   as: "author",
    //   foreignKey: 'authorId'
    // });

    return this;

  }
};

export default Book;
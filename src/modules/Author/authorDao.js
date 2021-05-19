import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class Author extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
      }, { sequelize, modelName: 'Author', freezeTableName: true, timestamps: false }
    );
  }
  static associate(models) {
    // this.hasMany(models.Book, {
    //   foreignKey: {
    //     name: "id",
    //     as: "Book"
    //   }
    // });

    // this.belongsToMany(models.Book, { through: "Copyright" });
    return this;
  }
};

Author.init(db.sequelize, DataTypes);

export default Author;
import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class BorrowDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
        bookId: DataTypes.INTEGER,
      },
      { sequelize, modelName: 'Borrow', freezeTableName: true, timestamps: false }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        as: "User"
      }
    })
    this.belongsTo(models.Book, {
      foreignKey: {
        name: "bookId",
        as: "Book"
      }
    })
    return this;
  }

};

BorrowDao.init(db.sequelize);

export default BorrowDao;
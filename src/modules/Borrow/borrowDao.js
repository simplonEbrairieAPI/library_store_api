import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class BorrowDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
        bookId: DataTypes.INTEGER,
        transaction: DataTypes.STRING,
      },
      { sequelize, modelName: 'Borrow' }
    );
  }
  static associate(models) {
    //define association here

    // this.belongsTo(
    //     models.UserDao,{
    //       foreignKey: "userId",
    //     }
    //   );
    this.hasMany(models.BookDao, {
      foreignKey: {
        name: "bookId",
      }
    });
    return this;
  }

};

BorrowDao.init(db.sequelize);

export default BorrowDao;
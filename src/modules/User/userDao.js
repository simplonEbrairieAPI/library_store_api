import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
      }, { sequelize, modelName: 'User', freezeTableName: true, timestamps: false }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

User.init(db.sequelize, DataTypes);

export default User;


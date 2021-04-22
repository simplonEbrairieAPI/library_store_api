import { Model } from 'sequelize';
import db from '../../config/database';
import { DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
      }, { sequelize, modelName: 'User' }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

User.init(db.sequelize, DataTypes);
User.associate(db.sequelize.models);

export default User;


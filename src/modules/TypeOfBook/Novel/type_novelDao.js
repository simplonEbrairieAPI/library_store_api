import { Model } from 'sequelize';

class Type_Novel extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        volume: DataTypes.STRING,
      }, { sequelize, modelName: 'Type_Novel' }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

export default Type_Novel;
import { Model } from 'sequelize';

class Type_Journal extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        frequency: DataTypes.STRING,
        topic: DataTypes.STRING,
      }, { sequelize, modelName: 'Type_Journal' }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

export default Type_Journal;
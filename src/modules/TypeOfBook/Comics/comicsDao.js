import { Model } from 'sequelize';

class Type_Comics extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        collection: DataTypes.STRING,
      }, { sequelize, modelName: 'Type_Comics' }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

export default Type_Comics;
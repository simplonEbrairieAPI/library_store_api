import { Model } from 'sequelize';

class Type_PocketBook extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        collection: DataTypes.STRING,
      }, { sequelize, modelName: 'Type_PocketBook' }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

export default Type_PocketBook;
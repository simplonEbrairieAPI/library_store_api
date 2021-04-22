import { Model } from 'sequelize';

class Type_Manga extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        chapitre: DataTypes.STRING,
        anim: DataTypes.BOOLEAN,
      }, { sequelize, modelName: 'Type_Manga' }
    );
  }
  static associate(models) {
    // define association here

    return this;
  }
};

export default Type_Manga;
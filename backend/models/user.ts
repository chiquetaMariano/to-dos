import { Model } from "sequelize";

export interface UserAttributes {
  id: number;
  fullname: string;
  email: string;
  password: string;
}

const User = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    fullname!: string;
    email!: string;
    password!: string;
    static associate(models: any) {
      // define association here
      User.hasMany(models.Todo)
    }
  }
  User.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    fullname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

// In order to work correctly, we must use commonjs exports, not ES6
module.exports = User;
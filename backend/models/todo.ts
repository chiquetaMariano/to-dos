import { Model } from "sequelize";

interface TodoAttributes {
  id: number;
  description: string;
  completed: boolean;
}

const Todo = (sequelize: any, DataTypes: any) => {
  class Todo extends Model<TodoAttributes> implements TodoAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    description!: string;
    completed!: boolean;
    static associate(models: any) {
      // define association here
      this.belongsTo(models.User)
    }
  }
  Todo.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    description: { type: DataTypes.STRING, allowNull: false },
    completed: {type: DataTypes.BOOLEAN, allowNull: false }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};

module.exports = Todo;
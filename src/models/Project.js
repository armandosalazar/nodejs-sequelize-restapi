import sequelize from '../database/database';
import { DataTypes } from 'sequelize';
import Task from './Task';

const Project = sequelize.define(
  'project',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Project.hasMany(Task, { foreignKey: 'project_id', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'project_id', targetId: 'id' });

export default Project;

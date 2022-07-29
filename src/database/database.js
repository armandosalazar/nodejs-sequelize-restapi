import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.DB, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'postgres',
});

export default sequelize;

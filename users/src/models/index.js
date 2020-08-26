import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/config';

const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize(config);

/* eslint global-require: "off" */
const modelDefiners = [
  require('./models/user.model')
];

modelDefiners.forEach((modelDefiner) => {
  modelDefiner(sequelize, DataTypes);
});

applyExtraSetup(sequelize);

module.exports = sequelize;

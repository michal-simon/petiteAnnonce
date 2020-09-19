import { Sequelize, DataTypes } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
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

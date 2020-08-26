import express from 'express';

import { Sequelize } from 'sequelize';

import db from './models';

const app = express();
const env = process.env;

//  app.use(require('./controllers/routes'));
console.log('app', db.models);
app.listen(process.env.APP_PORT, console.log(`Le serveur à démarrer sur le port ${process.env.APP_PORT}`));

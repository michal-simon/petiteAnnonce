import express from 'express';

const { Sequelize } = require('sequelize');

const app = express();
const env = process.env;
const URI = `postgres://${env.DB_USER}:${env.DB_PASS}@${env.DB_SERVER}:${env.DB_PORT}/${env.DB_NAME}`;
console.log(URI);

const seq = new Sequelize(URI);

seq.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => console.log(err));

//  app.use(require('./controllers/routes'));

app.listen(process.env.APP_PORT, console.log(`Le serveur à démarrer sur le port ${process.env.APP_PORT}`));

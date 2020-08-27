import express from 'express';

const app = express();
const env = process.env;

app.use(require('./controllers/routes'));

app.listen(process.env.APP_PORT, console.log(`Le serveur à démarrer sur le port ${process.env.APP_PORT}`));

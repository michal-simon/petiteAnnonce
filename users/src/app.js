import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const env = process.env;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./controllers/routes'));

app.listen(process.env.APP_PORT, console.log(`Le serveur à démarrer sur le port ${process.env.APP_PORT}`));

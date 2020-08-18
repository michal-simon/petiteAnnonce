import express from 'express';
import mongoose from 'mongoose';

const app = express();
const env = process.env;
const URI = `mongodb://${env.DB_USER}:${env.DB_PASS}@${env.DB_SERVER}:${env.DB_PORT}/${env.DB_NAME}`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de donnée:'));

db.once('open', () => {
  console.log('Connexion à la base de donnée réussi', 'color: green;');
});

app.use(require('./controllers/routes'));

app.listen(process.env.APP_PORT, console.log(`Le serveur à démarrer sur le port ${process.env.APP_PORT}`));

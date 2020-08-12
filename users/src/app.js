import express from 'express';
import mongoose from 'mongoose';

const app = express();

const urlDb = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
console.log(urlDb);
mongoose.connect(urlDb, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de donnée:'));
db.once('open', function() {
  console.log('Connexion à la base de donnée réussi');
});

app.get('/', async (req, res) => {
  return res.send('App working');
});

app.listen(3000, console.log(`Le serveur à démarrer sur le port ${process.env.PORT} `));

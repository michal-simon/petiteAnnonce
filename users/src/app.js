import express from 'express';
import mongoose from 'mongoose';

const app = express();


console.log(process.env.DB_URI);
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de donnée:'));
db.once('open', function() {
  console.log('Connexion à la base de donnée réussi');
});

app.get('/', async (req, res) => {
  return res.send('App working');
});

app.listen(3000, console.log(`Le serveur à démarrer sur le port ${process.env.PORT} `));

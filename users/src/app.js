import express from 'express';

const app = express();



app.get('/', async (req, res) => {
    return res.send('App working');
});

app.listen(3000, console.log(`Le serveur à démarrer sur le port ${process.env.PORT} `));

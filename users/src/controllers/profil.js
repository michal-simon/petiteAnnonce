import { Router } from 'express';
import User from '../model/user';

const router = Router();

router.get('/profil', (req, res) => {
  const u = new User({
    civilite: 'mr',
    nom: 'hassan',
    prenom: 'toto',
    pseudo: 'sunboy22',
    password: 'password',
    isActive: true,
    contact: {
      adresse: '1515 av des gosse',
      codePostal: 92600,
      telephone: Number('0626391046'),
      email: 'email@eee.fr'
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date()
  });
  u.save().then((v) => {
    console.log(v);
  }).data((data) => res.send(data));
});

module.exports = router;

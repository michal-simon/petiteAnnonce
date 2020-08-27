import { Router } from 'express';
import db from '../models';

const router = Router();

router.get('/profil', (req, res) => {
  const user = {
    civilite: 0,
    nom: 'hassan',
    prenom: 'toto',
    pseudo: 'sunboy22',
    password: '048861279zZ@',
    isActive: true,
    adresse: '1515 av des gosse',
    codePostal: 92600,
    telephone: '0626391046',
    email: 'email@eee.fr',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  db.models.user.create(user, (newUser, error) => {
    console.log('error', error);
    console.log('profil', newUser);

    if (error) throw error;
    return res.send(`data ${newUser} ${error}`);
  });
});

module.exports = router;

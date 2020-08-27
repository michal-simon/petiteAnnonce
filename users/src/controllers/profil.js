import { Router } from 'express';
import db from '../models';

const router = Router();

router.get('/profil/:id', (req, res) => {
  db.models.user.findOne({ where: { id: req.params.id } }).then((user, error) => {
    if (user?.id) {
      return res.send(user);
    }
    if (error) throw error;
  });
  // const user = {
  //   civilite: 0,
  //   nom: 'hassan',
  //   prenom: 'toto',
  //   pseudo: 'sunboy2fr2dxx',
  //   password: '048861279zZ@',
  //   isActive: true,
  //   adresse: '1515 av des gosse',
  //   codePostal: 92600,
  //   telephone: '0626391046',
  //   email: 'email@eee.fffrfre'
  // };
});

module.exports = router;

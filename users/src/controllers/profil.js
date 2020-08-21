import { Router } from 'express';
import models, { dbConnect} from '../model/models';

const router = Router();

router.get('/profil', (req, res) => {

  const u = new models.User({
    civilite: 0,
    nom: 'hassan',
    prenom: 'toto',
    pseudo: 'sunboy22',
    password: '048861279zZ@',
    isActive: true,
    contact: {
      adresse: '1515 av des gosse',
      codePostal: 92600,
      telephone: '0626391046',
      email: 'email@eee.fr'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  });
  dbConnect().then(async () => {
    const toto = await u.save(function(error, profil){
      console.log('error', error);
      console.log('profil', profil);
      
      if (err) throw err;
      return res.send(`data ${profil} ${error}`);
    });
    console.log(toto)
    
  }).catch(err => console.log(err));

  return res.send(`data`);

});

module.exports = router;

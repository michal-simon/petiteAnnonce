import { Router } from 'express';

const router = Router();

router.get('/edit', (req, res) => {
  return res.send('user profil edition');
});
module.exports = router;

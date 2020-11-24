import { Router } from 'express';

const router = Router({mergeParams: true});

router.get('/', (req, res) => {
  return res.send(req.t('validation.nom.empty'));
});
module.exports = router;

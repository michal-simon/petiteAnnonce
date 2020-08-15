import { Router } from 'express';

const router = Router();
router.use('/', require('./index'));
router.use('/users', require('./profil'));
router.use('/users', require('./edit'));

module.exports = router;

import { Router } from 'express';

const router = Router();
router.use('/', require('./index'));
router.use('/users', require('./users'));

module.exports = router;

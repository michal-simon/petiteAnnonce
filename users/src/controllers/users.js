import {
  Router
} from 'express';
import db from '../models';

const router = Router();
/**
 * Get user profil
 * @return {JSON}
 */
router.get('/:id', (req, res) => {
  db.models.user.findOne({
    where: {
      id: req.params.id
    }
  }).then((user, error) => {
    if (user?.id) {
      return res.send(user);
    }
    if (error) throw error;
  }).catch((err) => {
    throw err;
  });
});

/**
 * update user profil
  * @return {JSON}
 */
router.put('/:id', async (req, res) => {
  db.models.user.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  }).then((result) => {
    const [affectedRow, updatedUser] = result;
    if (affectedRow > 0) {
      return res.status(200).json(updatedUser);
    }
    return res.status(404).json('User not found');
  }).catch((err) => {
    throw err;
  });
});

/**
 * signup a new user
  * @return {JSON}
 */
router.post('/', async (req, res) => {
  const newProfile = req.body;
  db.models.user.create(newProfile).then((newUser) => {
    if (newUser?.id) {
      return res.status(200).json(newUser);
    }
    return res.status(404).json('can\'t create user');
  }).catch((err) => {
    throw err;
  });
});

/**
 * Delete user
  * @return {JSON}
 */
router.delete('/:id', (req, res) => {
  db.models.user.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleted) => {
    if (deleted > 0) {
      return res.status(200).json(deleted);
    }
    return res.status(404).json('User not found');
  }).catch((err) => {
    throw err;
  });
});
module.exports = router;

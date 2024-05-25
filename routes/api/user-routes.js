const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/freinds
router.route('/:userId/freinds').post(addFriend);

// /api/users/:userId/freinds/:freindId
router.route('/:userId/freinds/:friendId').delete(removeFriend);

module.exports = router;
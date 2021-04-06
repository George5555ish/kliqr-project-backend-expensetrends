const express = require('express');
const { getUsersId, getUsersById } = require('../controllers/user-controller');

const router = express.Router();


router.get('/',getUsersId);
router.get('/user/:id', getUsersById)


module.exports = router;
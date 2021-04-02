const express = require('express');
const { getUsersId } = require('../controllers/user-controller');

const router = express.Router();


router.get('/',getUsersId);


module.exports = router;
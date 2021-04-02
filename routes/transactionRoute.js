const express = require('express');
const { getTransactions, getTransactionsByUser } = require('../controllers/transaction-controller');

const router = express.Router();


router.get('/',getTransactions);


router.get('/:id', getTransactionsByUser);


module.exports = router;
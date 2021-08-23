const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction');

router.post('/api/transaction', transactionController.createTransaction);





module.exports = router;
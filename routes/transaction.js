const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction');

router.post('/api/transaction', transactionController.createTransaction);
router.get('/api/transaction', transactionController.getTransaction);



module.exports = router;
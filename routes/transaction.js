const express = require('express');
const router = express.Router();
const transactionController = require('../controller/api/transaction');

router.post('/api/transaction', transactionController.createTransaction);
router.get('/api/transaction', transactionController.getTransaction);
router.put('/api/transaction/:id', transactionController.updateTransaction);
router.delete('/api/transaction/:id', transactionController.deleteTransaction);




module.exports = router;
const express = require('express');
const router = express.Router();
const envelopeController = require('../controller/api/envelope');

router.post('/api/envelopes', envelopeController.createEnvelope);
router.get('/api/envelopes', envelopeController.getAllEnvelope);
router.put('/api/envelopes/:id', envelopeController.updateEnvelope);
router.delete('/api/envelopes/:id', envelopeController.deleteEnvelope);
router.put('/api/envelopes/:id/withdraw/:amount', envelopeController.withdrawFromEnvelope);
router.put('/api/envelopes/:id/deposit/:amount', envelopeController.depositToEnvelope);




module.exports = router;
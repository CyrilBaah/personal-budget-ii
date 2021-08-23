const express = require('express');
const router = express.Router();
const envelopeController = require('../controller/envelope');

router.post('/api/envelopes', envelopeController.createEnvelope);
router.get('/api/envelopes', envelopeController.getAllEnvelope);
router.put('/api/envelopes/:id', envelopeController.updateEnvelope);


module.exports = router;
const express = require('express');
const router = express.Router();
const envelopeController = require('../controller/envelope');

router.post('/api/envelopes', envelopeController.createEnvelope);

module.exports = router;
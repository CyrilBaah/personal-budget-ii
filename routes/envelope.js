const express = require('express');
const router = express.Router();
const envelopeController = require('../controller/envelope');

router.get('/api/envelopes', envelopeController.getEnvelope);

module.exports = router;
const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

router.get('/', indexController.getHomePage);
router.post('/create-envelope', indexController.createEnvelope);
router.get('/get-envelopes', indexController.getEnvelopes);
router.get('/get-updateenvelope', indexController.getUpdateEnvelopes);
router.post('/update-envelope', indexController.updateEnvelope);
router.post('/delete-envelope/:envelopeId', indexController.deleteEnvelope);

module.exports = router;
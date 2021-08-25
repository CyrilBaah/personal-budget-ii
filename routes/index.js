const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

router.get('/', indexController.getHomePage);
router.post('/create-envelope', indexController.createEnvelope);

router.get('/get-envelopes', indexController.getEnvelopes);



module.exports = router;
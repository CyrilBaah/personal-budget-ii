const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

router.get('/', indexController.getHomePage);
router.post('/create-envelope', indexController.createEnvelope);
router.get('/get-envelopes', indexController.getEnvelopes);
router.get('/get-updateenvelope', indexController.getUpdateEnvelopes);

router.put('/update-envelope', indexController.updateEnvelope);





module.exports = router;
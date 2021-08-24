const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

router.get('/', indexController.getHomePage);
router.get('/get-envelopes', indexController.getEnvelopes);



module.exports = router;
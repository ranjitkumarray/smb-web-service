var express = require('express');
var router = express.Router();
var basePrice = require('../controlers/smb-base-price')
/* GET home page. */
router.post('/smb', basePrice.basePriceAddition);

module.exports = router;

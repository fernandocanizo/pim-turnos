// Creation Date: 2015.06.03
// Author: Fernando L. Canizo - http://flc.muriandre.com/

"use strict";


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'PIM - Turnos' });
});

module.exports = router;

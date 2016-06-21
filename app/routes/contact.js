'use strict';

let express    = require('express');
let bodyParser = require('body-parser');

let validate   = require('../mw/mail/validate');
let persist    = require('../mw/mail/persist');
let send       = require('../mw/mail/send');

let router = express.Router();

router.use(bodyParser.json());

router.use(
	validate,
	persist,
	send
);

module.exports = router;
'use strict';

let nodemailer = require('nodemailer');
let wellknown = require('nodemailer-wellknown');

let letter = require('../../misc/letter');

let transporter = nodemailer.createTransport(
	{
		service: 'mailgun',
		auth: {
			user: 'postmaster@sandbox214954f51e7c4b1aa3c3e39dd1295cb7.mailgun.org',
			pass: require('../../sensitive-data').pass
		},
		tls: {
			rejectUnauthorized: false
		}
	}
);

module.exports = function (req, res, next)
{
	transporter.sendMail(
		letter(req.body),
		function (err)
		{
			if (err) console.error(err);
			res.sendStatus((err ? 500 : 200));
		}
	);
};
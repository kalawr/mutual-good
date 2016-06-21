'use strict';

let FROM    = 'postmaster@sandbox214954f51e7c4b1aa3c3e39dd1295cb7.mailgun.org';
let TO      = 'kallaur125@gmail.com';
let SUBJECT = 'New designer proposal';

function body(options)
{
	return `
	${options.name} (${options.mail}):
	${options.message}`;
}

module.exports = function (options)
{
	return {
		from:    FROM,
		to:      [TO],
		subject: SUBJECT,
		text:    body(options)
	};
};
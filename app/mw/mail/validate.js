'use strict';

module.exports = function (req, res, next)
{
	if (!(req.body.mail && req.body.name && req.body.message))
	{
		res.sendStatus(400);
	}
	else
	{
		next();
	}
};
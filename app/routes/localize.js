'use strict';

let express = require('express');
let path    = require('path');
let fs      = require('fs');

let router = express.Router();


router.get('/',
	function (req, res)
	{
		res.redirect('/en');
	}
);

router.get('/:lang',
	function (req, res, next)
	{
		if (req.params.lang.length === 2)
		{
			fs.readFile(
				path.join(__dirname, '../locales', req.params.lang + '.json'),
				function (error, file)
				{
					if (error)
					{
						res.sendStatus(500);
					}
					else
					{
						res.render('index', JSON.parse(file), 
							function (error, html)
							{
								if (error)
								{
									res.type('text').status(500).send('Malformed locale file');
								}
								else
								{
									res.send(html);
								}
							}
						);
					}
				}
			);
		}
		else
		{
			next();
		}
	}
);

module.exports = router;
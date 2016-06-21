'use strict';

let express  = require('express');
let path     = require('path');

let contact  = require('./routes/contact');
let localize = require('./routes/localize');

let app = express();

app.set('view engine', 'pug');
app.set('views', 
	path.join(
		__dirname,
		'./views'
	)
);

app.use(
	express.static(
		path.join(__dirname, 'static')
	)
);

app.use(localize);
app.post('/contact', contact);

app.listen(3000, 
	function (err)
	{
		if (err)
		{
			console.error(err);
		}
		else
		{
			console.log('Listening on port 3000.');
		}
	}
);
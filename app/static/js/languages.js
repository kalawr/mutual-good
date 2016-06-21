define(
	function ()
	{
		'use strict';

		var trigger = document.querySelector('#languages-trigger');
		var container = document.querySelector('nav.languages');

		trigger.addEventListener('click',
			function (event)
			{
				event.preventDefault();
				container.classList.toggle('open');
			}
		);

		return true;
	}
);

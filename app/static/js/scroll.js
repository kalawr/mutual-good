define(
	function ()
	{
		'use strict';

		var duration = 800;
		var triggers = document.querySelectorAll('[data-scroll-target]');

		_.each(
			triggers,
			function (trigger)
			{
				trigger.addEventListener('click', listener);
			}
		);

		console.log('Click listeners applied to', triggers.length, 'elements.');

		function listener(event)
		{
			event.preventDefault();

			var target = document.querySelector(
				event.target.dataset.scrollTarget
			);

			if (target)
			{
				if (window.smoothScroll)
				{
					window.smoothScroll(target, duration);
				}
				else
				{
					console.error('window.smoothScroll is unavailable');

					window.scroll(
						0,
						target.getBoundingClientRect().top
					);
				}
			}
			else
			{
				console.error(event.target.dataset.scrollTarget, 'is a null element query.');
			}	
		}

		return true;
	}
);

define(
	function ()
	{
		'use strict';

		var indicators = document.querySelectorAll('aside nav a');
		var sections   = document.querySelectorAll('section[id]');
		var previous = null;

		window.addEventListener(
			'scroll',
			_.throttle(scrollListener, 250)
		);

		scrollListener();

		function closest()
		{
			return _.minBy(
				sections,
				function (section)
				{
					return Math.abs(
						section.getBoundingClientRect().top
					);
				}
			);
		}

		function scrollListener(event)
		{
			var cl = closest().id;

			var current = _.find(
				indicators,
				function (indicator)
				{
					return indicator.dataset.scrollTarget.slice(1) === cl;
				}
			);

			if (previous)
				previous.classList.remove('active');

			current.classList.add('active');

			previous = current;
		}

		return true;
	}
);

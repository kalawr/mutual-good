define(
	function ()
	{
		'use strict';

		var form = document.forms.contact;
		var controls = form.elements;

		function listener(event)
		{
			form.classList.add('touched');

			Array.prototype.forEach.call(controls,
				function (control)
				{
					control.removeEventListener('focus', listener);
				}
			);
		};

		Array.prototype.forEach.call(controls,
			function (control)
			{
				control.addEventListener('focus', listener);
			}
		);

		return true;
	}
);

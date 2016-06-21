define(
	function ()
	{
		'use strict';

		function Modal(text, className)
		{
			var x, modal, content;

			var x = document.createElement('div');
			x.className = 'modal-close';
			x.title = 'Close';
			x.textContent = 'x';

			var content = document.createElement('div');
			content.className = 'modal-content';
			content.textContent = text;
			content.appendChild(x);

			var modal = document.createElement('div');
			modal.className = 'modal ' + className;
			modal.appendChild(content);

			document.body.appendChild(modal);

			x.addEventListener(
				'click',
				function (event)
				{
					event.preventDefault();
					document.body.removeChild(modal);
				}
			);

			return modal;
		}

		Modal.success = function (text)
		{
			return Modal(text, 'modal-success');
		};

		Modal.fail = function (text)
		{
			return Modal(text, 'modal-error');
		};

		return Modal;
	}
);

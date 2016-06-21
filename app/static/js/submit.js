define(
	['./modal'],
	function (Modal)
	{
		'use strict';

		document.forms.contact.addEventListener(
			'submit',
			function (event)
			{
				event.preventDefault();

				fetch(
					'/contact',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},

						body: JSON.stringify(
							{
								mail: event.target.elements.mail.value,
								name: event.target.elements.name.value,
								message: event.target.elements.message.value
							}
						)
					}
				)
				.then(
					function (response)
					{
						if (response.status === 200)
						{
							// empty
							event.target.elements.mail.value    = '';
							event.target.elements.name.value    = '';
							event.target.elements.message.value = '';

							Modal.success('Success');
						}
						else
						{
							Modal.fail('Error');
						}
					}
				)
			}
		);

		return true;
	}
);

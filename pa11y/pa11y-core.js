// To run
// node pa11y-core.js --reporter html

'use strict';

const pa11y = require('pa11y')

runExample();

// Async function required for us to use await
async function runExample() {
	try {
		const result = await pa11y('https://tangerine-mousse-0f9104.netlify.app', {

			// Run some actions before the tests
			actions: [
				'set field #username to testuser',
				'set field #password to testpassword',
				'click element #login',
				// 'wait for url to be https://tangerine-mousse-0f9104.netlify.app'
			],

			// Log what's happening to the console
			log: {
				debug: console.log,
				error: console.error,
				info: console.log
			}

		});

		// Output the raw result object
		console.log(result);

	} catch (error) {

		// Output an error if it occurred
		console.error(error.message);

	}
}
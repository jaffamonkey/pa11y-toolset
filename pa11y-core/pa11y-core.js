// To run
// node pa11y-core.js --reporter html

'use strict';

const pa11y = require('pa11y')

runExample();

// Async function required for us to use await
async function runExample() {
	try {
		const result = await pa11y('https://practicetestautomation.com/practice-test-login/', {
			reporters: `pa11y-reporter-html`,
			screenCapture: `${__dirname}/login.png`,
			// Run some actions before the tests
			actions: [
				'set field #username to student',
				'set field #password to Password123',
				'click element #submit',
				'wait for url to be https://practicetestautomation.com/logged-in-successfully/'
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
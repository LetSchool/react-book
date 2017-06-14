var co = require('co');

function delay(done) {
	setTimeout(function() {
		console.log('Delay');
		done();
	}, 1000);
}

co(function *() {
	yield delay
	yield delay
	yield delay
	console.log('done');
});

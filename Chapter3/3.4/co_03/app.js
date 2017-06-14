var co = require('co');

function delay(interval) {
    console.log(interval)
    return function(done) {
        setTimeout(function() {
            console.log('Delay');
            done();
        }, interval);
    }
}

co(function *() {
	yield delay(1000)
	yield delay(2000)
	yield delay(3000)

	console.log('done');
});

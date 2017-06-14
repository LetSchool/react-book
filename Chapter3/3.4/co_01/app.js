var co = require('co');

co(function *myGenerator() {
    yield function(done) {
        setTimeout(function() {
            console.log('Delay');
            done();
        }, 1000);
    }

	console.log('done');
});

var delay = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve("Delay"); // Yay! Everything went well!
	}, 1000);
});

async function myFunction() {
	try {
		var val = await delay;
	}
	catch(err) {
		console.log(err);
	}

	console.log(val);
    console.log('done');
}

myFunction();

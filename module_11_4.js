let i = 4;

let id = setInterval(function() {
	i++;
	
	if (i == 16) {
		clearInterval(id);
	} else {
		console.log(i);
	}
}, 1000);
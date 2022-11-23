function getSumm(numOne) {
	return function(numTwo) {
		return numOne + numTwo;
	};
}
console.log( getSumm(3)(4));

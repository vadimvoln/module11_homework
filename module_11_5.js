let numSumm = (x, n) => {
	if (n === 1) {
		return x;
	} else {
		return x * numSumm(x, n - 1);
	}
}

console.log(numSumm(10, 2));

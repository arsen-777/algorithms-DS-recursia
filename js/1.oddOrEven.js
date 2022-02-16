"use strict";

const oddDijit = (num) => {
	if (num < 10) {
		return num % 2 === 1;
	}
	let x = num % 10;
	if (!(x % 2)) {
		return false;
	}
	num = (num - x) / 10;
	return oddDijit(num);
};

console.log(oddDijit(4211133));
console.log(oddDijit(7791));
console.log(oddDijit(5));

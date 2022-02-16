"use strict";

const calcSum = (num) => {
	let arr = Array.from(String(num), Number);
	return arr.reduce((accl, el) => {
		if (accl + el < 10) {
			return accl + el;
		} else {
			return calcSum(accl + el);
		}
	}, 0);
};

console.log(calcSum(14));
console.log(calcSum(29));
console.log(calcSum(999999999999));

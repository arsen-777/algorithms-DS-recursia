"use strict";

const findMinPositive = (arr, minPositive = Infinity) => {
	const newArr = [...arr];
	let min = minPositive;
	if (newArr.length === 0) {
		if (min === Infinity) {
			return -1;
		} else {
			return min;
		}
	}
	const lastElem = newArr.pop();
	if (lastElem >= 0 && lastElem < minPositive) {
		min = lastElem;
	}

	return findMinPositive(newArr, min);
};

console.log(findMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPositive([45, -9, 15, 5, -78]));
console.log(findMinPositive([-5, -9, -111, -1000, -7]));

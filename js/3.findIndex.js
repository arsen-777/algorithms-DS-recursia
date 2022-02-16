"use strict";

const findIndex = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return i + 1;
		}
	}
	return -1;
};

console.log(findIndex([-9, -4, -4, 3, 12, 4, 5]));
console.log(findIndex([2, 12, 15, 48, 64]));

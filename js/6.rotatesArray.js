"use strict";

const rotatesArray = (arr, num) => {
	if (num === 0) return arr;

	if (num > 0) {
		let firstEl = arr[0];
		arr.shift();
		arr.push(firstEl);
		num--;
	} else {
		let lastEl = arr[arr.length - 1];
		arr.pop();
		arr.unshift(lastEl);
		num++;
	}
	return rotatesArray(arr, num);
};

console.log(rotatesArray(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotatesArray(["a", "b", "c", "d", "e", "f", "g", "h"], -2));

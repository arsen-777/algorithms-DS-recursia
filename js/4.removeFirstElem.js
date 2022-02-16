"use strict";

const removeFirstElem = (arr, i = 0) => {
	if (arr.length <= 1) {
		return [];
	}

	if (i === arr.length - 1) {
		arr.pop();
		return arr;
	}
	arr[i] = arr[i + 1];
	return removeFirstElem(arr, i + 1);
};

console.log(removeFirstElem([6, 78, "n", 0, 1]));

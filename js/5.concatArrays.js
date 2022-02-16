"use strict";

const concatArrays = (arr) => {
	return arr.reduce((aggr, val) => {
		if (Array.isArray(val)) {
			return aggr.concat(concatArrays(val));
		}
		return aggr.concat(val);
	}, []);
};

console.log(concatArrays([1, 2, [3, 4, [1, 2]], 10]));
console.log(concatArrays([14, [1, [[[3, []]], 1], 0]]));

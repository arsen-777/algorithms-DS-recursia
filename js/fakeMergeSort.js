const fakeMergeSort = (arr) => {
	if (arr.length < 2) return arr;
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(fakeMergeSort(left), fakeMergeSort(right));
};

const merge = (left, right) => {
	const result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	if (left.length === 0) return result.concat(right);
	if (right.length === 0) return result.concat(left);
};

console.log(fakeMergeSort([1, 8, 9, 55, 0, 99, 4]));

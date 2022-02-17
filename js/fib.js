const cash = {};

const fib = (n) => {
	if (n === 1 || n === 2) {
		return 1;
	}
	if (cash[n]) {
		return cash[n];
	}
	cash[n] = fib(n - 1) + fib(n - 2);
	return cash[n];
};

console.log(fib(10));

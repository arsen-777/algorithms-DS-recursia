"use strict";

const isPalindrome = (str) => {
	if (str.length <= 0) {
		return true;
	}
	if (str[0] === str[str.length - 1]) {
		const result = str.slice(1, str.length - 1);
		return isPalindrome(result);
	}
	return false;
};

console.log(isPalindrome("aba"));
console.log(isPalindrome("abas"));

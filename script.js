function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
	return a * b;
}

function divide (a, b){
    return a / b;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(fac) {
	let sum = 1;
	for(let i = fac; i > 0; i--){
		sum*= i;
	}
	return sum;
}
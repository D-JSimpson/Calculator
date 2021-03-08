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

function operate(operator, a, b){
    switch (operator){
        case '+':
            console.log(add(a, b));
            break;
        case '-':
            console.log(subtract(a, b));
            break;
        case '*':
            console.log(multiply(a, b));
            break;
        case '/':
            console.log(divide(a, b));
            break;
        case 'pow':
            console.log(power(a, b));
            break;
        case '!':
            console.log(factorial(a));
            break;
    }
}

const clear = document.getElementById('clear');
const display = document.getElementById('display');
clear.addEventListener('click', function(){display.innerText = "";});
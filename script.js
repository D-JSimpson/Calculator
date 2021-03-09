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
        case '^':
            console.log(power(a, b));
            break;
        case '!':
            console.log(factorial(a));
            break;
    }
}

const clear = document.getElementById('clear');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const buttonsArr = Array.from(buttons);
const numbers = buttonsArr.filter(button => (button.value !== ""));
console.log(numbers);

let operand1 = '';
let operand2 = '';
clear.addEventListener('click', function(){display.innerText = ""; operand1 = ''; operand2 = '';});

numbers.forEach(button => button.addEventListener('click', function(){
    let end = (display.innerText.substring(display.innerText.length - 1,display.innerText.length));
    if(this.value % 1 !== 0 && this.value !== '!' && this.value !== '^'){
        display.innerText += (" " + this.value);
        }
    else if(end % 1 !== 0 && end !== '^'){
        if(this.value == '^'){
            display.innerText += this.value;
        } else {display.innerText += (" " + this.value);}
        operand1 = operand2;
        operand2 = '' + this.value + '';
    }
    else{
        display.innerText += this.value;
        operand2 += this.value;
        console.log(operand2);
        console.log(operand1);
        console.log(typeof operand2);
    }
}));
//fix pow;


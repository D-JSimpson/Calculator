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
            display.innerText  = add(+a, +b);
            break;
        case '-':
            display.innerText  = subtract(+a, +b);
            break;
        case '*':
            display.innerText  = multiply(+a, +b);
            break;
        case '/':
            display.innerText  = divide(+a, +b);
            break;
        case '^':
            display.innerText  = power(+a, +b);
            break;
        case '!':
            if(a !== ''){
            display.innerText  = factorial(+a);
            } else { display.innerText  = factorial(+b); }
            break;
    }
}

const clear = document.getElementById('clear');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const equals = document.getElementById('equals');
const buttonsArr = Array.from(buttons);
const numbers = buttonsArr.filter(button => (button.value !== ""));
console.log(numbers);

let operand1 = '';
let operand2 = '';
let operator = '';
clear.addEventListener('click', function(){display.innerText = ""; operand1 = ''; operand2 = ''; operator = '';});

equals.addEventListener('click', function(){operate(operator, operand1, operand2)})

numbers.forEach(button => button.addEventListener('click', function(){
    let end = (display.innerText.substring(display.innerText.length - 1,display.innerText.length));
    if(this.value % 1 !== 0 && this.value !== '!' && this.value !== '^'){
        display.innerText += (" " + this.value);
        operator = '' + this.value + '';
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
        if(this.value % 1 === 0){
        operand2 += this.value;
        }
        if(this.value == '!'){
            operator = '' + this.value + '';
            }
        if(this.value == '^'){
                operator = '' + this.value + '';
                operand1 = operand2;
                operand2 = '';
                }
        console.log(operand2);
        console.log(operand1);
        console.log(operator);
    }
}));



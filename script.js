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

function operate(operator, a, b){
    let expr = 0;
    switch (operator){
        case '+':
            expr = add(+a, +b);
            display.innerText  = expr;
            break;
        case '-':
            expr = subtract(+a, +b);
            display.innerText  = expr;
            break;
        case '*':
            expr = multiply(+a, +b);
            display.innerText  = expr;
            break;
        case '/':
            expr =  divide(+a, +b);
            display.innerText  = expr;
            break;
        case '^':
            expr =  power(+a, +b);
            display.innerText  = expr;
            break;
    }
    return expr;
}

const clear = document.getElementById('clear');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const equals = document.getElementById('equals');
const buttonsArr = Array.from(buttons);
const numbers = buttonsArr.filter(button => (button.value !== ""));

let operand1 = '';
let operand2 = '';
let operator = '';
let operatorCtr = 0;

let deleteInner = false;

equals.addEventListener('click', function(){
    operand1 = operate(operator, operand1, operand2);
    operand2 = '';
    enableOperand2 = false;
    operateMode = false;
    deleteInner = true;
})

let operateMode = false;
let operateModeEnable = false;
let enableOperand2 = false;

clear.addEventListener('click', function(){display.innerText = ""; operand1 = ''; operand2 = ''; operator = ''; operateMode = false; operateModeEnable = false; enableOperand2 = false;});

numbers.forEach(button => button.addEventListener('click', function(){

    switch(this.value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
            operand2 = '';
            operateMode ? operand1 = operate(operator, operand1, display.innerText) : operand1 = display.innerText;
            operator = this.value;
            operateModeEnable = true;
            operateMode = false;
             break;
        case '.':
            if(display.innerText.indexOf('.') === -1 && operateModeEnable == false && operand2 == ''){
                display.innerText += '.';
            } else if(operateModeEnable == true){
                display.innerText = '.';
                operand2 = '.'
              } else{
                display.innerText += '.';
                operand2 += '.';
              }
                break;
        default:
            if(operateModeEnable == true && display.innerText !== '.'){
                display.innerText = '';
            }
            if(operateModeEnable){
                operateMode = true;
                operateModeEnable = false;
                enableOperand2 = true;
            }
            if(enableOperand2){
                operand2 += this.value;
            }
            if(deleteInner == true){
                display.innerText = '';
                deleteInner = false;
            }
          display.innerText += this.value;
            break;
    
    }
}));



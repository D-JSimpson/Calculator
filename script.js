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
const functions = document.getElementById('functions');
let childFunctions = functions.children;
childFunctions = Array.from(childFunctions);
childFunctions = childFunctions.filter(button => (button.value !== ""));

let operand1 = '';
let operator = '';

let deleteInner = false;

equals.addEventListener('click', function(){
    operand1 = operate(operator, operand1, display.innerText);
    operateMode = false;
    deleteInner = true;
    this.animate([
        {backgroundColor: 'rgb(255, 69, 0, 0.6)'},
        {backgroundColor: 'rgb(255, 69, 0)'}

    ], {
        duration: 200
    });
})

let operateMode = false;
let operateModeEnable = false;

clear.addEventListener('click', function(){display.innerText = ""; operand1 = ''; operand2 = ''; operator = ''; operateMode = false; operateModeEnable = false; childFunctions.forEach(button => button.style.cssText = 'background-color: orange');});

numbers.forEach(button => button.addEventListener('click', function(){

    switch(this.value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
            operateMode ? operand1 = operate(operator, operand1, display.innerText) : operand1 = display.innerText;
            operator = this.value;
            operateModeEnable = true;
            operateMode = false;
             break;
        case '.':
            if(display.innerText.indexOf('.') === -1 && operateModeEnable == false){
                display.innerText += '.';
            } else if(operateModeEnable == true && display.innerText !== '-0'){
                display.innerText = '0.';
              } else{
                  if(display.innerText.indexOf('.') === -1){
                display.innerText += '.';
                  }
              }
                break;
        case '(-)':
            if(operateModeEnable && display.innerText !== '0.'){
            display.innerText = '-0';
            } else {
                if(display.innerText.indexOf('-') === -1){
                display.innerText = '-' + display.innerText;
                }
              }
            break;
        case '%':
            display.innerText /= 100;
              break;
        default:
            if(operateModeEnable == true && display.innerText !== '0.' && display.innerText !== '-0' && display.innerText !== '-0.'){
                display.innerText = '';
            }
            if(operateModeEnable){
                operateMode = true;
                operateModeEnable = false;
                childFunctions.forEach(button => button.style.cssText = 'background-color: orange');
            }
            if(deleteInner == true && display.innerText !== '0.' && display.innerText !== '-0' && display.innerText !== '-0.'){
                display.innerText = '';
                deleteInner = false;
            }
            if(display.innerText == '-0'){
                display.innerText = '-';
            }
          display.innerText += this.value;
            break;
    
    }
    switch(this.value){
        case '+':
        case '-':
        case '*':
        case '/':
            childFunctions.forEach(button => button.style.cssText = 'background-color: orange; color: black');
            this.style.backgroundColor = 'rgb(32, 34, 37)';
            this.style.color = 'orange'; 
            break;
        default:
            break;
    }
}));



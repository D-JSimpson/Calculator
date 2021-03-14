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

function bigNumberFit(num){
let stringNum = num.toString();
let firstNum = stringNum.substring(0, 1);
let decimalNum = firstNum + '.';
let restOfNum = stringNum.substring(1, 10);
let numLength = stringNum.length;
return decimalNum + restOfNum + "e+" + (numLength - 1);
}

function ePlusFit(){
let eIndex = display.innerText.indexOf("e+");
let noENum = display.innerText.substring(0, eIndex);
let ePlusNum = display.innerText.substring(eIndex); 
noENum = +noENum;
let fixed = noENum.toFixed(9);
display.innerText = fixed + ePlusNum;
}

function bigDecimalFit(){
let decimalIndex = display.innerText.indexOf('.');
let num = display.innerText.substring(0, decimalIndex);
let decimal = display.innerText.substring(decimalIndex);
let toFixedLen = 15 - num.length;
decimal = +decimal;
let toFixedNum = decimal.toFixed(toFixedLen);
display.innerText = +num + +toFixedNum;
}

function operate(operator, a, b){
    let expr = 0;
    switch (operator){
        case '+':
            expr = add(+a, +b);
            break;
        case '-':
            expr = subtract(+a, +b);
            break;
        case '*':
            expr = multiply(+a, +b);
            break;
        case '/':
            expr =  divide(+a, +b);
            break;
        case '^':
            expr =  power(+a, +b);
            break;
    }
    display.innerText  = expr;
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
            } else if(display.innerText.indexOf('-') === -1) {
                {
                display.innerText = '-' + display.innerText;
                }
              } else{
                display.innerText = display.innerText.substring(1);
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
            if(display.innerText.length < 16){
          display.innerText += this.value;
            }
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



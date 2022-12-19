function operate(firstOperand, secondOperand, operator){
    let result;
    if(operator === '+'){
        result = firstOperand + secondOperand;
    } else if(operator === '-'){
        result = firstOperand - secondOperand;
    } else if(operator === '*'){
        result = firstOperand * secondOperand;
    } else if(operator === '÷'){
        result = firstOperand / secondOperand;
    }

    displayInner = [result.toFixed(2)];
    display.textContent = displayInner;

    product = true;

    firstOperand = 0;
    secondOperand = 0;
    operator = '';
}

const buttons = document.querySelectorAll('.number,.operator,.decimal');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const enter = document.querySelector('.equal');
const operators = ["+", "-", "÷", "*"];

let product = false;

let firstOperand = 0;
let secondOperand = 0;
let operator = '';

let displayInner = [];


buttons.forEach(button => button.addEventListener('click', () => {
    if(product === true){
        if(button.className === 'number'){
            displayInner.length = 0;
            firstOperand = undefined;
            secondOperand = undefined;
            operator = undefined;
        } else {
            firstOperand = Number(displayInner.join(''));
            operator = button.value;
        }
        product = false;
    } else if(product === false && operators.includes(button.value)){
        if(displayInner.length === 0 || operators.includes(operator)){
            return;
        } else {
            firstOperand = Number(displayInner.join(''));
            operator = button.value;
        }
    }
    displayInner.push(button.value);
    display.textContent = displayInner.join('');
}));
  
enter.addEventListener('click', () => {
    secondOperand = Number(display.textContent.split(operator)[1]);
    if(!secondOperand){
        display.textContent = firstOperand;
        displayInner.length = 1;
    } else {
        operate(firstOperand, secondOperand, operator)
    }
});

clear.addEventListener('click', () => window.location.reload());


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

    displayInner = [result];
    display.textContent = displayInner;
}

const buttons = document.querySelectorAll('.number,.operator');

const display = document.querySelector('.display');

const clear = document.querySelector('.clear');

const operators = ["+", "-", "÷", "*"];

let firstOperand;

let secondOperand;

let operator;

let displayInner = [];

buttons.forEach(button => button.addEventListener('click', () => {
    if(displayInner.length === 0 & operators.includes(button.value) || 
        operators.includes(operator) & operators.includes(button.value)){
        return;
    } else if(operators.includes(button.value)){
        firstOperand = Number(displayInner.join(''));
        operator = button.value;
    }
    displayInner.push(button.value);
    display.textContent = displayInner.join('');
}));
  
const enter = document.querySelector('.equal');

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

//fix double operator
//fix adding numbers after equals
//round numbers
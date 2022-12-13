
// function multiply(a, b){
//     document.querySelector(".display").textContent = Number(a) * Number(b);
// }

// function divide(a, b){
//     document.querySelector(".display").textContent = Number(a)/Number(b);
// }

// function add(a, b){
//     displayInner = [Number(a) + Number(b)];
//     display.textContent = displayInner;
// }

// function subtract(a, b){
//     document.querySelector(".display").textContent = Number(a) - Number(b);
// }

// function round(value, decimals) {
//     return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
//   }

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

const operators = ["+", "-", "÷", "*"];

let firstOperand;

let secondOperand;

let operator;

let displayInner = [];

buttons.forEach(button => button.addEventListener('click', () => {
    if(operators.includes(button.value)){
        firstOperand = Number(displayInner.join(''));
        console.log(button.value);
        operator = button.value;
    }
    displayInner.push(button.value);
    display.textContent = displayInner.join('');
}));


  
const enter = document.querySelector('.equal');

enter.addEventListener('click', () => {
    console.log(typeof operator);
    secondOperand = Number(display.textContent.split(operator)[1]);
    operate(firstOperand, secondOperand, operator)
});

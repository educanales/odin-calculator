let firstNumber;
let secondNumber;
let operator = '';
let displayValue = '';

console.log(operator)

const btnNum = document.querySelectorAll('.btn-num');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear-btn');
const equalBtn = document.querySelector('.equal-btn');
const operatorBtn = document.querySelectorAll('.operator-btn');

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtrack(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(operator, a, b) {
  switch (operator) {
    case 'sum':
      return add(a, b);
    case 'subtrack':
      return subtrack(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
  }
}

btnNum.forEach((button) => {
  button.addEventListener('click', () => {
    let secondValue;
    if (displayValue === '') {
      displayValue = button.id;
    } else {
      secondValue = button.id;
      displayValue += secondValue;
    }
    display.textContent = displayValue;
  })
})

clearBtn.addEventListener('click', () => {
  displayValue = '';
  display.textContent = ''
})

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (operator !== '') {
      getResult();
    }
    firstNumber = displayValue;
    firstNumber = Number(firstNumber);
    
    switch (button.id) {
      case '+':
        operator = 'sum';
        break;
      case '-':
        operator = 'subtrack';
        break;
      case '*':
        operator = 'multiply';
        break;
      case '/':
        operator = 'divide';
        break;
    }    
    displayValue += ` ${button.id} `;
    display.textContent = displayValue;
  })
}) 

equalBtn.addEventListener('click', getResult);

function getResult() {
  secondNumber = displayValue.split(' ').slice(2).join('');
  secondNumber = Number(secondNumber);
  display.textContent = operate(operator, firstNumber, secondNumber);
  displayValue = operate(operator, firstNumber, secondNumber);
  firstNumber = operate(operator, firstNumber, secondNumber);
  operator = '';
}

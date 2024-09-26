let firstNumber;
let secondNumber;
let operator;
let displayValue = '';

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
    firstNumber = displayValue;
    firstNumber = Number(firstNumber)
    switch (button.id) {
      case '+':
        operator = 'sum';
        displayValue += ' + ';
        break;
      case '-':
        operator = 'subtrack';
        displayValue += ' - ';
        break;
      case '*':
        operator = 'multiply';
        displayValue += ' * ';
        break;
      case '/':
        operator = 'divide';
        displayValue += ' / ';
        break;
    }
    display.textContent = displayValue;
  })
}) 

equalBtn.addEventListener('click', () => {
  // console.log(displayValue)
  secondNumber = displayValue.split(' ').slice(2).join('');
  secondNumber = Number(secondNumber);
  // console.log(secondNumber)
  // operate(operator, firstNumber, secondNumber);
  display.textContent = operate(operator, firstNumber, secondNumber);
  displayValue = operate(operator, firstNumber, secondNumber);
  firstNumber = operate(operator, firstNumber, secondNumber);
})



// console.log(add(2, 2))
// console.log(subtrack(5, 3))
// console.log(multiply(4, 4))
// console.log(divide(10, 2))

// console.log(operate('sum', 2, 2))
// console.log(operate('divide', 10, 2))
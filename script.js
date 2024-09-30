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
const delBtn = document.querySelector('.del-btn');

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
  if (secondNum === 0) {
    return "Error"
  }
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
    if (displayValue.length >= 20) {
      displayValue = displayValue.slice(0, 20)
    } else {
      display.textContent = displayValue;
    }
  })
})

clearBtn.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  displayValue = '';
  operator = '';
  display.textContent = ''
})

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (operator !== '') {
      getResult();
    }
    firstNumber = Number(displayValue);
    displayValue = '';
    
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
    // displayValue += ` ${button.id} `;
    // display.textContent = displayValue;
  })
})

equalBtn.addEventListener('click', getResult);

function getResult() {
  let result;
  // secondNumber = displayValue;
  secondNumber = Number(displayValue);
  result = operate(operator, firstNumber, secondNumber);
  if (result % 1 !== 0) {
    result = result.toFixed(4);
    console.log(typeof result)
  } else {
    result = result.toString();
  }  
  // if (result.length >= 17) {
  //   console.log("exceed length")
  //   result = result.slice(0, 17);
  // }
  displayValue = result;
  firstNumber = result;
  secondNumber = '';
  operator = '';
  display.textContent = result;
}

delBtn.addEventListener('click', () => {
  displayValue = displayValue.slice(0, -1);
  display.textContent = displayValue;
})
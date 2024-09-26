let firstNumber;
let secondNumber;
let operator;
let displayValue = '';

const btnNum = document.querySelectorAll('.btn-num');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear-btn');

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
    let number
    if (displayValue === '') {
      displayValue = button.id;
    } else {
      number = button.id
      displayValue += number
    }
    console.log(typeof displayValue)
    display.textContent = displayValue;
    
    // displayBtn(button);
  })
})

clearBtn.addEventListener('click', () => {
  displayValue = '';
  display.textContent = ''
})

// function displayBtn(info) {
//   displayValue = info.id
//   // console.log(typeof displayValue)
//   display.textContent = displayValue;
// }


// console.log(add(2, 2))
// console.log(subtrack(5, 3))
// console.log(multiply(4, 4))
// console.log(divide(10, 2))

// console.log(operate('sum', 2, 2))
// console.log(operate('divide', 10, 2))
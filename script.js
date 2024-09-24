let firstNumber;
let secondNumber;
let operator;

const btnNum = document.querySelectorAll('.btn-num');
const display = document.querySelector('.display')

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
    // displayValue = button.id
    displayBtn(button);
  })
})

function displayBtn(info) {
  displayValue = info.id
  // console.log(typeof displayValue)
  display.textContent = displayValue;
}


// console.log(add(2, 2))
// console.log(subtrack(5, 3))
// console.log(multiply(4, 4))
// console.log(divide(10, 2))

// console.log(operate('sum', 2, 2))
// console.log(operate('divide', 10, 2))
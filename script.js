let firstNumber;
let secondNumber;
let operator = "";
let displayValue = "";

console.log(operator);

const btnNum = document.querySelectorAll(".btn-num");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-btn");
const equalBtn = document.querySelector(".equal-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const delBtn = document.querySelector(".del-btn");

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
    return "Error";
  }
  return firstNum / secondNum;
}

function operate(operator, a, b) {
  switch (operator) {
    case "sum":
      return add(a, b);
    case "subtrack":
      return subtrack(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}

btnNum.forEach((button) => {
  button.addEventListener("click", () => {
    setNumber(button.id);
  });
});

window.addEventListener("keydown", (event) => {
  // console.log(typeof(event.key))
  if (
    event.key === "0" ||
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9"
  ) {
    setNumber(event.key);
  }
});

function setNumber(number) {
  let secondValue;
  if (displayValue === "") {
    displayValue = number;
  } else {
    secondValue = number;
    displayValue += secondValue;
  }
  if (displayValue.length >= 20) {
    displayValue = displayValue.slice(0, 20);
  } else {
    display.textContent = displayValue;
  }
}

clearBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  displayValue = "";
  operator = "";
  display.textContent = "";
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {    
    setOperator(button.id);
  });
});

window.addEventListener("keydown", (event) => {
  if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    setOperator(event.key);
  }
});

function setOperator(inputOperator) {
  if (operator !== "") {
    getResult();
  }
  firstNumber = Number(displayValue);
  displayValue = "";

  switch (inputOperator) {
    case "+":
      operator = "sum";
      break;
    case "-":
      operator = "subtrack";
      break;
    case "*":
      operator = "multiply";
      break;
    case "/":
      operator = "divide";
      break;
  }
}

equalBtn.addEventListener("click", getResult);

window.addEventListener('keydown', (event) => {
  // console.log(event.key)
  if (event.key === "Enter") {
    getResult();
  }
})

function getResult() {
  let result;
  secondNumber = Number(displayValue);
  result = operate(operator, firstNumber, secondNumber);
  if (result % 1 !== 0) {
    result = result.toFixed(4);
    console.log(typeof result);
  } else {
    result = result.toString();
  }
  displayValue = result;
  firstNumber = result;
  secondNumber = "";
  operator = "";
  display.textContent = result;
}

delBtn.addEventListener("click", () => {
  displayValue = displayValue.slice(0, -1);
  display.textContent = displayValue;
});

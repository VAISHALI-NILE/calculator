const display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function chooseOperator(op) {
  if (currentInput === "" && op === ".") {
    currentInput = "0";
  }
  if (previousInput && currentInput && operator) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function updateDisplay() {
  display.value = previousInput + (operator || "") + currentInput;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function calculate() {
  if (!operator || !currentInput) return;
  const prev = parseInt(previousInput);
  const curr = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      result;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}

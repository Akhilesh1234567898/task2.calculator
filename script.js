let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
  if (number === '0' && currentOperand === '0') return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') compute();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation.toString();
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = currentOperand || '0';
}

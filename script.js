function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}

let firstNumber = '';
let secondNumber = '';
let selectedOperator = '';

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Invalid operator!";
  }
}

const displayElement = document.getElementById('display');
let displayValue = '0';

function updateDisplay() {
  displayElement.value = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (selectedOperator !== '') {
    calculate();
  }
  firstNumber = parseFloat(displayValue);
  selectedOperator = operator;
  displayValue = '0';
}

function calculate() {
    if (selectedOperator === '' || displayValue === '') {
      return;
    }
    secondNumber = parseFloat(displayValue);
    displayValue = operate(selectedOperator, firstNumber, secondNumber).toString();
    selectedOperator = '';
    firstNumber = parseFloat(displayValue);
    updateDisplay();
  }

  function clearDisplay() {
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    selectedOperator = '';
    updateDisplay();
  }

  function divide(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero!";
    }
    return a / b;
  }

  
function appendDecimal() {
    if (!displayValue.includes('.')) {
      displayValue += '.';
      updateDisplay();
    }
  }
  
  function backspace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
      displayValue = '0';
    }
    updateDisplay();
  }


  function handleKeyboardInput(event) {
    const key = event.key.toLowerCase();
  
    if (/^\d$/.test(key)) {
      appendNumber(key);
    } else if (key === '.') {
      appendDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendOperator(key);
    } else if (key === 'enter') {
      calculate();
    } else if (key === 'backspace') {
      backspace();
    } else {
      // Ignore other keys
      return;
    }
  
    event.preventDefault();
  }
  
  // Keyboard support
  document.addEventListener('keydown', handleKeyboardInput);
  

  
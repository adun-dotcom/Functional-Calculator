
const previousOperandTextElement = document.querySelector(
  "[data-previous-operator]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operator]"
);
const clearAll = document.querySelector("[data-clear-all]");
const operators = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalsKey = document.querySelector("[data-equals]");
const del = document.querySelector("[data-clear]");



const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
    
  );

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
      
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    operators.forEach((k) => k.classList.remove("operation-select"));
  });
});
clearAll.addEventListener("click", () => {

  calculator.clear();
  calculator.updateDisplay();
  operators.forEach((k) => k.classList.remove("operation-select"));
});
const unSelectOperator = () => {
  operators.forEach((button) => {
    button.classList.remove("operation-select");
  });
};

operators.forEach((button) => {
  button.addEventListener("click", () => {
    
    unSelectOperator();
    button.classList.add("operation-select");
    calculator.chooseOperand(button.innerHTML);
    calculator.updateDisplay();
  });
});

operators.forEach((button) => {
  if (button.innerHTML === "%") {
    button.addEventListener("click", () => {
        
      calculator.chooseOperand(button.innerHTML);
      calculator.calculate();
      calculator.updateDisplay();
    });
  }
});

equalsKey.addEventListener("click", (button) => {
    
  calculator.calculate();
  calculator.updateDisplay();
});

del.addEventListener("click", () => {
    
  calculator.delete();
  calculator.updateDisplay();
  operators.forEach((k) => k.classList.remove("operation-select"));
});



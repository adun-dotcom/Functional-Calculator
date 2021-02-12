// DOM ELEMENTS
const previousOperandTextElement = document.querySelector(
  "[data-previous-operator]");
const currentOperandTextElement = document.querySelector(
  "[data-current-operator]");
const clearAll = document.querySelector("[data-clear-all]");
const operators = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalsKey = document.querySelector("[data-equals]");
const del = document.querySelector("[data-clear]");
const display = document.querySelector(".display");
//////////////////////////////////////

// Creating an instance
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// FUNCTIONS
//unselect number style function
const unSelectNumber = () => {
  numberButtons.forEach((button) => {
    button.classList.remove("number-select");
  });
};

//clear button style function
const clearbtn = ()=>{
  clearAll.classList.remove("clear-select")
}

// operator unselect style function
const unSelectOperator = () => {
  operators.forEach((button) => {
    button.classList.remove("operation-select");
  });
};

// EVENTLISTENERS

//eventlistener for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    del.classList.remove("del-select")
    unSelectNumber()
    clearbtn()
    button.classList.add('number-select')
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    operators.forEach((k) => k.classList.remove("operation-select"));
  });
});


// eventlistener for the clear button
clearAll.addEventListener("click", () => {
  clearAll.classList.add("clear-select")
  calculator.clear();
  calculator.updateDisplay();
  unSelectNumber()
  operators.forEach((k) => k.classList.remove("operation-select"));
});


//event listener for the operator
operators.forEach((button) => {
  button.addEventListener("click", () => {
    del.classList.remove("del-select")
    unSelectNumber()
    unSelectOperator();
    clearbtn()
    button.classList.add("operation-select");
    calculator.chooseOperand(button.innerHTML);
    calculator.updateDisplay();
  });
});


//event listener for the percentage operator
operators.forEach((button) => {
  if (button.innerHTML === "%") {
    button.addEventListener("click", () => {
      calculator.chooseOperand(button.innerHTML);
      calculator.calculate();
      calculator.updateDisplay();
      clearbtn()
    });
  }
});

// evenlistener for equals key
equalsKey.addEventListener("click", () => {
  if (
    currentOperandTextElement.innerHTML === "" ||
    previousOperandTextElement.innerHTML === ""
  )
    return;

  calculator.calculate();
  calculator.updateDisplay();
  unSelectNumber()
  clearbtn()
});

// eventlistener for the delete button
del.addEventListener("click", () => {
  del.classList.add("del-select")
  calculator.delete();
  unSelectNumber()
  clearbtn()
  calculator.updateDisplay();
  operators.forEach((k) => k.classList.remove("operation-select"));
});

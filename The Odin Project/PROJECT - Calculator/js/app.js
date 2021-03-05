// TODO: Add a history functionality under the calculator
// TODO: Make it a little bit more scientific!

let numbers = []; //array of strings
let operations = []; //array of strings
let currentNumber = "0";
let operationMode = false;
let totalHistory = "0";

const buttonsNodeList = document.querySelectorAll(".btn");
const buttons = [...buttonsNodeList];

const numberPress = function (num) {
  if (currentNumber === "0") {
    currentNumber = num;
  } else {
    currentNumber += num;
  } // end conditionals

  updateDisplay(currentNumber);
  operationMode = true;
};

const operatorPress = function (op) {
  if (!operationMode) {
    return;
  }

  console.log(`${op} pressed.`);
  operations.push(op);
  numbers.push(currentNumber);

  if (op === "equal") {
    currentNumber = calculate();
    updateDisplay(currentNumber);
    reset(currentNumber);
  } else {
    currentNumber = "0";
    updateDisplay();
    operationMode - false;
  } // end conditionals

  console.log(operations, numbers);
};

// [12, 3, 12]
// [multiply, minus, equal] === 24
const calculate = function () {
  console.log(`calculated.`);
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      total = parseFloat(numbers[i]);
    } else {
      total = operate(total, numbers[i], operations[i - 1]); // check the pattern above the function
    }
    totalHistory = total;
  }
  history();
  return `${total}`;
};

// helper function for calculate()
const operate = function (val1, val2, op) {
  val1 = parseFloat(val1);
  val2 = parseFloat(val2);

  switch (op) {
    case "add":
      return val1 + val2;
      break;

    case "subtract":
      return val1 - val2;
      break;

    case "multiply":
      return val1 * val2;
      break;

    case "divide":
      return val1 / val2;
      break;

    default:
      console.log("Something went wrong.");
      break;
  }
};

const reset = function (num = "0") {
  numbers = [];
  operations = [];
  currentNumber = num; // arrays will be resetted, but currentNum will stay as is so that it can display the result
};

const updateDisplay = function (num = "0") {
  const digitCount = num.length;
  const displayEl = document.querySelector("#display");

  if (digitCount >= 11 && digitCount < 15) {
    displayEl.style.fontSize = "20px";
  } else if (digitCount >= 15) {
    displayEl.style.fontSize = "15px";
  } else {
    displayEl.style.fontSize = "28px";
  } // end conditionals

  displayEl.innerText = num;
};

const handleButtonPress = function (btnId) {
  if (btnId === "dot") {
    currentNumber = currentNumber + ".";
    updateDisplay(currentNumber);
  } else if (btnId === "clear") {
    console.log(`${btnId} pressed.`);
    reset();
    updateDisplay();
  } else if (!isNaN(parseInt(btnId))) {
    numberPress(btnId);
  } else {
    operatorPress(btnId);
  } // end conditionals
};

// History
const historyEl = document.querySelector(".history");

const history = function () {
  //clone operations and change their strings with the actual math symbols.
  const cloneOperations = [...operations];
  for (let curr = 0; curr < operations.length; curr++) {
    switch (operations[curr]) {
      case "add":
        cloneOperations[curr] = "+";
        break;
      case "subtract":
        cloneOperations[curr] = "-";
        break;
      case "multiply":
        cloneOperations[curr] = "*";
        break;
      case "divide":
        cloneOperations[curr] = "÷";
        break;
      case "equal":
        cloneOperations[curr] = "=";
        break;
      default:
        console.error("ERROR: Couldn't find the sign you're looking for");
        break;
    } // end switch
  } // end for

  let historyOut = document.createElement("p");
  historyOut.innerText = `${numbers[0]}`;

  let i = 1;
  for (; i < numbers.length; i++)
    historyOut.innerText += ` ${cloneOperations[i - 1]} ${numbers[i]} `;
    
  historyOut.innerText += ` ${cloneOperations[i - 1]} ${totalHistory} `; // = result
  historyEl.appendChild(historyOut);
};

// Add event listeners to the buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => handleButtonPress(btn.id));
});

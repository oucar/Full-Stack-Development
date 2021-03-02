// TODO: ADD TAIL 
// =============== CREATING THE SQUARES ===============

const container = document.querySelector(".container"); // select .container

let squareCount = 20; 
let totalSquare = squareCount * squareCount;
let color = `rgb(255,20,147)`;
let isSelected = false;

for (let i = 0; i < totalSquare; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  //square.textContent = i + 1;                                   // ? testing purposes only

  container.appendChild(square);
}

// ===============       COLORS BUTTONS     ===============

const rainbowColorBtn = document.querySelector(".rainbowColor"); // select color buttons
const blackColorBtn = document.querySelector(".blackColor");

blackColorBtn.addEventListener("click", function () {
  color = "black";
  isSelected = false;
});

const randomizeColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

rainbowColorBtn.addEventListener("click", randomizeColor);
rainbowColorBtn.addEventListener("click", function (e) {
  isSelected = true;
});

// =============== COLORING THE SQUARES ===============

const colorize = function (colorInput) {
  if (isSelected) {
    this.style = `background-color: ${randomizeColor()}`;
  } else {
    colorInput = color;
    this.style = `background-color: ${colorInput}`;
  }

  console.log("mouse on!");
}; // end colorize()

const squares = document.querySelectorAll("div.square"); // select ALL the squares

// Add event listener for each of the divs
for (let square of squares) {
  square.addEventListener("mouseenter", colorize);
}

// ===============       CLEAR BUTTON     ===============

const clearBtn = document.querySelector(".clearBtn"); // select the clear button

const clear = function () {
    const squares = document.querySelectorAll('.square')
  for (let square of squares) {
    square.setAttribute("style", "backgroundColor: white;");
  }
}; // end clear()

clearBtn.addEventListener("click", clear); // add eventListener to clearBtn

// ===============         SIZING         ===============
const selectBtn = document.querySelector("#selectSize"); // select the select button

const initialize = function(sizeGiven, count){
    const initializedSqures = document.querySelectorAll(`.square`)
    for (each of initializedSqures){
        each.remove();
    }

    for (let i = 0; i < count; i++) {
        const square = document.createElement("div");
        square.classList.add(`square`, `${sizeGiven}`);
        container.appendChild(square);
        square.addEventListener("mouseenter", colorize);
    }
} // end initialize()

selectBtn.addEventListener("click", function (e) {
  const inputs = document.querySelectorAll('input[name="choice"]');
  let selectedValue;
  for (const curr of inputs) {
    if (curr.checked) {
      selectedValue = curr.value;
      
        switch (selectedValue) {
            case `square`:
                initialize(selectedValue, 400);
                break;
            case `squareSmall`:
                initialize(selectedValue, 900);
                break;
            case `squareXSmall`:
                initialize(selectedValue, 3600);
                 break;
        
            default:
                break;
        }
    }
  }
  console.log(`square size set to: ${selectedValue}`); // ? testing purposes only
});

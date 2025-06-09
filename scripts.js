const container = document.getElementById("main-grid");
let isMouseDown = false;
let isCKeyDown = false;
let paintAllways = false;
let squaresPerSide = 64;

let squareSize = 640 / squaresPerSide;

const grid_divs = document.querySelectorAll("#grid_divs");

const grid_size_button = document.getElementById("grid-size"); 
const enable_hover_button = document.getElementById("button1");
const disable_hover_button = document.getElementById("button2");

const cell = document.createElement("div");

grid_size_button.addEventListener("click", () => {
  squaresPerSide = window.prompt("Input size of grid (max 100 per side) ", "64");
  cell.style.width = squareSize;
  cell.style.height = squareSize;
  draw_grid(cell.style.width);
})

enable_hover_button.addEventListener("click", () => {
  console.log("Button Clicked");
  paintAllways = true;
});

disable_hover_button.addEventListener("click", () => {
  console.log("Button Clicked");
  paintAllways = false;
});

// Track mouse state globally
document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Create grid
function draw_grid(size) {

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid_divs");
    container.appendChild(cell);

    // Paint on click
    cell.addEventListener('mousedown', () => {
      cell.style.backgroundColor = "blue";
    });

    // Paint on drag
    cell.addEventListener('mouseover', () => {
      if (isMouseDown || isCKeyDown) {
        cell.style.backgroundColor = "blue";
      } else if (paintAllways){
        cell.style.backgroundColor = "blue";
      }
    });
  }
}
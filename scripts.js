const container = document.getElementById("main-grid");
let isMouseDown = false;
let isCKeyDown = false;
let paintAllways = false;

const enable_hover_button = document.getElementById("button1");
const disable_hover_button = document.getElementById("button2");

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
for (let i = 0; i < 64 * 64; i++) {
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

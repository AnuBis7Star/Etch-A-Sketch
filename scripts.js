const container = document.getElementById("main-grid");
let isMouseDown = false;

// Track mouse state globally
document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Create grid
for (let i = 0; i < 32 * 32; i++) {
  const cell = document.createElement("div");
  cell.classList.add("grid_divs");
  container.appendChild(cell);

  // Paint on click
  cell.addEventListener('mousedown', () => {
    cell.style.backgroundColor = "blue";
  });

  // Paint on drag
  cell.addEventListener('mouseover', () => {
    if (isMouseDown) {
      cell.style.backgroundColor = "blue";
    }
  });
}

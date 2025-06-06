const container = document.getElementById("main-grid");

for (let i = 0; i < 32 * 32; i++){
    const cell = document.createElement("div");
    cell.classList.add("grid_divs");
    container.appendChild(cell);
    cell.onmouseover = function change_color() {
    cell.style.backgroundColor = "blue"
    };
};

// const cell = document.querySelectorAll(".grid.divs");

// cell.onmouseover = function change_color() {
//     cell.style.backgroundColor = "blue"
//     console.log("mouseover")
// };
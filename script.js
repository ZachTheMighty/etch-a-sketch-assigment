let container = document.querySelector(".container");
const containerDimensions = 500;
let square;

function createGrid(numberOfSquares) {
  for (let i = 0; i < Math.pow(numberOfSquares, 2); i++) {
    square = document.createElement("div");
    square.classList.add("square");
    let dimension = containerDimensions / numberOfSquares;
    square.style.width = `${dimension}px`;
    square.style.height = `${dimension}px`;
    container.appendChild(square);
  }
}

createGrid(10);

let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () =>
    square.classList.toggle("orange"),
  );
  square.addEventListener("mouseleave", () => square.classList.toggle("fade"));
});

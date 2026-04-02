let container = document.querySelector("#container");
const containerDimensions = 500;
const button = document.querySelector("button");
let square, squares;

function createGrid(numberOfSquares) {
  container = document.createElement("div");
  document.querySelector("body").append(container);
  if (isNaN(numberOfSquares) || numberOfSquares === 0) return;

  for (let i = 0; i < Math.pow(numberOfSquares, 2); i++) {
    square = document.createElement("div");
    square.classList.add("square");
    let dimension = containerDimensions / numberOfSquares;
    square.style.width = `${dimension}px`;
    square.style.height = `${dimension}px`;
    container.appendChild(square);
  }
  container.classList.toggle("container");
  container.classList.toggle("active");
  leaveTrail();
}

function leaveTrail() {
  squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () =>
      square.classList.toggle("orange"),
    );

    square.addEventListener("mouseleave", () =>
      square.classList.toggle("fade"),
    );
  });
}

function clearGrid() {
  container.remove();
  container.classList.toggle("active");
}

button.addEventListener("click", () => {
  let number = 0;
  do {
    number = Number(prompt("Enter a number in the interval [1, 100)"));
  } while (number !== 0 && (number < 1 || number > 99));

  if (container.classList.contains("active")) clearGrid();
  createGrid(number);
});

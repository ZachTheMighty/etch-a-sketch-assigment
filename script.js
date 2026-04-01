let container = document.querySelector(".container");
let square;

for (let i = 1; i < 257; i++) {
  square = document.createElement("div");
  container.appendChild(square);
}

let squares = document.querySelectorAll(".container div");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () =>
    square.classList.toggle("orange"),
  );
  square.addEventListener("mouseleave", () =>
    square.classList.toggle("fade"),
  );
});

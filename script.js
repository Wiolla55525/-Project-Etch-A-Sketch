const buttons = document.querySelectorAll(".buttons");
const board = document.querySelector(".board");

let pixels = "";
let screen = 16;

const drawGrid = (screen) => {
  for (i = 0; i < screen ** 2; i++) {
    pixels = document.createElement("div");
    pixels.classList.add("pixels");
    pixels.style.backgroundColor = "white";
    board.appendChild(pixels);
  }

  board.style.gridTemplateColumns = `repeat(${screen}, auto)`;
  board.style.gridTemplateRows = `repeat(${screen}, auto)`;
};

drawGrid(screen);

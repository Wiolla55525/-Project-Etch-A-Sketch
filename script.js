const board = document.querySelector(".board");
const buttons = document.querySelectorAll(".buttons");
let pixels = "";
let gridTemplate = 16;

const resizeBtn = document.getElementById("resize");
const clearBtn = document.getElementById("clear");

const drawGrid = (screen) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < screen ** 2; i++) {
    pixels = document.createElement("div");
    pixels.classList.add("pixels");
    pixels.style.backgroundColor = "white";
    board.appendChild(pixels);
  }

  board.style.gridTemplateColumns = `repeat(${screen}, auto)`;
  board.style.gridTemplateRows = `repeat(${screen}, auto)`;

  function clearGrid() {
    clearBtn.addEventListener("click", () => {
      pixels.style.backgroundColor = "white";
    });
  }
  clearGrid();
};

drawGrid(gridTemplate);

const colorOnHover = () => {
  let pixelsColor = document.querySelectorAll(".pixels");
  pixelsColor.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "pink";
    });
  });
};
colorOnHover();

clearBtn.addEventListener("click", () => {
  board.innerHTML = "";

  return drawGrid(gridTemplate) + colorOnHover();
});
// board.addEventListener('mouseover', changeColor)
// pixels.forEach(() => {
//   pixels[0].addEventListener('mouseover', changeColor)
// });
// Array.from(board).forEach(pixels => {
//     pixels.style.backgroundColor = "red";
//   pixels.style.border = '50px solid blue';
// })
// function changeColor () {
//   console.log(pixels)

//   console.log('color changed');
// }

const colorsBtn = document.getElementById("colors");

const randomColor = () => {
  let color = "rgba(";
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 255) + ",";
  }
  return color + "1)";
};

const active = () => {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pxl) => {
    pxl.addEventListener("mouseover", (e) => {
      switch (currentMode) {
        case "colors":
          e.target.style.backgroundColor = randomColor();
          break;
      }
    });
  });
};
active();
colorsBtn.addEventListener("click", active);

function resetSize() {
  let number = prompt("Enter new pixels number, which is not more than 100");
  if (number > 100 || number === null) {
    number = 100;
  }
  pixels.style.gridTemplateRows = `repeat(${number}, auto)`;

  pixels.style.gridTemplateColumns = `repeat(${number}, auto)`;
  board.innerHTML = "";

  drawGrid(number);
  colorOnHover();
}

resizeBtn.addEventListener("click", resetSize);

const board = document.querySelector(".board");
let pixels = "";
const gridTemplate = 16;
const resizeBtn = document.getElementById("resize");
const clearBtn = document.getElementById("clear");
const blackBtn = document.getElementById("black");
const pinkBtn = document.getElementById("pink");

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

const activeColor = "pink";
const colorOnHover = () => {
  const pixelsColor = document.querySelectorAll(".pixels");
  pixelsColor.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = activeColor;
    });
  });
};
colorOnHover();

pinkBtn.addEventListener("click", colorOnHover);

const colorOnHoverBlack = () => {
  const pixelsColor = document.querySelectorAll(".pixels");
  pixelsColor.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
};
blackBtn.addEventListener("click", colorOnHoverBlack);

clearBtn.addEventListener("click", () => {
  board.innerHTML = "";

  return drawGrid(gridTemplate) + colorOnHover();
});

const colorsBtn = document.getElementById("colors");
const randomColor = () => {
  let color = "rgba(";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    // eslint-disable-next-line prefer-template
    color += Math.floor(Math.random() * 600) + ",";
  }
  // eslint-disable-next-line prefer-template
  return color + "1)";
};

const active = () => {
  const pixelsColor = document.querySelectorAll(".pixels");
  pixelsColor.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = randomColor();
    });
  });
};
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

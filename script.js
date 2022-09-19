const buttons = document.querySelectorAll(".buttons");
const board = document.querySelector(".board");

let pixels = "";
let screen = 16;

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
};

drawGrid(screen);


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

const colorOnHover = () => {
  let pixelsColor = document.querySelectorAll('.pixels');
  pixelsColor.forEach(pixel => {
    pixel.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'pink';
    })
  })
}
colorOnHover();

// const resize = document.getElementById('#resize');

// resize.addEventListener('onclick', (screen) => {
//   screen = prompt('enter pixels number')
// })
buttons.addEventListener('onclick', function () {
  prompt('hello here')
})

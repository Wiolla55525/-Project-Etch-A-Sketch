const board = document.querySelector(".board");
const buttons = document.querySelectorAll(".buttons");
let pixels = "";
let gridTemplate = 10;

const resizeBtn = document.getElementById('resize');
const clearBtn = document.getElementById('clear');

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
  
  function clearGrid(){
    clearBtn.addEventListener('click', () => {
        pixels.style.backgroundColor = "white"
   })
  }
  clearGrid()
};

drawGrid(gridTemplate);


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

console.log('hello');



// resizeBtn.addEventListener('click', (screen) => {
//   screen = prompt('enter pixels number')
// })
// resizeBtn.addEventListener('click', () => prompt('hello here'))

// const resizeScreen = (request) => {
//   if (request === 'resize') {
//     gridTemplate = prompt('Please enter new pixels number, which is not more than 100', true);
//     if(gridTemplate > 100 || gridTemplate === null) {
//       gridTemplate = 100;
//     }
//   }
//   board.innerHTML = '';
//   drawGrid(gridTemplate);
// };


function resetSize(){
      
      let number = prompt("Please enter new pixels number, which is not more than 100");
      pixels.style.gridTemplateRows = `repeat(${number}, auto)`;
      pixels.style.gridTemplateColumns = `repeat(${number}, auto)`;
      drawGrid(number);  
}

resizeBtn.addEventListener('click', resetSize)



// let colorPainting = 'red';

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     if(button.id === 'resize' || button.id === 'clear'){
//       resizeScreen(button.id);
//     }
//     else{
//       colorPainting = button.id;
//       resizeScreen(button.id);
//     }
//   });
// });
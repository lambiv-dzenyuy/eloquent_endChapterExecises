let grid=document.querySelector("#grid");
let gridHeight=15;
let gridWidth=30;
const gridChildren=[];
for(let i=0; i<gridHeight; i++){
    for(let j=0; j<gridWidth; j++){
        let griditem=document.createElement("input");
        griditem.type="checkbox";
        gridChildren.push(griditem);
        grid.appendChild(griditem);
        if(Math.random()<0.5){
          griditem.checked = 'checked';
        }   
    }
   grid.appendChild(document.createElement("br")) 
}


 function gridFromCheckboxes() {
  return gridChildren.map(box => box.checked);
}
function checkboxesFromGrid(grid) {
  grid.forEach((value, i) => gridChildren[i].checked = value);
}
function randomGrid() {
  let result = [];
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    result.push(Math.random() < 0.3);
  }
  return result;
}

checkboxesFromGrid(randomGrid());

 function countNeighbors(grid, x, y) {
  let count = 0;
  for (let y1 = Math.max(0, y - 1); y1 <= Math.min(gridHeight - 1, y + 1); y1++) {
    for (let x1 = Math.max(0, x - 1); x1 <= Math.min(gridWidth - 1, x + 1); x1++) {
      if ((x1 != x || y1 != y) && grid[x1 + y1 * gridWidth]) {
        count++;
      }
    }
  }
  return count;
}

function nextGeneration(grid) {
  let newGrid = new Array(gridWidth * gridHeight);
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      let neighbors = countNeighbors(grid, x, y);
      let offset = x + y * gridWidth;
      if (neighbors < 2 || neighbors > 3) {
        newGrid[offset] = false;
      } else if (neighbors == 2) {
        newGrid[offset] = grid[offset];
      } else {
        newGrid[offset] = true;
      }
    }
  }
  return newGrid;
}

function turn() {
  checkboxesFromGrid(nextGeneration(gridFromCheckboxes()));
}

document.querySelector("#next").addEventListener("click", turn);


let grid=document.querySelector("#grid");
let gridHeight=15;
let gridWidth=30;
const gridChildren=[[]];
for(let i=0; i<gridHeight; i++){
   gridChildren[i]=[];
    for(let j=0; j<gridWidth; j++){
        let griditem=document.createElement("input");
        griditem.type="checkbox";
        gridChildren[i][j]=griditem;
        grid.appendChild(griditem);
        if(Math.random()<0.5){
          griditem.checked = 'checked';
        }
       
    }
   grid.appendChild(document.createElement("br"));
}

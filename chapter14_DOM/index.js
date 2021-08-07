const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here
let container=document.getElementById("mountains");

let table=document.createElement("table");

container.appendChild(table);

let titleContainer=document.createElement("tr");
table.appendChild(titleContainer);

let title1=document.createElement("th"); title1.innerHTML="name";
titleContainer.appendChild(title1);

let title2=document.createElement("th"); title2.innerHTML="height"
titleContainer.appendChild(title2);

let title3=document.createElement("th"); title3.innerHTML="place";
titleContainer.appendChild(title3);

for(let element=0; element<MOUNTAINS.length-1; element++){

  let rowData=document.createElement("tr");
  table.appendChild(rowData);
  
  let tableData1=document.createElement("td"); tableData1.innerHTML=MOUNTAINS[element].name;
  rowData.appendChild(tableData1);
  tableData1.style.border="2px solid black";
  let tableData2=document.createElement("td"); tableData2.innerHTML=MOUNTAINS[element].height;
  rowData.appendChild(tableData2);
  tableData2.style.border="2px solid black";
  let tableData3=document.createElement("td"); tableData3.innerHTML=MOUNTAINS[element].place;
  rowData.appendChild(tableData3);
  tableData3.style.border="2px solid black";
  for(let each of [tableData1, tableData2, tableData3]){
    if(typeof each !=String) each.style.textAlign="right";
  }
}
table.style.border="2px solid black";
table.style.width="100%";
table.style.borderCollapse="collapse";
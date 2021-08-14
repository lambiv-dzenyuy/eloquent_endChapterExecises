let node;

let buttons=[]
function asTabs(node) {
  // Your code here.
  const content=node.getElementsByTagName("div");
 for(let i=(content.length)-1; i>=0; i--){
 let button=document.createElement("button");
 button.addEventListener("click", () =>selectTab(button));
 let text=content[i].getAttribute("data-tabname");
  button.innerHTML=text
   buttons.push(button);
   node.insertBefore(button, node.firstChild);}}
   /*
let contents=documen
 function selectTab(selected) {
  for (let i=0; i<buttons.length; i++) {
    let i=selected; 
    let contents=Array.from(content);
     if(buttons[i] !=selected){
      contents[i].style.disspay = "none";
    }
    
  }
}
selectTab(buttons[2]);
}
}
asTabs(document.querySelector("tab-panel"));*/
console.log(buttons);
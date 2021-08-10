function asTabs(node) {
  // Your code here.
 const content=node.getElementsByTagName("div");
  let buttons=[]
 for(let i=(content.length)-1; i>=0; i--){
 let button=document.createElement("button");
 button.addEventListener("click", () =>selectTab(tab));
 let text=content[i].getAttribute("data-tabname");
  button.innerHTML=text
   buttons.push(button);
   node.insertBefore(button, node.firstChild);
   

 function selectTab(selectedTab) {
  for (let i=0; i<buttons.length; i++) {
    
     if(i!=selectTab){
      i.style.disspay = "none";
      i.style.color = selected ? "red" : "";
    }
    
  }
}
selectTab(buttons[0]);
}
}
asTabs(document.querySelector("tab-panel"));
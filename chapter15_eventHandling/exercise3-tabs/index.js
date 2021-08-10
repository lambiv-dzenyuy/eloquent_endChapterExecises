function asTabs(node) {
    // Your code here.
   const content=node.getElementsByTagName("div");
    let buttons=[]
   for(let i=(content.length)-1; i>=0; i--){
   let button=document.createElement("button");
   let text=content[i].getAttribute("data-tabname");
    button.innerHTML=text
     buttons.push(button);
     console.log(button.innerHTML);
     console.log(content.length);
     node.insertBefore(button, node.firstChild);
   }
   node.addEventListener("click", even)
  }

  asTabs(document.querySelector("tab-panel"));
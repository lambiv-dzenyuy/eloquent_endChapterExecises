function byTagName(node, tagName) {
	let tagsFound=[];
    tagName=tagName.toUpperCase();
    function check(node){
    for(let i=0; i<node.childNodes.length-1; i++){
      let children=node.childNodes[i];
      if(children.nodeType == document.ELEMENT_NODE){
      	if(children.nodeName==tagName) tagsFound.push(children);
        check(children);
      }
       
    }
     
    }
    check(node);
    return tagsFound;
  }
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2

 

  let run=document.getElementById("button");
  run.addEventListener("click", () =>{
     let output =document.getElementById("output");
     output.innerHTML = "";
 	let code = document.getElementById("code").value;
  try {
    let result = Function(code)();
    output.innerHTML=String(result);
    
  }
  catch(error) {
    output.innerHTML = "Input is " + error;
  }
  
  });
 



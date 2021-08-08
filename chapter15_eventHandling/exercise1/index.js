

  let balloon=document.querySelector("p");
  let font= 10;
  window.addEventListener("keydown", event => {
  	if (event.key=="ArrowUp"){
     balloon.style.fontSize=font+10 + 'px';
     font=font+10;
     if(font=210){
         document.querySelector("p").innerHTML="💥";
         removeEventListener("keydown", event);
        
     }
    }else if(event.key=="ArrowDown"){
        balloon.style.fontSize=font-10 + "px";
        }
  });

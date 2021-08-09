let trail=document.createElement("div");
  trail.className="trail";
  document.body.appendChild(trail);
  window.addEventListener("mousemove", event => {
    trail.style.left = (event.pageX - 3) + "px";
     trail.style.top = (event.pageY - 3) + "px";
  
  });
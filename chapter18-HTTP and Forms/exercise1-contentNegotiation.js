fetch("https://eloquentjavascript.net/author",   {headers:{Accept: 'application/json'}})
  .then(response => response.text())
.then(response => console.log(response))
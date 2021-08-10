      

fetch("https://eloquentjavascript.net/author",   {headers:{Accept: 'application/json'}})
  .then(response => response.text())
.then(response => console.log(response));
        //OUTPUT
        /*
        {
    "name": "Marijn Haverbeke",
    "email": "marijn@haverbeke.nl",
    "website": "https://marijnhaverbeke.nl/"
        }
        */


fetch("https://eloquentjavascript.net/author",   {headers:{Accept: 'text/html'}})
  .then(response => response.text())
.then(response => console.log(response));

     //OUTPUT
     /*
     !doctype html>

<div vocab="http://schema.org/" typeof="Person">
  <p><span property="name">Marijn Haverbeke</span>, <span
  property="jobTitle">Programmer</span></p>

  <p>You can reach me at <a href="mailto:marijn@haverbeke.nl"
  property="email">marijn@haverbeke.nl</a>, or visit my web page, <a
  href="https://marijnhaverbeke.nl/" property="url">marijnhaverbeke.nl</a>.</p>
</div>
*/

fetch("https://eloquentjavascript.net/author",   {headers:{Accept: 'text/plain'}})
  .then(response => response.text())
.then(response => console.log(response));

           //OUTPUT

           /*
           My name is Marijn Haverbeke. You can email me at marijn@haverbeke.nl, or visit my website, https://marijnhaverbeke.nl/ .*/

fetch("https://eloquentjavascript.net/author",   {headers:{Accept: 'application/rainbows+unicorn'}})
  .then(response => response.text())
.then(response => console.log(response))
//output
/*
<html>
<head><title>406 Not Acceptable</title></head>
<body>
<center><h1>406 Not Acceptable</h1></center>
<hr><center>nginx/1.16.0</center>
</body>
</html>
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->*/
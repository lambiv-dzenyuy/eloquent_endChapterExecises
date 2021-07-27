//looping triangle
//Write a loop that makes seven calls to console.log to output a triangle

for ( var count=0; count<8; count++){
	console.log("#".repeat(count))    
}


//FizzBuzz


for(var count=0; count<100; count++){
	if(count%3 == 0){
    	console.log(`FIZZ`)} //PRINT FIZZ  when the number is divisile by 3
    else if(count%5 == 0){
   		console.log(`BUZZ`)} //print BUZZ when the number is divissible by 5
  	else{console.log(count)}
}

//Extended version of FIZZBUZZ ABOVE

for(var count=0; count<100; count++){
    if(count%3==0 && count%5==0){
        console,log(`FIZZBUZZ`) //prints FIZZBUZZ when a number is both divisible by 3 and 5
    }
	else if(count%3 == 0){
    	console.log(`FIZZ`)}
    else if(count%5 == 0){
   		console.log(`BUZZ`)}
     
  	else{console.log(count)}
}


//CHESSBOARD
//generate a 8x8 grid chessboard

for(var count=0; count<8; count++){
	if (count%2 ==0){
		console.log(` #`.repeat(8))}
    else{console.log(`# `.repeat(8))}
}

//generating a general grid of given width and height sizes

var width= Number(prompt("Enter the lenght of the grid"));
var height=Number(prompt("Enter the height of the grid"));
for(var count=0; count<height; count++){
	if (count%2 ==0){
		console.log(` #`.repeat(width))}
    else{console.log(`# `.repeat(width))}
}



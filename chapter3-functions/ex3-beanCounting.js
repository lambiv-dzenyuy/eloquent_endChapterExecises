/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
*/


function countBs(string){
    var numberOfBs=0;
    const stringSize=string.lenght;
    for(let count=0; count < stringSize; count++){
        if(string[count]="B"){
            numberOfBs++;
        }
    }
    console.log(numberOfBs);
}
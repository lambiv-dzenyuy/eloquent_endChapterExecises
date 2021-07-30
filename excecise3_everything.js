/*
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/
function every(nArray, anyFunction){
    let total=0;
      for(let count of nArray){
          if(anyFunction(count)){
              total++
          }
      }
      if(total==nArray.length) return true;
      else return false;
}
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(every(array,even));
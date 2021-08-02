/*
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/

     //using loops
function everyn(nArray, anyFunction){
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

console.log(everyn(array,even));


        //using the some method

        const array = [4, 8, 10, 7, 8];

        function everyn1(nArray, anyFunction){
            return !nArray.some(test => !anyFunction(test));
        }
        const even = (element) => element % 2 === 0;
        console.log(everyn1(array, even));
/*
write two functions, reverseArray
and reverseArrayInPlace . The first, reverseArray , takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace , does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method
*/

function reverseArray(array){
    let end=array.length;
    let generateArray=[];
    for(let count=0; count<end; count++){
      generateArray.unshift(array[count]);
    }
    return generateArray
    
  }
  console.log(reverseArray([1, 2, 3]))


  //second array

  function reverseArrayInPlace(array){
    let stop=array.length;
    for(let count=0; count<Math.floor(stop/2); count++){
      let temp=array[stop-1-count];
      array[stop-1-count]=array[count];
      array[count]=temp;
    }
    return array;
    
  }
  result=reverseArrayInPlace([1, 2, 3]);
  console.log(result)
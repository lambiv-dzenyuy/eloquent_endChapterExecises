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
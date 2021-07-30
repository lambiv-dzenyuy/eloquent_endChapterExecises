/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays
*/
console.log(reduce([1, 5, 4, [4, 4]]));
function flattenArray(array){
    let flattened=[];
    for(let count=0; count<array.length; count++){
        if(!typeof(array[count])==Object){
            for(let i=0; i<array[count].length; i++){
                flattened.push(array[count][i]);
            }
        }
        else flattened.push(array[count]);
    }
    return flattened;
}
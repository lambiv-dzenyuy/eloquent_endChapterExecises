/*
Write a function arrayToList that builds up a list structure
*/


function arrayToList(array){
    let list=null;
    for(let count=array.length-1; count>=0; count--){
        list={value : array[count], rest: list};
    }
    return list;
}
arr=[1, 2, 3];
console.log(arrayToList(arr));



//Also write a listToArray function that produces an array from a list
 

function listToArray(list){
    let newArray=[];
    for(let count=list; count ; count=count.rest){
        newArray.unshift(count.value);
    }
    return newArray;
}
console.log(listToArray(arrayToList(arr)));

/*
Then add a helper function prepend , which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth , which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
*/

function prepend(list, element){
    list={value: element, rest: list};  //element is added at start of list
    return list; 
}
console.log(prepend(arrayToList(arr),5));
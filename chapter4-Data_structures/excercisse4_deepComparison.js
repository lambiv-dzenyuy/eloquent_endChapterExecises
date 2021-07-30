/*
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual .
*/

function deepEqual(value1, value2){
    if(value1===value2) return true;
    if((value2 || value1==null || (typeof(value1) || typeof(value2))!=Object)) return false;
    let keysValue1=Object.keys(value1);
    let keysValue2=Object.keys(value2);
    if(keysValue1.length!=keysValue2.length) return false;
    for(let eachKey of keysValue1){
        if(!keysValue2.includes(eachKey) || !deepEqual(value1[eachKey], value2[eachKey])) return false
        else return true;
    }

}

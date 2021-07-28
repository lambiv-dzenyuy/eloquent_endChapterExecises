/*Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?*/


function isEven(number){
    if(number==1){
        return (!(number==1));
    }
    else if(number==0){
        return(number==0);
    }
    else{
        return (isEven(number-1));
    }
}


//the behavior when the above code is tested with -1


/* Uncaught RangeError: Maximum call stack size exceeded
    at isEven (<anonymous>:2:5)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17)
    at isEven (<anonymous>:9:17) */


    //the function bellow fixes the issue

    function isEven(number){
        if(number<0){
            number = -number;   //converts negative number to postive numbers
        }
        if(number==1){
            return (!(number==1));
        }
        else if(number==0){
            return(number==0);
        }
        else{
            return (isEven(number-1));
        }
    }
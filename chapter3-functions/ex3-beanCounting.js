/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
*/


function countBs(string){
    numberOfBs=0;
    for(var count=0; count<string.length; count++){
      if(string[count]=="B"){
          numberOfBs++;
      }
    }
    console.log(numberOfBs);
                                                 }
    
/*Next, write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.*/

     //countChar


     function countChar(string, ch){    //ch is the character wich is to be compared
        numberOfBs=0;
        for(var count=0; count<string.length; count++){
          if(string[count]== ch){
              numberOfBs++;
          }
        }
        return numberOfBs
                                                    }

    //rewriting countBs to include countChar

    function countBs(string){
        return countChar(string, "B");
    }
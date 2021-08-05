/*
Write an async function locateScalpel that does this, starting at the nest 
on which it runs. You can use the anyStorage function defined earlier to 
access storage in arbitrary nests. The scalpel has been going around long enough that
 you may assume that every nest has a "scalpel" entry in its data storage.*/


 async function locateScalpel(nest) {
    // Your code here.
    let location =nest.name;
    for(;;){
    let next = await anyStorage(nest, location, "scalpel");
      if(next == location) return location;
      location = next
    }
}
console.log(locateScalpel(bigOab));

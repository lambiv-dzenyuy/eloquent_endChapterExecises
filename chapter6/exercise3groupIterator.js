//Make the Group class from the previous exercise iterable.


class Group {

    constructor(){
        this.group=[];
        
    }
  static  test(a) {
        console.log(`hello`, a);
    }
    add(a){
        if(!this.group.includes(a)){
        this.group.push(a);
        }
    }
    has(a){
        return this.group.includes(a);
    }
    delete(a){
        let index = this.group.indexOf(a);
        if(!(index==-1)){
            return this.group.splice(index, 1);
        }
    }
    
    static from(a){
       // Group.test(`god`)
        let p= new Group();
        for(let count of a){ 
        p.add(count);
        }
      return p
        
        
    }
    }

class GroupIterator {
    constructor(grouped){
        this.grouped=grouped;
        this.counter=0;
    }
next(){
    if(this.counter >=this.grouped.group.length){
        return {done: true}
    }else{
        let result = {
            value: this.grouped.group[this.counter], done: false}
            this.counter++;
            return result;
    }

}
}
Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
    };

for (let value of Group.from(["a", "b", "c","d"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
  //   d
  
  
 
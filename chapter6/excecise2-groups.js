/*
Write a class called Group (since Set is already taken). Like Set , it has add ,
delete , and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
*/
class Group {
    // Your code here.
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
  
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
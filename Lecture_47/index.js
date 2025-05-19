// Classes in JS
class Human{
    //Properties
    age = 13;
    #wt = 80;
    ht = 180;

    // constructor
    constructor(newAge, newheight, newWeight){
        this.age = newAge;
        this.ht = newheight;
        this.#wt = newWeight;
    }

    //Functions Behaviours 
    walking(){
        console.log("I am walking", this.#wt);
    }

    running(){
        console.log("I am Running");
    }

    //geters and setters for private members
    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(value){
        this.#wt = value;
    }
}

let obj = new Human;
obj.walking();

obj.age = 18;
console.log(obj);

obj.modifyWeight = 150;
console.log(obj.fetchWeight);

let obj2 = new Human(19, 200, 170);
console.log(obj2);

console.log(obj2.fetchWeight);

obj2.modifyWeight = 120;
console.log(obj2.fetchWeight);
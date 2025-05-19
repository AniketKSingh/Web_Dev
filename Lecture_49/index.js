let obj = {
    age: 12, 
    wt: 63,
    ht:130
};

console.log(obj);

// Creating the deep copy of this object with different methods
// 1. spread operator
let obj2 = {...obj};
console.log(obj2);

obj2.age = 14;

console.log(obj);
console.log(obj2);

// 2. assign operator
let obj3 = Object.assign({}, obj);
console.log("obj3", obj3);

// 3. iteration 
let dest ={};
for(let key in obj){
    let newKey = key;
    let newValue = obj[key];

    dest[newKey] = newValue;
}

console.log("Dest", dest);
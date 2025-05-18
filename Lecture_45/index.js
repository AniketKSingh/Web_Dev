// Function Hoisting

// sayMyName();

// function sayMyName(){
//     console.log("Babbar");
// }

// // Varaiable Hoisting 
// console.log(a);  // undefined because only variable declaration is moved to top not the value 
// var a = 10;

// let and const keyword will throw error
// console.log(val);
// let val = 10;



class Human {
    height= 180; 
    name=  "hen"
};

const obj1 = new Human();

console.log(obj1);

let greet = function(){
    console.log("Greeting for the day");
}
greet();


function greetMe(greet, fullName){
    console.log("Hello", fullName);
    greet();
}

greetMe(greet, "babbar");

// returning function
function solve(number){
    return function(number){
        return number * number;
    }
}

let ans = solve(10);
let finalAns = ans(10);
console.log(finalAns);

// using function in ds
const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a - b;
    },
    function(a,b){
        return a*b;
    }
];

let first = arr[0];
let sum = first(10,20);
console.log(sum);

let second = arr[1];
let sub = second(20, 14);
console.log(sub);

let third = arr[2];
let mul = third(2, 8);
console.log(mul);

// function as property of obj
let obj={
    age: 25,
    wt: 36,
    greet: ()=>{
        console.log('hello Dunia');
    }
}

obj.greet();

// Default Parameters in Functions
// function sayMyName(myName){
//     console.log("My name is: ",myName);
// }

// sayMyName("Love");

// let sayName = (myName = "Prabhu") =>{
//     console.log("My new Name is:",myName);
// }
// sayName(null);
// sayName(undefined);

function sayMyName(fName = "Uday", lName = fName.toUpperCase()){
    console.log("My frist name is:",fName,"last Name is:", lName);
}

sayMyName();
sayMyName("Love", "Babbar");

// object as parameter
// function solve(value){
//     console.log("Hello Ji", value);
// }
// solve(10);

function solve(value = [10,20,30,40]){
    console.log("Hello Jee", value);
}

solve();

function solve2(value = {age:5, wt:90, ht : 100}){
   console.log("Hello Jee", value);
}
solve2();

// another function as parameter
function getAge(){
    return 18;
}

function utility(name = "Babbar", age = getAge()){
    console.log(name, age);
}

utility();
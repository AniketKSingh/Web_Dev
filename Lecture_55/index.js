function sayMyName(){
    console.log("Love Babbar");
}
console.log("Hi ");
setTimeout(sayMyName, 5000);
console.log("Bhaiyaa");

function sayName(name){
   console.log("My Name is : " + name);
}

setTimeout(sayName, 3000, "Papu");

console.log("after sayName : -> ");

const timeOutId = setTimeout(()=>{
    console.log("hi this won't be displayed");
}, 10000);

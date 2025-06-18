// let firstPromise = new Promise((resolve, reject)=>{
//     console.log("Babbar");
//     resolve(1001);
// });

// function sayMyname(){
//     console.log("My name is Love Babbar");
// }

// setTimeout(sayMyname, 2000);

// let firstPromise = new Promise((resolve, reject) =>{
//     setTimeout(function sayMyname(){
//         console.log("My name is Love Babbar");
//     },10000);
//     resolve(1);
// });

// let promise1 = new Promise((resolve, reject)=>{
//     let success = false;
//     if(success){
//         resolve("Promise fullfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// });

// promise1.then((message)=>{
//     console.log("Then ka message is :", message);
// }).catch((error)=>{
//     console.log("Error" + error);
// });

// promise1.then((message)=>{
//     console.log("first msg" + message);
//     return "Promise fulfilled second message";
// }).then((message)=>{
//     console.log("Second msg:" + message);
//     return "Promise fulfilled third message";
// }).then((message)=>{
//     console.log("third msg:" + message);

// }).catch((error)=>{
//     console.error("inside catch:" +error);
// }).finally((message)=>{
//     console.log("Inside final: " + message);
// })

let promise1 = new Promise((resolve, reject)=>{
    console.log("First");
    setTimeout(resolve, 1000, "first")
});
let promise2 = new Promise((resolve, reject)=>{
    console.log("Second");
    setTimeout(resolve, 2000, "second")
});
let promise3 = new Promise((resolve, reject)=>{
    console.log("Third");
    setTimeout(resolve, 3000, "third")
});

Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values);
});



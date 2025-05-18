// function sayMyName(){
//     console.log("babbar");
// }

// sayMyName();

// function printCounting(a){
//    for(let i = 0; i <= a; i++){
//     console.log(i);
//    }
//    return;
// }

// printCounting(5);

// function getAverage(a, b){
//     let avg = (a+b)/2;
//     return avg;
// }

// let ans = getAverage(10,20);
// console.log(ans);

// let getSum = function (a,b){
//     return a + b;
// }

// console.log(getSum(10,13));

// let getExp = (x,y) =>{
//     let ans = x**y;
//     return ans;
// }

// console.log(getExp(10,3));
// let addString = (a,b) =>{
//     let res = a+ b;
//     return res;
// }

// console.log(addString('Babbar', 'Love'));

// let getSum= (a, b) => {
//     return a+ b;
// }

// let obj = {
//     name: "Love",
//     age : 25,
//     weight : 65

// };

// console.log(obj);

// let obj2 = {
//     first_name : 'Love' ,
//     age : 22,
//     weight : 80,

//     greet: function(){
//        console.log("Hello ji kaise ho")
//     }
// };

// console.log(obj2);
// obj2.greet();

// // shalow copy
// let obj3 = obj2;

// // Deep Copy
// let obj4 = JSON.parse(JSON.stringify(obj2));

// obj4.first_name = "Neil";

// console.log(obj2);
// console.log(obj4);
// obj4.greet(); // This function cant be used this need to be copied manually


// let arr = [10,20,30,40];

// //method 2
// let brr = new Array(10, 20, 90);
// console.log(brr);

// console.log(typeof(brr));

// let arr = ['Love', 'Babbar', true, 45];
// console.log(arr);

// arr.push('Hi');
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift('Love');
// console.log(arr);

// arr.push(20);
// arr.push(30);
// arr.push(40);
// console.log(arr);

// // console.log(arr.splice(2,4));
// arr.splice(0,2, 'Love Babbar');
// console.log(arr);

// let arr = [10,20,30];

// let ansArray = arr.map((number) =>
// {
//     return number * number;
// })

// console.log(ansArray);

// arr.map((number, index) =>{
//    console.log(number);
//    console.log(index);
// })

// let arr = [10,21,20,14,25,27];

// let evenarray = arr.filter((number) =>{
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(evenarray);

// filter -> to filter out element 
// let arr = [1,2, "Love", 'Kunal', null];

// let ans = arr.filter((value)=> {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     return false;
// })

// console.log(ans);

//Reduce
// let arr = [10,20,30,40];

// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// },0)

// console.log(ans);

// let brr = [9, 1,2 , 7, 3, 6];
// // brr.sort();
// // brr.reverse();
// // console.log(brr);

// brr.sort(function(a,b) {return b-a});

// console.log(brr);

// let arr = [-10, -11, 12, 22 , 26];
// let found = arr.find(function(element){
//     return element > 0;
// });

// console.log(found);

// let arr = [10, 20, 30 , 40];
// for(let value of arr){
//     console.log(value);
// }

// let brr = "Babbar";
// for(let value of brr){
//     console.log(value);
// }

let arr= [ 10, 20 , 30, 40];

function getSum(arr){
   let len = arr.length;
   let sum = 0;
   
   for(let index = 0; index < len ; index++){
    sum += arr[index];
   }
   return sum;
}

let ans = getSum(arr);
console.log(ans);
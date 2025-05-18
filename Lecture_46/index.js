var a = 10;

function sayHello(){
    var fullName = "earth";
    console.log("hello dunai", fullName);
}

// console.log(marks);
// temporal dead zone
sayHello();
// console.log(fullName);

{
    var b = 180;
    const c = 10;
    let d = 15;
}

console.log(b);
// console.log(c);
// console.log(d);

// temporal dead zone
let marks = 100;
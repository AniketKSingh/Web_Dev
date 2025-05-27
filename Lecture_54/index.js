const t1 = performance.now();

// let para = document.createElement('p');
//     para.textContent = "This is para " ;
//     document.body.append(para);

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.append(para);
}

const t2 = performance.now();

console.log("Total Time by code 1: " + (t2 - t1));

const t3 = performance.now();

let mydiv = document.createElement('div');

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para" + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("total time by code 2: " + (t4 - t3));

// document fragement method
const t5 = performance.now();

let fragement = document.createDocumentFragment();

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is frag para" + i;
    fragement.appendChild(para);
}

document.body.appendChild(fragement);

const t6 = performance.now();

console.log("frament method time: " + (t6 - t5));

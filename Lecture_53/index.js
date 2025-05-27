let fpara = document.getElementById('fpara');
console.log(fpara);
console.log(fpara.textContent);

function changeText(event){
    console.log(event);
    fpara.textContent = "Hello Babbar";
}

fpara.addEventListener('click', changeText, true);

let anchorElement = document.querySelector('#fanchor');
anchorElement.addEventListener('click', function(){
   event.preventDefault();
   anchorElement.textContent = "click done bhai";
});

// let para = document.querySelectorAll('.para');
// for(let i = 0; i < para.length; i++){
//     let pa = para[i];
//     pa.addEventListener('click', function(){
//         alert("You have clicked on para " + (i+1));
//     });
// }

let paras = document.querySelectorAll('.para');

function alertPara(event){
   alert("You have clicked on para: " + event.target.textContent);
}

for(let i = 0; i < paras.length; i++){
    let para = paras[i];
    console.log("event Listner added");
    para.addEventListener('click', alertPara);
}

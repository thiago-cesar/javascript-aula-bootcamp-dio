/*var currentNumberWrapper= document.getElementById('currentNumber')
var currentNumber=0

function increment(){
    currentNumber=currentNumber+1;
    currentNumberWrapper.innerHTML=currentNumber;
}
function decrement(){
    currentNumber=currentNumber-1;
    currentNumberWrapper.innerHTML=currentNumber;
}*/

const currentNumberWrapper1=document.getElementById("adicionar");
currentNumberWrapper1.addEventListener("click",increment)
const currentNumberWrapper2=document.getElementById("subtrair");
currentNumberWrapper2.addEventListener("click",decrement)
var incrementador=0;


function increment(){
    incrementador=incrementador+1;
    document.getElementById("currentNumber").innerHTML=incrementador;
}
function decrement(){
    incrementador=incrementador-1;
    document.getElementById("currentNumber").innerHTML=incrementador;
}

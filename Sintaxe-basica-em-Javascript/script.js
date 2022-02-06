/*//tipos primitivos

//boolean

var VOuF=false;
console.log(VOuF);
console.log(typeof(VOuF));

//number

var numeroQualquer=1;
console.log(typeof(numeroQualquer));

//string

var nome='thiago'
console.log(typeof(nome))

//como declarar

var variavel
console.log(variavel)

//let - escopo local de bloco

let variavel2='thiago'
console.log(variavel2)

//constante

//const constanteX
//console.log(constanteX)
constanteX=56;
console.log(constanteX)
//constanteX=12
console.log(constanteX)


//Escopo local e global


var escopoGlobal='global'
console.log(escopoGlobal)

function escopoLocal(){
    let escopoLocalInterno='local'
    console.log(escopoLocalInterno)//não pode ser exutado fora da função, pois variaveis do tipo let são de escopo local(bloco).
}

escopoLocal()

//comparacao

var atribuicao='0'==0;
console.log(atribuicao)

var atribuicao2='0'===0;
console.log(atribuicao2)

//adicao

var adicao=1+1
console.log(adicao)

var sub=1-1;
console.log(sub)

var mult=2*2
console.log(mult)

var div=4/2;
console.log(div)

var resto=5%2;
console.log(resto)

var pot=2**10
console.log(pot)

//operadores relacionais

var maiorQue=5>2;
console.log(maiorQue)
var menorQue=5<2;
console.log(menorQue)
var maiorOuIgual=5>=2;
console.log(maiorOuIgual);
var menorOuIgual=5<=2;
console.log(menorOuIgual)

//operadores logicos

var e=true&&false
console.log(e)
var ou=true||false
console.log(ou)
var inversao=false!=true
*/

//Arrays e vetores:


let array=['string',1,true]
console.log(array)

//pode guardar vários tipos de dados:

let array2=['string',1,true,['array'],['array2'],['array3'],['array4']]
console.log(array2)
//acessar um termo em específico:
console.log(array2[2])

//Manipulando arrays:

//forEach()-itera uma array;
//push()- add item no final do array;
//pop()-remove item no final do array;
//shift()-remove item no início do array;
//unshift()-add item no incício do array
//indexOf()-retorna o índice de um valor.
//splice()- remove ou substitui um item pelo índice;
//slice()-retorna uma parte de um array existente.

//array.forEach(function(item,index){console.log(item,index)})

/*array.push('novo item')
console.log(array)*/

/*array.pop();
console.log(array)*/

/*array.shift();
console.log(array)*/

/*array.unshift('novo item inicio');
console.log(array)*/

/*console.log(array.indexOf(true))*/

/*array.splice(0,3);
console.log(array)*/

/*array2.slice(1,2);
console.log(array2)*/

/*
//Objetos:

let object={string:'string', number:1, boolean:true, array:['array']};
console.log(object)

console.log(object.boolean)

//desestruturação do objeto:

var string=object.string;
console.log(string)


var{string, boolean}=object;
console.log(string,boolean);

*/

//Estruturas condicionais:


//Estrutura de decisão

/*var jogador1=1;
var jogador2=0;
var placar;

/*if(jogador1>0){
    console.log('Jogador 1 marcou ponto! ');
}else if(jogador2>0){
    console.log('Jogador 2 marcou ponto!')
}
else{
    console.log('Ninguém marcou ponto!')
}

//if ternário: [condição]?[instrução 1]:[instrução 2];

jogador1>0 ? console.log('J1 marcou ponto!'):console.log('J1 não marocu ponto!');*/

//Switch case:
/*
switch(placar){
    case placar=jogador1>jogador2:
    console.log('Jogador 1 ganhou!');
    break;
    case placar=jogador1<jogador2:
    console.log('Jogador 2 ganhou!');
    break;
   
    default:
    console.log('Ninguém ganhou!')
}
*/

//Estrutura de repetição:
/*
let array3=['valor1','valor2','valor3','valor4','valor5'];

let object={propriedade1:'valor1',propriedade2:'valor2',propriedade3:'valor3',}

//for executa uma instrução até que ela seja falsa:

for(let indice=0; indice<array3.length;indice++){
    console.log(indice);

}

//"FOR / IN"

for(var i in array3){
    console.log(i)

}

//com object:

for(i in object){
    console.log(i)
}

//'FOR /OF'

for(i of array3){
    console.log(i)

}

//com object não funciona o for of.Porém podemos utilizar a desestruturação:

for(i of object.propriedade1){
    console.log(i)
}*/

//While:

var a =0;

/*while(a<10){
    a++;
    console.log(a)
}*/

/*DO WHILE:

do{
    a++;
    console.log(a);
}while(a<10);*/

//Funções:
/*
function funcao(){
    console.log('tudo certo!!')
}

funcao();

//Funções com parâmetros:

function funcaoComParamentros(primeiro,segundo){
    console.log(primeiro,segundo);
}


funcaoComParamentros('tudo certo ', 'jovem!')*/

//Funções -Tipos:

//declarativas:

function funcao(){
    console.log('tudo certo!!')
}

funcao();

//expressoes de funções:

//com nomeação:


var variavelFuncao=function funcao2(){
    console.log('com nomeacao!')
}
//sem nomeação.
variavelFuncao();

var variavelFuncao=function(){
    console.log('sem nomeacao!')
}

variavelFuncao();

//Arrow function-funções com expressões de sintaxe curta e sempre serão anônimas.
//Portanto, não podem ser nomeadas.

var funcaoArrow=()=>{
    console.log('sou uma arrow funtion.')
}


funcaoArrow();






















/*const maca={
    value:2,
}

const laranja={
    value:3,
}*/


/*function mapComThis(arr,thisArg){
    return arr.map(function(item){
        return item*this.value;
    }, thisArg);
}


const nums=[1,2];

console.log('this->laranja',mapComThis(nums,laranja))*/

/*function mapSemThis(arr){
    return arr.map(function(item){
        return item*2
    });
}

const nums=[2,4,6,8,10];

console.log(mapSemThis(nums));
console.log(nums);*/

/*function retornePares(arr){
    return arr.filter(function(itens){
        if(itens%2===0){
            return itens;
        }
    });
    
}

const nums=[2,5,15,9,10];

console.log(retornePares(nums));*/


/*function somaNumeros(arr){
    return arr.reduce(function(prev,current){
        return prev+current;
    });
}

const arr=[1,2];
const arrReduce=somaNumeros(arr);
console.log(arrReduce);
console.log(arr)*/

const lista=[
    {
        name:'sabao',
        preco:30
    },
    {
        name:'cereal',
        preco:12
    },
    {
        name:'toalha',
        preco:30
    },
];

const saldoDisponivel=100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,index){
        console.log('rodada', index+1);
        console.log({prev});
        console.log({current});
        return prev-current.preco;
    }, saldoDisponivel)
};

console.log(calculaSaldo(saldoDisponivel,lista));
















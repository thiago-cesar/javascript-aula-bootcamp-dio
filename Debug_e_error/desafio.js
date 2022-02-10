function recebeArrayENumeber(arr,num){
    


    try{
        if(!arr && !num) throw new ReferenceError("Parâmetros não enviados.");
        if(typeof arr!=='object') throw new TypeError("Parâmetro não é do tipo object.");
        if(typeof num!=='number') throw new TypeError("Parâmetro não é do tipo number.");
        if(arr.lenght !== num) throw new RangeError("Tamanho do array não é igual ao tamanho do parâmetro num");
        return arr;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log('Tipo de erro ReferenceError.') ;
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log('Tipo de erro TypeError.');
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log('Tipo de erro RangeError.');
            console.log(e.message);
        }else{
            console.log('Tipo de erro não esperado: '+e);
        }

    }
    

    
}
console.log(recebeArrayENumeber([],'a'));
;
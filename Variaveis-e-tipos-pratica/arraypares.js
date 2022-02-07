function substituiPares(array){

    if(!array.length || !array) return -1;
    
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            console.log('Zero é zero!');
        }else if(array[i]%2===0){
            console.log(`Substituíndo ${array[i]} por 0...`)
            array[i]=0;
        }
    }

    return array;
}
let array=[];
console.log(substituiPares(array));
    

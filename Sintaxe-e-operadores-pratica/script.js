function desafioOperadores(){
    const param1=Number(prompt("Digite o primeiro número: "));
    const param2=Number(prompt("Digite o segundo número: "));
    let resultado;
    let frase1;
    let frase2;
    let resultadoSoma;

    if(param1===param2){
        frase1= String(`Os números ${param1} e ${param2} são iguais.`);
        
    }else{
        frase1= String(`Os números ${param1} e ${param2} são diferentes.`);
        
    }
    11
    soma(param1,param2);
    

    if(resultado>10 && resultado<20){
        frase2=`Soma igual a ${resultado} portanto, maior que 10 e menor que 20.`;
    }else if (resultado>20){
        frase2=`Soma igual a ${resultado} portanto, maior que 20.`;
    }else if(resultado<10){
        frase2=`Soma igual a ${resultado} portanto, menor que 10.`;
    }else if(resultado==20){
        frase2=`Soma igual a ${resultado} portanto, igual 20.`;

    }else{
        frase2=`Soma igual a ${resultado} portanto, igual a 10.`;
    }

    function soma(param1,param2){
        resultado=param1+param2;
        
        return resultado; 

    }

    const resultadoPrompt=frase1+frase2;
    alert(resultadoPrompt);

}

desafioOperadores();
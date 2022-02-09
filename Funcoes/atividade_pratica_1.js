const alunos=[
    {
        nome:'Thiago',
        nota:10,
        turma:'1B'
    },
    {
        nome:"Joao",
        nota:8,
        turma:'2C'},
    
    {
        nome:"Pedro",
        nota:5,
        turma: '1C'
    },

];

function alunosAprovados(arr, media){

    let aprovados=[];
    for(let i=0;i<arr.length;i++){

        const {nota,nome} =arr[i];
        if(nota>=media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,7));
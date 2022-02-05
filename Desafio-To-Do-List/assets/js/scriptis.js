var ul=document.getElementById("myList");
var li;
var itemId;
var item;

function adicionarTarefas(){
    let item;
    if(document.getElementById("task").value!="") {

        item=document.getElementById("task");

        itemId=ul.childElementCount;

        li= criarTarefa(item.value, itemId);

        li.appendChild(criarTarefaBtn(itemId));
        ul.appendChild(li);
    }

}

removerTarefas=function(itemId){
    for(i=0; i< ul.children.length ; i++){
        if(ul.children[i].getAttribute("index")==itemId){
            ul.children[i].remove();
        }
    }
}

function criarTarefa(itemValue,itemId){

    let li=document.createElement("li");

    li.setAttribute('index',itemId);

    li.appendChild(document.createTextNode(itemValue));

    return li;
}

function criarTarefaBtn(itemId){
    let btn=document.createElement("button");
    btn.setAttribute("onclick","removerTarefas("+itemId+")");
    btn.innerHTML="X"
    return btn;
}







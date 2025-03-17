//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração da variavel para guardar a lista de amigos 

let amigos = [];

// Função para adicionar o amigo na lista

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    // Se usuario não digitar e clicar no botao Adicionar 
    // O sistema mostrará uma mensagem solicitando para digitar um amigo
    if(!nomeAmigo){
         alert("Digite o nome do amigo");
         return;
    }

    // Verifica se o nome contém apenas letras e espaços
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
    if (!regex.test(nomeAmigo)) {
        alert("O nome do amigo deve conter apenas letras e espaços.");
        return;
    }


    //Adicionando o amigo digitado na lista amigos[]
    amigos.push(nomeAmigo);
    // console.log(amigos);
    inputAmigo.value = "";
    
    // Verificar isso aqui
    inputAmigo.focus();
    atualizarLista();
}


function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    let limparResultado = document.getElementById("resultado");
    limparResultado.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
        
    }

}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Nenhum amigo adicionado");
        return;
    }
    
    // Sorteia um amigo aleatoriamente
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    //let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Exibe o amigo sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

    
}



function limparLista(){
    if(amigos.length === 0){
        alert("Nenhuma lista de amigos foi adicionado");
        return;
    } 
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    let limparResultado = document.getElementById("resultado");
    limparResultado.innerHTML = "";
    
    amigos = [];


}
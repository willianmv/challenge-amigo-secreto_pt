let listaAmigos = [];

function adicionarAmigo(){
    let input = document.getElementById("amigo").value;
    
    if(input=='' || input.length<3){
        exibirMensagem('Por favor, insira um nome válido. (Mínimo de 3 caracteres)');
        limparInput();
        return;
    }

    listaAmigos.push(input);
    atualizaLista();
    limparInput();
    console.log(listaAmigos);
}

function atualizaLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        item.setAttribute('data-index', i);
        item.onclick = function(){selecionarAmigo(item)};
        lista.appendChild(item);
    }
}

function selecionarAmigo(item){
    item.classList.toggle('selecionado');
}

function removerSelecionados(){
    let itensSelecionados = document.querySelectorAll('li.selecionado');
    if(itensSelecionados.length===0){
        exibirMensagem('Nenhum nome selecionado para remover!');
        return;
    }

    listaAmigos = listaAmigos.filter((amigo, index) =>{
        let item = document.querySelector(`li[data-index="${index}"]`)
        return !item.classList.contains('selecionado');
    });

    atualizaLista();
    exibirMensagem('Nomes selecionados foram removidos');
}

function sortearAmigo(){
    if(listaAmigos.length===0){
        exibirMensagem('Adicione amigos à lista para realizar o sorteio!');
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    console.log(numeroAleatorio);

    let amigoSorteado = listaAmigos[numeroAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `A pessoa sorteada foi: ${amigoSorteado}`;

    listaAmigos.splice(numeroAleatorio, 1);
    atualizaLista();
}

function exibirMensagem(mensagem){
    let divMensagem = document.getElementById('msg');
    divMensagem.textContent = mensagem;
    divMensagem.style.display = 'block';

    setTimeout(() => {
        divMensagem.style.display = 'none';
    }, 3000);
}

function limparInput(){
    let input = document.getElementById("amigo");
    input.value = '';
}



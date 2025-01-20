//Cria array que armazena o nome dos amigos
let listaAmigos = [];

//Adiciona nomes a lista se forem maiores que 2 caracteres
function adicionarAmigo(){
    let input = document.getElementById("amigo").value;
    
    if(input=='' || input.length<2){
        exibirMensagem('Por favor, insira um nome válido. (Mínimo de 2 caracteres)');
        limparInput();
        return;
    }

    listaAmigos.push(input);
    atualizaLista();
    limparInput();
    console.log(listaAmigos);
}

//Pega o elemento html da lista e atualiza com base no array
function atualizaLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++){
        //Cria uma li dentro do elemento ul
        let item = document.createElement("li");
        //Adiciona um nome da arrray dentro de uma li, usamos o loop para percorrer o array de nomes e criar uma li para cada um
        item.textContent = listaAmigos[i];
        //Define o atributo data-index para os elementos li, para que seja possivel seleciona-los no html
        item.setAttribute('data-index', i);
        //Ao clicar num nome, chama a função que deixa o item marcado como selecionado
        item.onclick = function(){selecionarAmigo(item)};
        lista.appendChild(item);
    }
}

//Marca item da lista como selecionado
function selecionarAmigo(item){
    item.classList.toggle('selecionado');
}

//Filtra os nomes da lista, retornando os que nao estao selecionados, consequentemente, removendo os selecionados
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

//Pega um nome da lista e sorteia
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

//Cria um campo na tela para alertar o usuário, assim foi possivel remover os alerts
function exibirMensagem(mensagem){
    let divMensagem = document.getElementById('msg');
    divMensagem.textContent = mensagem;
    divMensagem.style.display = 'block';

    setTimeout(() => {
        divMensagem.style.display = 'none';
    }, 3000);
}

//Limpa o campo
function limparInput(){
    let input = document.getElementById("amigo");
    input.value = '';
}



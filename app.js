//Cria array que armazena o nome dos amigos
let listaAmigos = [];
const inputNome = document.getElementById('amigo');
const listaHTML = document.getElementById('listaAmigos');
const buttonAdd = document.querySelector(".button-add");

//Adiciona nomes a lista se forem maiores que 2 caracteres
function adicionarAmigo(){
    let input = inputNome.value;
    
    if(input=='' || input.length<2){
        exibirMensagem('Por favor, insira um nome válido. (Mínimo de 2 caracteres)');
        limparInput();
        return;
    }
    
    listaAmigos.push(input);
    atualizaLista();
    limparInput();
    console.log(listaAmigos);

    buttonAdd.style.backgroundColor = '#C4C4C4';
    buttonAdd.style.color = '#444'; 
}

//Pega o elemento html da lista e atualiza com base no array
function atualizaLista(){
    listaHTML.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++){
        //Cria uma li dentro do elemento ul
        let item = document.createElement("li");
        //Adiciona um nome da arrray dentro de uma li, usamos o loop para percorrer o array de nomes e criar uma li para cada um
        item.textContent = listaAmigos[i];
        //Define o atributo data-index para os elementos li, para que seja possivel seleciona-los no html
        item.setAttribute('data-index', i);
        //Ao clicar num nome, chama a função que deixa o item marcado como selecionado
        item.onclick = function(){selecionarAmigo(item)};
        listaHTML.appendChild(item);
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
        exibirMensagem('Nada para remover!');
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

    setTimeout(() => {
        resultado.innerHTML = '';
    }, 5000);

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

//Caso queria sortear apenas um nome, assim que ele for sorteado, pode resetar a lista e recomecar
function resetarLista(){
    // Marca todos os itens da lista como selecionados
    let itens = document.querySelectorAll("#listaAmigos li");
    itens.forEach(item => {
        item.classList.add("selecionado"); 
    });

    removerSelecionados();
}

//Altera o botao para validar o input assim que os dados sao inseridos
function verificarInput() {
    let botao = buttonAdd;

    if (inputNome.value.length >= 2 && inputNome.value !== '') {
        
        buttonAdd.style.backgroundColor = 'green';
        buttonAdd.style.color = 'white';
    } else {
        buttonAdd.style.backgroundColor = '#C4C4C4'; 
        buttonAdd.style.color = '#444';
    }
}

//Limpa o campo
function limparInput(){
    let input = document.getElementById("amigo");
    input.value = '';
}



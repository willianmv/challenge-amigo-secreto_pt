let listaAmigos = [];

function adicionarAmigo(){
    let input = document.getElementById("amigo").value;
    
    if(input=='' || input.length<3){
        alert('Por favor, insira um nome válido. (Mínimo de 3 caracteres)');
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
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(listaAmigos.length===0){
        alert('Adicione amigos à lista para realizar o sorteio!');
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

function limparInput(){
    let input = document.getElementById("amigo");
    input.value = '';
}



# Alura - One Challenge: Amigo Secreto

Este é um projeto simples que permite criar uma lista de amigos, realizar sorteios e exibir o resultado do sorteio. A aplicação garante que apenas nomes válidos (com mais de 3 caracteres) sejam adicionados à lista. Após o sorteio, o nome da pessoa sorteada é removido da lista e o sorteio pode ser feito novamente.
Foi disponibilizado os arquivos HTML e CSS para que fossse possível implementar apenas a lógica e a interação do usuário com os elementos na tela.

## Funcionalidades

- **Adicionar amigos**: O usuário pode inserir nomes de amigos na lista. A validação garante que apenas nomes com 3 ou mais caracteres sejam aceitos.
- **Sorteio de amigo**: Após adicionar amigos à lista, o usuário pode realizar um sorteio aleatório de um amigo e exibir o nome sorteado.
- **Atualização da lista**: Cada vez que um nome é sorteado, ele é removido da lista e a lista de amigos é atualizada automaticamente.

## Instalação

Este é um projeto baseado em HTML, CSS e JavaScript. Não é necessário instalar nenhum servidor ou dependência adicional. Para rodar a aplicação, basta seguir os seguintes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/sorteio-amigo-secreto.git
   ```

## Uso

1. Abra a página no seu navegador.
2. Insira o nome de um amigo no campo de texto e clique no botão "Adicionar Amigo".
3. Repita o processo para adicionar mais amigos à lista.
4. Clique em "Sortear Amigo" para realizar o sorteio. O nome sorteado será exibido na tela.
5. Após cada sorteio, o nome sorteado é removido da lista.

## Tecnologias Usadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo visual (se aplicável).
- **JavaScript**: Para a lógica de adicionar amigos, realizar sorteios e manipular a interface.

## Como Funciona

- **Adicionar amigo**: O usuário digita o nome de um amigo no campo de input. Se o nome tiver menos de 3 caracteres ou estiver vazio, uma mensagem de erro é exibida.
- **Sorteio**: O sorteio é feito através de um número aleatório gerado pelo `Math.random()`. O nome sorteado é mostrado na tela e removido da lista de amigos.

### Funções principais:

- `adicionarAmigo()`: Adiciona um amigo à lista após validação do nome.
- `atualizaLista()`: Atualiza a visualização da lista de amigos.
- `sortearAmigo()`: Realiza o sorteio e exibe o resultado.
- `limparInput()`: Limpa o campo de input após adicionar um nome.

## Exemplos

1. **Adicionar um amigo**: Digite o nome "Carlos" no campo de entrada e clique em "Adicionar Amigo". O nome será adicionado à lista.
2. **Realizar o sorteio**: Após adicionar alguns amigos, clique em "Sortear Amigo". O nome sorteado será exibido na tela.

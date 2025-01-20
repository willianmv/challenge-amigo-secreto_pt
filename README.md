# Alura - One Challenge: Amigo Secreto

Este é um projeto simples que permite inserir nomes em uma lista de amigos, realizar sorteios e exibir o resultado do sorteio. A aplicação garante que apenas nomes válidos (com mais de 2 caracteres) sejam adicionados à lista. Após o sorteio, o nome da pessoa sorteada é removido da lista e o sorteio pode ser feito novamente com o restante dos nomes, ou limpar a lista e recomeçar.

## Funcionalidades

- **Adicionar amigos**: O usuário pode inserir nomes de amigos na lista. A validação garante que apenas nomes com 2 ou mais caracteres sejam aceitos. O botão de "Adicionar Amigo" só fica habilitado quando um nome válido é inserido.
- **Sorteio de amigo**: Após adicionar amigos à lista, o usuário pode realizar um sorteio aleatório de um amigo e exibir o nome sorteado na tela.
- **Remover amigos selecionados**: O usuário pode selecionar um ou mais amigos na lista e removê-los.
- **Limpeza de lista após sorteio**: Após realizar o sorteio, o nome sorteado é removido automaticamente da lista e a lista é atualizada.
- **Feedback ao usuário**: Mensagens de alerta são exibidas para informar o usuário sobre erros ou ações bem-sucedidas, como quando não há amigos para remover ou realizar o sorteio.

## Instalação

Este é um projeto construído em HTML, CSS e JavaScript. Não é necessário instalar nenhum servidor ou dependência adicional. Para rodar a aplicação, basta clonar o repositório em sua máquina e abrir o arquivo HTML no seu navegador.

## Uso

1. Abra a página no seu navegador.
2. Insira o nome de um amigo no campo de texto e clique no botão "Adicionar Amigo". O nome será adicionado à lista, desde que tenha pelo menos 2 caracteres.
3. Repita o processo para adicionar mais amigos à lista.
4. Clique em "Sortear Amigo" para realizar o sorteio. O nome sorteado será exibido na tela por 5 segundos e removido da lista.
5. Para remover amigos da lista, selecione os nomes desejados e clique em "Remover Selecionados".
6. Caso deseje reiniciar a lista após o sorteio, clique em "Resetar Lista" para remover todos os amigos da lista.

## Tecnologias Usadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo visual (se aplicável).
- **JavaScript**: Para a lógica de adicionar amigos, realizar sorteios, manipular a interface e realizar validações.

## Como Funciona

- **Adicionar amigo**: O usuário digita o nome de um amigo no campo de input. Se o nome tiver menos de 2 caracteres ou estiver vazio, uma mensagem de erro será exibida. O botão "Adicionar Amigo" é habilitado somente quando um nome válido é inserido.
- **Sorteio**: O sorteio é feito através de um número aleatório gerado pelo `Math.random()`. O nome sorteado é mostrado na tela e removido da lista de amigos.
- **Remover amigos selecionados**: O usuário pode selecionar um ou mais amigos clicando em seus nomes na lista. Eles são marcados e podem ser removidos ao clicar no botão "Remover Selecionados".

### Funções principais:

- `adicionarAmigo()`: Adiciona um amigo à lista após validação do nome.
- `atualizaLista()`: Atualiza a visualização da lista de amigos.
- `sortearAmigo()`: Realiza o sorteio e exibe o resultado.
- `removerSelecionados()`: Remove os amigos selecionados da lista.
- `resetarLista()`: Remove todos os amigos da lista após o sorteio.
- `verificarInput()`: Valida o nome inserido e ativa o botão de adicionar apenas se o nome for válido.
- `limparInput()`: Limpa o campo de input após adicionar um nome.

## Exemplos

1. **Adicionar um amigo**: Digite o nome "Pedro" no campo de entrada e clique em "Adicionar Amigo". O nome será adicionado à lista se tiver 2 ou mais caracteres.

![Imagem adicionando nome](https://github.com/willianmv/challenge-amigo-secreto_pt/blob/779f21f646ea0a4c2cf7a0939abbc3c45380c8df/adicionarNome.png)


2. **Realizar o sorteio**: Após adicionar alguns amigos, clique em "Sortear Amigo". O nome sorteado será exibido na tela por 5 segundos e removido da lista.
3. **Remover amigos selecionados**: Clique em um ou mais nomes na lista para selecioná-los. Depois, clique em "Remover Selecionados" para excluí-los.
4. **Resetar lista**: Após o sorteio, clique em "Resetar Lista" para remover todos os amigos da lista e recomeçar o processo.

## Mensagens de Erro

- **Nome inválido**: Se o nome inserido no campo de input for menor que 2 caracteres ou estiver vazio, uma mensagem será exibida pedindo ao usuário que insira um nome válido.
- **Nada para remover**: Caso o usuário tente remover amigos quando nenhum estiver selecionado, uma mensagem será exibida indicando que não há itens para remover.
- **Lista vazia para sorteio**: Se o usuário tentar realizar o sorteio sem ter amigos na lista, será exibida uma mensagem informando que é necessário adicionar amigos antes de realizar o sorteio.

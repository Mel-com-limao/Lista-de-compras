// Exporta a constante 'inputItem' para que ela possa ser usada em outros arquivos JavaScript.

import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

import verificarListaVazia from "./verificarListaVazia.js";

// Essa constante está ligada ao elemento HTML com o id "input-item" (geralmente um campo <input>)
const listaDeCompras = document.getElementById("lista-de-compras");
export const inputItem = document.getElementById("input-item");

let contador = 0;

// Exporta a função 'criarItemDaLista', que será usada para criar um novo item na lista de compras.
export function criarItemDaLista() {
    
    // Verifica se o campo de entrada está vazio (ou seja, se o usuário não digitou nada).
    // Se estiver vazio, mostra um alerta na tela pedindo para inserir um item
    // e finaliza a função com 'return', impedindo a continuação do código.
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Cria um elemento HTML <li> (list item), que representará um item da lista.
    const itemDaLista = document.createElement("li");

    // Cria uma <div> que servirá como um container para o conteúdo do item.
    const containerItemDaLista = document.createElement("div");

    // Adiciona uma classe CSS à <div> para que ela possa ser estilizada com CSS.
    containerItemDaLista.classList.add("lista-item-container");

    // Cria um parágrafo <p> para mostrar o nome do item digitado.
    const nomeItem = document.createElement("p");

    // Cria um checkbox para o item da lista
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox"; // Define o tipo do input como checkbox
    inputCheckBox.id = "checkbox" + contador++; // Define um id unico para o checkbox
    containerItemDaLista.appendChild(inputCheckBox); // Adiciona o checkbox a um container do item da lista

    // Adiciona um evento para riscar ou remover o risco do texto ao marcar/desmarcar um item
    inputCheckBox.addEventListener("click", function(){
        if (inputCheckBox.checked){
        nomeItem.style.textDecoration = "line-through"; // Risca o texto
        } else {
            nomeItem.style.textDecoration = "none"; // Remove risco do texto
        }
    });

    // Define o texto do parágrafo como o valor que o usuário digitou no input.
    nomeItem.innerText = inputItem.value;

    // Inicializa o botao
    const botao = document.createElement ("button");

    // Adiciona um classe ao botao
    botao.classList.add = ("botao-excluir");

    // Cria um elemento "icone"
    const iconeExcluir = document.createElement("i");
    iconeExcluir.className = "bi bi-trash";

     // Botão para editar item da lista
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    const iconeEditar = document.createElement("i");
    iconeEditar.className = "bi bi-pen";
    botaoEditar.style.cursor = "pointer";
    botaoEditar.appendChild(iconeEditar);
    containerItemDaLista.appendChild(botaoEditar);

    // Evento para edição do item
    botaoEditar.addEventListener("click" , function (){
        const novoTexto = prompt("Edite o item: ", nomeItem.innerText);
        if (novoTexto && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto.trim();
        }
    });

    // Adiciona uma "mãozinha" com a sobreposição do mouse
    botao.style.cursor = "pointer";

    // Adiciona o botão e o icone excluir dentro do container da lista
    containerItemDaLista.appendChild(botao);

    // Adiciona o ícone excluir dentro botão
    botao.appendChild(iconeExcluir);

    botao.addEventListener("click", function (){
        const confirmacao = confirm("Deseja realmente deletar esse item?");

        if (confirmacao){
            itemDaLista.remove();
            alert("Item deletado");
            verificarListaVazia(listaDeCompras);
        }
    });

    // Adiciona o <p> com o nome do item dentro da <div> (o container).
    containerItemDaLista.appendChild(nomeItem);

    // Adiciona a <div> dentro do <li>, formando a estrutura final do item.
    itemDaLista.appendChild(containerItemDaLista);

    // Gerar dia da semana e horario
    const dataCompleta = gerarDiaDaSemana();

    // <p>
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    // Retorna o <li> completo, que já contém o item digitado, pronto para ser adicionado na lista.
    return itemDaLista;

}

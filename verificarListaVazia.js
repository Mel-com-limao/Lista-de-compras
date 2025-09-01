const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras){
    // Seleciona todos os elementos <li> da lista de compras e retorna um array 
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    // Se não houver nenhum <li> na lista (lista vazia)
    if (itensDaLista.lenght === 0){
        //exibe a mensagem de lista vazia
        mensagemListaVazia.style.display = "block";
    }else {
        //"none" esconde a mensagem
        mensagemListaVazia.style.display = "none";
    }
}

// Exporta a função para ser usada em outro arquivo js
export default verificarListaVazia;

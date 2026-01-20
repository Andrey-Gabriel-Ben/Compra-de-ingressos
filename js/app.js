
function comprar () {
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeGetId = document.getElementById("qtd");
    let quantidade = quantidadeGetId.value;
    let qtdDisponivelGetId = document.getElementById(`qtd-${tipoDoIngresso}`);
    let qtdDisponivelNum = parseInt(qtdDisponivelGetId.textContent)

    if (quantidade > qtdDisponivelNum) {
        alert("Infelizmente, não teremos ingressos suficientes para essa categoria. Por favor, verifique a disponibilidade dos ingressos por categoria na parte inferior do site.");
        return
    };

    if (quantidade == "" || quantidade == 0) {
        alert("Você não adicionou nenhuma quantidade válida para compra. Por favor, revise o campo de quantidade e tente novamente.");
        return
    }

    let novaQuantidade = qtdDisponivelNum - quantidade;

    qtdDisponivelGetId.innerHTML = novaQuantidade;
    
    quantidadeGetId.value = "";

}

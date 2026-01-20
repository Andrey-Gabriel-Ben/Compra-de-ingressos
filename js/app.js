
function comprar () {
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    let qtdDisponivelGetId = document.getElementById(`qtd-${tipoDoIngresso}`);
    let qtdDisponivelNum = parseInt(qtdDisponivelGetId.textContent)

    if (quantidade > qtdDisponivelNum) {
        alert("Infelizmente, não teremos ingressos suficientes para essa categoria. Por favor, verifique a disponibilidade dos ingressos por categoria na parte inferior do site.");
        return
    };

    let novaQuantidade = qtdDisponivelNum - quantidade;

    qtdDisponivelGetId.innerHTML = novaQuantidade;

    quantidade = "";

}



/*
Oq fazer:



criar um alert que indique quando a quantidade que deseja ser comprada for superior a disponivel

criar um alert que avise quando os ingressos estiverem esgotados

*/
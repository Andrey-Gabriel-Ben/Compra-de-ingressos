
function comprar () {
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    let qtdDisponivel = document.getElementById(`qtd-${tipoDoIngresso}`);

    if (quantidade > qtdDisponivel) {
        alert("Infelizmente, não teremos ingressos suficientes para essa categoria. Por favor, verifique a disponibilidade dos ingressos por categoria na parte inferior do site.");
        return;
    };

    let novaQuantidade = parseInt(qtdDisponivel.textContent) - quantidade;

    qtdDisponivel.innerHTML = novaQuantidade;

}



/*
Oq fazer:



criar um alert que indique quando a quantidade que deseja ser comprada for superior a disponivel

criar um alert que avise quando os ingressos estiverem esgotados

*/
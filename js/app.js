
function comprar () {
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    let qtdDisponivel = document.getElementById(`qtd-${tipoDoIngresso}`);

    let novaQuantidade = parseInt(qtdDisponivel.textContent) - quantidade;

    qtdDisponivel.innerHTML = novaQuantidade;














}



/*
Oq fazer:

diminuir a quantidade comprada da categoria selecionada

criar um alert que indique quando a quantidade que deseja ser comprada for superior a disponivel

criar um alert que avise quando os ingressos estiverem esgotados

*/
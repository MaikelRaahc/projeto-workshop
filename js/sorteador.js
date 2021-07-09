const submeterForm = () => {
    const rangeInicial = document.getElementById("rangeinicial").value;
    const rangeFinal = document.getElementById("rangefinal").value;
    const minhaAposta = document.getElementById("minhaaposta").value;

    realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}

const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta) => {

    if (!rangeInicial) {
        alert('Informe o range inicial');
        return;
    }

    if (!rangeFinal) {
        alert('Informe o range final');
        return;
    }
    if (!minhaAposta) {
        alert('Informe sua aposta');
        return;
    }

       
    const numeroSorteado = novoSorteio(rangeInicial, rangeFinal);

    if (numeroSorteado === minhaAposta){
        alert('Parabéns! Você acertou');
        return;
    }

    alert(`Errou! O número sorteado foi ${numeroSorteado}`);

}

const novoSorteio = (rangeInicial, rangeFinal) => {
    return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1)) + rangeInicial);
}
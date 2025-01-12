/**
 * 15 - Conversor de Moedas
Peça ao usuário para inserir um valor em reais e escolha uma moeda (dólar, euro, libra). 
Use `switch case` para converter o valor baseado nas taxas de câmbio.
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", converterMoeda);


function converterMoeda() {
    
    // Inicialização das variáveis
    let metical = document.querySelector("#moeda-metical").value.trim();
    let convertedCurrency = document.querySelector("input[type=radio]:checked");
    let viewResult = document.querySelector(".div-resultado");

    let usDollar = Number(metical )  / 63.58;
    let euro = Number(metical) / 65.14;
    let britishPound = Number(metical) / 77.62;

    viewResult.innerHTML = ``;

    // Validação do campo input
    if (metical.length === 0) {
        viewResult.innerHTML = `Digite o valor que deseja converter.`;
        viewResult.style.color = `#FF0000`;
        return;

    } else if (isNaN(Number(metical)) || Number(metical) < 0) {
        viewResult.innerHTML = `O valor deve ser um número real positivo.`
        viewResult.style.color = `#FF0000`;
        return;

    } else if (convertedCurrency === null) {
        viewResult.innerHTML = `Escolhe a moeda na qual deseja converter o valor.`;
        viewResult.style.color = `#FF0000`;
        return;
    }


    // Conversão do valor
    switch (convertedCurrency.value) {
        case "Dólar":
            viewResult.innerHTML = `USD ${usDollar.toFixed(2)}`;
            viewResult.style.color = `#000000`;
            break;

        case "Euro":
            viewResult.innerHTML = `EUR ${euro.toFixed(2)}`;
            viewResult.style.color = `#000000`;
            break;

        case "Libra":
            viewResult.innerHTML += `GBP ${britishPound.toFixed(2)}`;
            viewResult.style.color = `#000000`;
            break;
    }
}
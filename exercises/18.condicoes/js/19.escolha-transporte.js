/**
 * 19 - Escolha de Transporte
Peça ao usuário para informar a distância que precisa percorrer. 
Use `if`, `else if` e `else` para sugerir o meio de transporte ideal (a pé, bicicleta, carro).
 */


// Criação do escutador
document.querySelector(".input-button").addEventListener("click", sugerirTransporte);

function sugerirTransporte() {
   
    // Atribuição das variáveis
    let distance = document.querySelector("#input-distancia").value.trim();
    let viewResult =document.querySelector(".div-resultado");

    // Conversão da variável distance de String para Number
    const convertedDistance = Number(distance);

    // Limpar os campos ao clicar no botão
    viewResult.innerHTML = ``;

    // Validação do campo distância
    if (distance.length === 0) {
        viewResult.innerHTML = `Erro - campo vazio, indique o valor da distância.`;
        viewResult.style.color = `#FF0000`;
        return;

    } else if (isNaN(convertedDistance) || convertedDistance < 0) {
        viewResult.innerHTML = `São aceites apenas números reais positivos.`;
        viewResult.style.color = `#FF0000`;
        return;
    }

    // Validar o tipo de transporte
    if (convertedDistance <= 5) {
        viewResult.innerHTML = `Em uma distância de <strong>${convertedDistance}km</strong>, 
        é sempre recomendado andar à <strong>pé</strong>, porque caminhar faz bem para a saúde.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;

    } else if (convertedDistance <= 10) {
        viewResult.innerHTML = `Em uma distância de <strong>${convertedDistance}km</strong>, 
        é sempre recomendado andar de <strong>bicicleta</strong>, porque pedalar faz bem para 
        a saúde e menos cansativo que andar a pé.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;

    } else {
        viewResult.innerHTML = `Em uma distância de <strong>${convertedDistance}km</strong>, 
        é sempre recomendado andar de <strong>carro</strong>, porque é menos cansativo e é 
        mais rápido que andar de bicicleta ou à pé.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;
    }
}
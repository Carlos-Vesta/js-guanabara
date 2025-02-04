/**
 * 16 - Tabuada (for)
Crie um programa que exiba a tabuada (de 1 a 12) de um número fornecido pelo usuário usando um loop `for`.
 */

// Cirar o escutador
document.querySelector(".input-button").addEventListener("click", tabuada);


function tabuada() {

    // Inicialização das variáveis
    let userNum = document.querySelector("#input-numero").value.trim();
    let userNumConverted = Number(userNum);

    let numStart = 1; // valor inicial da contagem
    let numEnd = 12; // valor final da contagem
    let multipleNum = 0; // Vai armazenar o valor da multiplicação

    let viewResult = document.querySelector(".div-resultado");


    viewResult.innerHTML = ``; // Vai limpar o campo do input

    // Validação do fomulário
    if (userNum.length === 0) {
        viewResult.innerHTML = `Erro - campo não deve estar vazio`;
        viewResult.style.color = `#FF0000`;
        return;

    } else if (isNaN(userNumConverted) || userNumConverted <= 0) {
        viewResult.innerHTML = `Erro - use apenas números inteiros positivos`;
        viewResult.style.color = `#FF0000`;
        return;
    }


    // Inicialização da tabuada
    for (let i = numStart; i <= numEnd; i++) {
        multipleNum = userNumConverted * i;

        viewResult.innerHTML += `${userNumConverted} x ${i} = ${multipleNum} <br>`;
    }

    viewResult.style.textAlign = `justify`;
    viewResult.style.color = `#000000`;

}
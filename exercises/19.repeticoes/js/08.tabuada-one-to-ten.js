/**
 * 8 - Multiplicação de 1 a 10 (do while)
Crie um programa que use um loop `do while` para exibir a tabela de multiplicação 
de um número fornecido pelo usuário.
 */

// Cirar o escutador
document.querySelector(".input-button").addEventListener("click", tabuada);


function tabuada() {

    // Inicialização das variáveis
    let userNum = document.querySelector("#input-numero").value.trim();
    let userNumConverted = Number(userNum);

    let numStart = 1; // valor inicial da contagem
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
    while (numStart <= 10) {
        multipleNum = userNumConverted * numStart; // Faz a multiplicação e armazena o valor
        viewResult.innerHTML += `${userNumConverted} x ${numStart} = ${multipleNum} <br><br>`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        numStart++; // Incrementa o valor inicial
    }
}
/**
 * 1 - Contagem de 1 a 10 (while)
Crie um programa que conte de 1 a 10 usando um loop `while`. 
Exiba os números no console.
 */

window.addEventListener("load", function() {


    // Inicialização das variáveis
    let viewResult = document.querySelector(".div-resultado");
    let num = 1;

    while (num < 11) {

        viewResult.style.textAlign = `justify`;
        viewResult.innerHTML += `${num},    `;
        num++;
    }
})



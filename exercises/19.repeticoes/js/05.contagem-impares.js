/**
 * 5 - Contagem de Ímpares (while)
Escreva um programa que conte e exiba todos os números ímpares entre 1 e 20 usando um loop `while`.
 */

// Inicialização do escutador
window.addEventListener("load", () => {

    // Inicialização das variáveis
    let num = 1;
    let viewResult = document.querySelector(".div-resultado");

    while (num <= 20) {

        if (num % 2 !== 0) {
            viewResult.innerHTML += `${num}, `;
        }

        num++;
    }
});

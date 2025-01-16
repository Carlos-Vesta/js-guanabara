/**
 * 4 - Contagem de Pares (while)
Crie um programa que conte e exiba todos os números pares entre 1 e 20 
usando um loop `while`.
 */

// Criar o escutador que será chamado ao carregar a página
window.addEventListener("load", () => {
   
    // Inicialização das variáveis
    let number = 1;
    let parNumbers = 0;
    let viewResult = document.querySelector(".div-resultado");

    // Inicialização do loop
    while (number <= 20) {
        if (number % 2 === 0) {
            viewResult.style.textAlign = `justify`;
            viewResult.innerHTML += `${number},  `;
        }
        number++;
    }
})
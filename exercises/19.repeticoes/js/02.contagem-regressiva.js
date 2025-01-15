/**
 * 2 - Contagem Regressiva (while)
Escreva um programa que faça uma contagem regressiva de 10 a 1 usando um loop 
`while`. Exiba os números no console.
 */


window.addEventListener("load", () => {
   
    // Inicialização das variáveis
    let num = 10;
    let viewResult = document.querySelector(".div-resultado");

    while (num >= 1 && num <= 10) {
        viewResult.style.textAlign = `justify`;
        viewResult.innerHTML += `${num}, `;
        num--;
    }
})
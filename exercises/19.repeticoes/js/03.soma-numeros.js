/**
 * 3 - Soma de Números (while)
Use um loop `while` para calcular a soma de números de 1 a 100. 
Exiba o resultado no console.
 */

window.addEventListener("load", () => {

    // Inicialização das variáveis
    let viewResult = document.querySelector(".div-resultado");
    let num = 1; // variável para contar de 1 a 100
    let soma = 0; // variável para armazenar a soma



    while (num <= 100) {
        viewResult.style.textAlign = `justify`;
        viewResult.innerHTML += `${num}, `; // Mostra o valor do número na tela
        soma += num; // Adiciona o número actual a soma
        num++; // Incrementa o número em 1
    }

    viewResult.innerHTML += `<br><br>
    A soma dos números é igual a <strong>${soma}</strong>`; // Exibe o resultado da soma dos números
})
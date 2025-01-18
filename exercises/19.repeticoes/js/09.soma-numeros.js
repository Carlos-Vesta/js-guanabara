/**
 * 9 - Soma de Números (do while)
 * Peça ao usuário para inserir números até que ele digite 0, e use um loop `do while` 
 * para calcular a soma desses números. Exiba a soma total.
 */

// Inicialização das variáveis
let soma = 0; // variável para armazenar a soma
let allNumbers = [];
let viewResult = document.querySelector(".div-resultado");

do {
    let userInput = prompt("Digite um número inteiro positivo (0 para sair)");

    // Verifica se o usuário cancelou o prompt
    if (userInput === null) {
        break; // Sai do loop se o prompt for cancelado
    }

    let userNum = parseInt(userInput.trim());

    // Verifica se a entrada é um número válido
    if (isNaN(userNum) || userNum < 0) {
        alert("Por favor, insira um número válido.");
        continue; // Volta ao início do loop sem adicionar à soma
    }

    // Adiciona o número à soma e ao array se não for 0
    if (userNum !== 0) {
        soma += userNum;
        allNumbers.push(userNum);
    }

    // Verifica se a entrada é o número zero
    if (userNum === 0) {
        break; // Sai do loop se o usuário digitar 0
    }

} while (true); // Loop infinito até que uma condição de saída seja atendida

viewResult.innerHTML += `Os números inseridos são: ${allNumbers} <br><br>`;  
viewResult.innerHTML += `A soma dos números é igual à <strong>${soma}</strong>`;

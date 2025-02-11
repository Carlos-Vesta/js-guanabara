/**
 * 19 - Série de Fibonacci (for)
Crie um programa que gere e exiba os primeiros `N` números da série de Fibonacci, 
onde `N` é fornecido pelo usuário, usando um loop `for`.
 */


// Criar o escutador de eventos
document.querySelector(".input-button").addEventListener("click", serieFibonacci);

function serieFibonacci() {
    // Inicialização das variáveis
    let userNumber = document.querySelector("#input-numero").value.trim();
    let userNumberConverted = Number(userNumber);
    let viewResult = document.querySelector(".div-resultado");
    let fibonacci = [0, 1];

    viewResult.innerHTML = ``;

    // Validação do formulário
    if (userNumber.length === 0) {
        viewResult.innerHTML = `Erro - o campo está vazio`;
        viewResult.style.color = `#FF0000`;
        return;
        
    } else if (isNaN(userNumber) || userNumberConverted < 0 || !Number.isInteger(userNumberConverted)) {
        viewResult.innerHTML = `Digite um número inteiro positivo`;
        viewResult.style.color = `#FF0000`;
        return;
    }

    // Casos especiais
    if (userNumberConverted === 0) {
        viewResult.innerHTML = `[0]`;
        return;
        
    } else if (userNumberConverted === 1) {
        viewResult.innerHTML = `[0, 1]`;
        return;
    }

    // Gerar a série de Fibonacci
    for (let i = 2; i < userNumberConverted; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    // Exibir o resultado
    viewResult.innerHTML = fibonacci.join(", ");
    viewResult.style.color = `#000000`;
}
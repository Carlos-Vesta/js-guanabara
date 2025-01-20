/**
 * 11 - Factorial de um Número (for)
Crie um programa que calcule o factorial de um número fornecido pelo usuário usando um loop `for`.
 */

// Criar o escutador
document.querySelector(".input-button").addEventListener("click", factorial);


function factorial() {

    // Inicialização das variáveis
    let userNumber = document.querySelector("#input-numero").value.trim();
    let userNumberInt = parseInt(userNumber);
    let saveFactorial = 1; // Armazena o valor do factorial
    let numberCount = 1; // Valor inicial das iterações
    let viewResult = document.querySelector(".div-resultado");



    viewResult.innerHTML = ``; // Limpa o campo do resultado


    // Validacação do fomulário
    if (userNumber.length === 0) {
        viewResult.style.color = `#FF0000`;
        viewResult.innerHTML = `Campo vazio, preencha correctamente`;
        return;

    } else if (isNaN(userNumberInt) || userNumberInt < 0) {
        viewResult.style.color = `#FF0000`;
        viewResult.innerHTML = `Use apenas números inteiros positivos: (número >= 0)`;
        return;
    }


    // Cálculo do factorial
    for ( ; numberCount <= userNumberInt; numberCount++) {
        
        saveFactorial *= numberCount;

        if (numberCount < userNumberInt) {
            viewResult.style.color = `#000000`;
            viewResult.innerHTML += `${numberCount} x    `;

        } else {
            viewResult.style.color = `#000000`;
            viewResult.innerHTML += `${numberCount}`;
        }
    }

    viewResult.innerHTML += `<br><br>`;
    viewResult.innerHTML += `O factorial de <strong>${userNumberInt}!</strong> = <strong>${saveFactorial}</strong>`;
}


/**
 * ======= CÓDIGO MELHORADO =======
 *
 * 11 - Factorial de um Número (for)
 * Crie um programa que calcule o factorial de um número fornecido pelo usuário usando um loop `for`.


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", factorial);

function factorial() {
    // Inicialização das variáveis
    let userNumber = document.querySelector("#input-numero").value.trim();
    let userNumberInt = parseInt(userNumber);
    let saveFactorial = 1; // Armazena o valor do factorial
    let viewResult = document.querySelector(".div-resultado");

    viewResult.innerHTML = ``; // Limpa o campo do resultado

    // Validação do formulário
    if (userNumber.length === 0) {
        viewResult.style.color = `#FF0000`;
        viewResult.innerHTML = `Campo vazio, preencha corretamente`;
        return;
    } else if (isNaN(userNumberInt) || userNumberInt < 0) {
        viewResult.style.color = `#FF0000`;
        viewResult.innerHTML = `Use apenas números inteiros não negativos: (número >= 0)`;
        return;
    }

    // Cálculo do fatorial
    let calculationSteps = [];
    for (let numberCount = 1; numberCount <= userNumberInt; numberCount++) {
        saveFactorial *= numberCount;
        calculationSteps.push(numberCount); // Armazena cada número multiplicado
    }

    // Exibe os passos do cálculo
    viewResult.style.color = `#000000`;
    viewResult.innerHTML += `${calculationSteps.join(' x ')} = ${saveFactorial}<br><br>`;
    viewResult.innerHTML += `O fatorial de <strong>${userNumberInt}!</strong> = <strong>${saveFactorial}</strong>`;
}

*/
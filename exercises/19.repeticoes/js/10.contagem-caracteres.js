/**
 * 10 - Contagem de Caracteres (for)
Escreva um programa que conte quantas letras existem em uma string 
fornecida pelo usuário usando um loop `for`.
 */

// Criar o escutador
document.querySelector(".input-button").addEventListener("click", contarCaracteres);


function contarCaracteres() {

    // Inicialização das variáveis
    let userCaracters = document.querySelector("#input-caracteres").value.trim();
    let countUserCaracters;
    let viewResult = document.querySelector(".div-resultado");
    
    viewResult.innerHTML = ``; // Limpa o campo do resultado

    // Validação do formulário
    if (userCaracters.length === 0 || userCaracters === null) {
        viewResult.innerHTML = `Erro - campo vazio`;
        viewResult.style.color = `#FF0000`;
        return;
    }

    // Contador de caracteres
    for (countUserCaracters = 0; countUserCaracters <= userCaracters.length; countUserCaracters++) {
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        viewResult.innerHTML = `O texto <strong>${userCaracters}</strong> tem <strong>${countUserCaracters}</strong> caracter(es).`;
    }
}
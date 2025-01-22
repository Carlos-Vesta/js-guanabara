/**
 * 14 - Inversão de uma String (for)
Escreva um programa que inverta uma string fornecida pelo usuário usando um loop `for`.
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", inverterString);

function inverterString() {

    // Inicialização das variáveis
    let userString = document.querySelector("#input-string").value.trim();
    let viewResult = document.querySelector(".div-resultado");
    let reversedString = ""; // Inicializa uma string vazia para armazenar o string invertida



    viewResult.innerHTML = ``; // Limpa o campo da mensagem


    // Validação do formulário
    if (userString.length === 0) {
        viewResult.innerHTML = `Campo vazio, digite um texto!`;
        viewResult.style.color = `#FF0000`;
    }


    // Inversão de String
    for(let i = userString.length - 1; i >= 0; i--) {

        reversedString += userString[i];
    }

    viewResult.style.color = `#000000`;
    viewResult.style.textAlign = `justify`;
    viewResult.innerHTML = `O texto do usuário é <strong>${userString}</strong>, e o texto
     invertido é  <strong>${reversedString}</strong>`;

}
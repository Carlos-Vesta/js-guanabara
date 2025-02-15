/**
 * 20 - Jogo de Adivinhação (for)
Implemente um simples jogo de adivinhação onde o usuário tem que adivinhar um número entre 1 e 10. 
Use um loop `for` para permitir até 3 tentativas. Exiba uma mensagem de vitória ou derrota.
 */

// Criar o escutasdor de eventos
document.querySelector(".input-button").addEventListener("click", advinhar);

// Função para advinhar o número
function advinhar() {
    
    let userNumber = document.querySelector("#input-numero").value.trim(); // Receber valor do usuário
    let userNumberConverted = parseInt(userNumber); // Converter o valor do usuário para número inteiro 
    let viewResult = document.querySelector(".div-resultado"); // Visualizar o resultado

    let minNumber = 1;
    let maxNumber = 10;
    let computerNUmber = parseInt(Math.random() * 10 + 1); // Gera números aleatórios de 1 à 10


    viewResult.innerHTML = ``; // Zerar o campo do número

    // Validação do formulário
    if (userNumber.length === 0) {
        viewResult.innerHTML = `Erro - campo vazio!`;
        viewResult.style.color = `#FF0000`;
        return;

    } else if (isNaN(userNumber)) {
        viewResult.innerHTML = `Digite um número inteiro positivo!`;
        viewResult.style.color = `#FF0000`;
        return;
    }


    // Verificando o número de tentativas
    for (let attempt = 1; attempt <= 3; attempt++) {
        if (userNumberConverted === computerNUmber && attempt <= 3) {
            viewResult.innerHTML = `Você Advinhou o número secreto! <br>
            Seu número: ${userNumberConverted} | Número secreto: ${computerNUmber}`;

        } else {
            viewResult.innerHTML = `Você errou o número secreto! <br>
            Seu número: ${userNumberConverted} | Número secreto: ${computerNUmber}`;
        }
    }

}
/**
 * 7 - Contagem de 1 a N (do while)
Peça ao usuário um número `N` e use um loop `do while` para contar de 1 até `N`, 
exibindo cada número no console.
 */


// Inicialização do escutador
document.querySelector(".input-button").addEventListener("click", () => {

    // Inicialização das variáveis
    let num = 1;
    let userNum = document.querySelector("#input-numero").value.trim();
    let userNumConverted = Number(userNum);

    let viewResult = document.querySelector(".div-resultado");
    viewResult.innerHTML = ``;  // Limpar o campo

    let sum = 0; // Valor da soma

    // Validação dos campos do formulário
    if (userNum.length === 0) {
        viewResult.innerHTML = `Campo vazio, digite um número válido.`
        viewResult.style.color = `#FF0000`;
        return;

    } else if (isNaN(userNumConverted) || userNumConverted <= 0) {
        viewResult.innerHTML = `Erro - digite apenas números interiros positivos.`
        viewResult.style.color = `#FF0000`;
        return;
    }


    // Contar Números
    while (num <= userNumConverted) {

        viewResult.style.textAlign = `justify`;
        viewResult.style.color = `#000000`;
        viewResult.innerHTML += `${num},    `;

        sum = sum + num; // Armazena o valor da soma
        num++; // Faz o incremento

    }

    viewResult.innerHTML += `<br><br>`; // Cria espaços em branco
    viewResult.innerHTML += `A soma de todos os números é igual a <strong>${sum}</strong>.`;
    
})






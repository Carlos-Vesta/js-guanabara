/**
 * 18 - Contagem de Palavras (for)
Peça ao usuário para inserir uma frase e conte quantas palavras existem na 
frase usando um loop `for`.
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", contarPalavras);


// Chamar a funcção
function contarPalavras() {
    
    // Inicialização das variáveis
    let userString = document.querySelector("#input-palavra").value;
    let viewResult = document.querySelector(".div-resultado");
    let saveStrings = [];

    viewResult.innerHTML = ``; // Limpa o campo do input

    // Validação do campo de input

    // Verifica se o campo está vazio
    if (userString.length === 0) { 
        viewResult.innerHTML = `Erro - O campo está vazio`;
        viewResult.style.color = `#FF0000`;
        return;

    // Verifica se é um Número
    } else if (!isNaN(userString)) {
        viewResult.innerHTML = `O campo de ser preenchido com texto`;
        viewResult.style.color = `#FF0000`;
        return;
    }


    // Contar palavras
    for (let i = 0; i <= userString.length; i++) {
        saveStrings = userString.split(" ");
    }

    // Imprime o número de palavras que o texto contém 
    viewResult.innerHTML = `O texto <strong>${userString}</strong>, tem <strong>${saveStrings.length}</strong> palavras.`;
    viewResult.style.color = `#000000`;
}
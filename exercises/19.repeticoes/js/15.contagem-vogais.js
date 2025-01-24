/**
 * 15 - Contagem de Vogais (for)
Desenvolva um programa que conte quantas vogais existem em uma string 
fornecida pelo usuário usando um loop `for`.
 */

// criação do escutador
document.querySelector(".input-button").addEventListener("click", contarVogais);

function contarVogais() {

    // Inicialização de variáveis
    let texto = document.querySelector("#input-string").value.trim();
    let viewResult = document.querySelector(".div-resultado");

    const contador = ["a", "e", "i", "o", "u"];
    let vogais = 0;


    // Limpa o campo do texto
    viewResult.innerHTML = ``;


    // Validação do formulário
    if (texto.length === 0) {
        viewResult.style.color = `#FF0000`;
        viewResult.innerHTML = `O campo não deve estar vazio`;
    }


    // Loop para encontrar as vogais
    for (let i = 0; i < texto.legth; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }

    }

    viewResult.innerHTML = `${contador}`;
}
/**
 * 15 - Contagem de Vogais (for)
Desenvolva um programa que conte quantas vogais existem em uma string 
fornecida pelo usuário usando um loop `for`.
 */

// criação do escutador
document.querySelector(".input-button").addEventListener("click", contarVogais);

function contarVogais() {

    // Inicialização de variáveis
    let vogais = document.querySelector("#input-string").value.trim();
    let viewResult = document.querySelector(".div-resultado");
    let vagalList = ["a", "e", "i", "o", "u"];
    let allVogais = "";


    // Limpa o campo do texto
    viewResult.innerHTML = ``;


    // Validação do formulário
    if (vogais.length === 0) {
        viewResult.style.color = `#FF0000`;
        viewResult.innerHTML = `O campo não deve estar vazio`;
    }


    // Loop para encontrar as vogais
    for (let i = vogais; i < vogais.legth; i--) {
        if (vogais.legth === vagalList.length) {
            allVogais += vogais[i]
            viewResult.innerHTML += `${allVogais}`;
        }

        // viewResult.innerHTML += `${allVogais}`;
    }
}
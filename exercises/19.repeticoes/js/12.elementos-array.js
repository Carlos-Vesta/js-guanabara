/**
 * 12 - Exibição de Elementos de um Array (for)
Utilize um loop `for` para exibir todos os elementos de um array definido previamente.
 */


// Criação do escutado
window.addEventListener("load", () => {

    // Inicialização das variáveis
    let list = ["Carlos", "negro", 36, "masculino", "Moçambique", "Vesta"]; // Armazena os elementos
    let viewResult = document.querySelector(".div-resultado"); // Visualiza o resultado na página
    let showArrayElements = 0; // armazena as posições dos elementos

    // Loop que exibe os elementos do array
    for (showArrayElements; showArrayElements < list.length; showArrayElements++) {
        viewResult.innerHTML += `A posição é <strong>${showArrayElements}</strong>, 
        e tem o valor <strong>${list[showArrayElements]}</strong>.<br><br> `;
    }

    viewResult.style.textAlign = `justify`; // Faz o alinhamento do texto
});




/**
 * 
 * =========== CÓDIGO MELHORADO ===========
 * 
 */

/**
 * 12 - Exibição de Elementos de um Array (for)
 * Utilize um loop `for` para exibir todos os elementos de um array definido previamente.
 

// Criação do escutador
window.addEventListener("load", () => {

    // Inicialização das variáveis
    let list = ["Carlos", "negro", 36, "masculino", "Moçambique", "Vesta"]; // Armazena os elementos
    let viewResult = document.querySelector(".div-resultado"); // Visualiza o resultado na página

    // Cria uma string para armazenar a saída
    let output = '';

    // Loop que exibe os elementos do array
    for (let i = 0; i < list.length; i++) {
        output += `A posição é <strong>${i}</strong>, e tem o valor <strong>${list[i]}</strong>.<br><br>`;
    }

    viewResult.innerHTML = output; // Atualiza o innerHTML uma vez
    viewResult.style.textAlign = 'justify'; // Faz o alinhamento do texto
});

*/

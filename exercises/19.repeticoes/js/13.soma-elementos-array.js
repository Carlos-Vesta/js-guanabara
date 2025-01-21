/**
 * 13 - Soma de Elementos de um Array (for)
Crie um programa que some todos os números de um array usando um loop `for` e exiba o resultado.
 */


// Criar o escutador
window.addEventListener("load", () => { // Roda a funcção assim que a página é carregada

    // Inicialização das variáveis
    let arrayElements = [100, 200, 5, 300, 2, 400, 10];
    let viewResult = document.querySelector(".div-resultado");
    let sumArray = 0; // Armazena o valor da soma dos elementos do array

    // Soma de elementos do array
    for (let position = 0; position < arrayElements.length; position++) {

        arrayElements.sort((a, b) => a - b); // Ordena os números em ordem crescente

        // Soma dos elementos
        sumArray += arrayElements[position]; // Armazena e adiciona o valor da soma dos elementos do array


        if (position < arrayElements.length - 1) {
            viewResult.innerHTML += `${arrayElements[position]} + `; // Imprime até o penúltimo elemento

        } else {
            viewResult.innerHTML += `${arrayElements[position]} = `; // Imprime o último elemento
        }
    }

    viewResult.innerHTML += `<strong>${sumArray}</strong>`; // Imprime o valor da soma dos elementos do array
   

});
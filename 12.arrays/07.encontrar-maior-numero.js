/**
 * Escreva um programa que encontra o maior número em um array.
 */

// Declaração do array de números
const numeros = [-2, 0, -10, 3, -1, 12, 4]; 

// Inicialização da variável que armazenará o maior número
// Começamos assumindo que o primeiro elemento do array é o maior
let maiorNumero = numeros[0]; 


// Loop para percorrer cada elemento do array
for (let i = 0; i <= numeros.length; i++) {
    // Verifica se o elemento actual (numeros[i]) é maior que o valor armazenado em maiorNumero
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]; // Se for maior, actualiza o valor de maiorNumero com o elemento actual
    } 
    // Se o elemento actual não for maior, o loop continua para o próximo elemento
}

// Exibe o resultado no console
console.log(`O maior número entre "${numeros}", é o número: ${maiorNumero}`);


/**
 * Escreva um programa que encontra o Menor Número em um array.
 */

// Declaração do array de números
const numeros = [489, 34, 2, 97, 200]; 

// Inicialização da variável que armazenará o menor número
// Começamos assumindo que o primeiro elemento do array é o menor
let menorNumero = numeros[0]; 


// Loop para percorrer cada elemento do array
for (let i = 0; i <= numeros.length; i++) {
    // Verifica se o elemento actual (numeros[i]) é menor que o valor armazenado em menorNumero
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i]; // Se for menor, actualiza o valor de menorNumero com o elemento actual
    } 
    // Se o elemento actual não for menor, o loop continua para o próximo elemento
}

// Exibe o resultado no console
console.log(`O menor número entre "${numeros}", é o número: ${menorNumero}`);


/**
 * 17 - Números Primos (for)
Escreva um programa que identifique e exiba todos os números primos entre 1 e 100 
usando um loop `for`.
 */


// 

let startNumber = 1; // Define o número inicial do intervalo
let endNumber = 100; // Define o número final do intervalo

// Função para verificar se um número é primo
function isPrime(number) {
    // Números menores que 2 não são primos
    if (number < 2) return false;

    // Itera de 2 até a raiz quadrada de "number"
    // (otimização: se "number" não for divisível por nenhum número até sua raiz quadrada, ele é primo)
    for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
        // Se n for divisível por i, não é primo
        if (number % i === 0) return false;
    }

    // Se nenhum divisor for encontrado, o número é primo
    return true;
}

// Loop para verificar cada número no intervalo de startNumber a endNumber
for (let i = startNumber; i <= endNumber; i++) {
    // Verifica se o número atual (i) é primo
    if (isPrime(i)) {
        // Se for primo, exibe uma mensagem no console
        console.log(`${i} is a prime number`);
    }
}



// CÓDIGO ORIGINAL E FUNCIONAL MAS MENOS EFICIENTE

// let startNumber = 1; // Número inicial
// let endNumber = 100; // Número final


// // Função reutilizável
// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
       
// }


// for (let i = startNumber; i <= endNumber; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }
/**
 * 17 - Números Primos (for)
Escreva um programa que identifique e exiba todos os números primos entre 1 e 100 
usando um loop `for`.
 */


let number = 17; // Número inicial
let endNumber = 100; // Número final
let primeNumber = []; // Irá armzenar todos os números primos


if (number == 1) {
    console.log(`${number} não é primo e também não é composto`);

} else if (number < 1) {
    console.log(`${number} não é um número primo`);

} else {
    for (var i = 2; i < number; i++) {

        if (number % i == 0) {
            var res = `${number} não é um número primo`;
            break;

        } else {
            var res = `${number} é um número primo`;
        }
    }

    console.log(res);
    
}
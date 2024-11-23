
/**
 * Factorial de um número.
 * Ex: 5! = 5 * 4 * 3 * 2 * 1
 *      5! = 5 * 4!
 */

function factorial(numero) {

    if (numero === 0) {
        return 1;

    } else {
        return numero * factorial(numero - 1);
    }
    
};

console.log(factorial(5));
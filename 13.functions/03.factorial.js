
/**
 * Factorial de um número.
 * Ex: 5! = 5 * 4 * 3 * 2 * 1
 */

function factorial(numero) {

    let fat = 1;

    for (let c = numero; c > 1; c--) {
        fat *= c;
    };

    return fat;
};

console.log(factorial(5));
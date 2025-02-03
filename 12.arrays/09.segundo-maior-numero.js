/**
Encontrar o Segundo Maior Número
Use duas variáveis: maiorNumero e segundoMaior.
Atualize ambas as variáveis conforme você percorre o array.
 */


const numeros = [10, 5, 20, 15];
let maiorNumero = -Infinity;
let segundoMaior = -Infinity;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        // Actualiza segundoMaior com o valor antigo de maiorNumero
        segundoMaior = maiorNumero;
        // Actualiza maiorNumero com o valor atual
        maiorNumero = numeros[i];

    } else if (numeros[i] > segundoMaior && numeros[i] < maiorNumero) {
        // Atualiza segundoMaior
        segundoMaior = numeros[i];
    }
}

console.log("O segundo maior número é:", segundoMaior);
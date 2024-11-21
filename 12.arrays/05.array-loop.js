


// Lista Numérica
let numeros = [5, 7, 4, 12, 6, 8];

// Pode ordenar antes de imprimir
// numeros.sort((a, b) => a - b);

// Conta o número de posições
// for (let pos = 0; pos < numeros.length; pos++) {

//     console.log(`A posição é ${pos} e tem o valor ${numeros[pos]}.`);
// }


// Uma forma mais simples de Contar o número de posições
for (let posicao in numeros) {

    console.log(`A posição é ${posicao} e tem como valor ${numeros[posicao]}`);
};
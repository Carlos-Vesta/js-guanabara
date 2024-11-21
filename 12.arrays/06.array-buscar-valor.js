
// Lista Numérica
let numeros = [5, 7, 4, 12, 6, 8];

// Procura o elemento 6 no array e retorna o valor do seu índice (4)
let procurarNumero = numeros.indexOf(6); 

// Quando o número não faz parte da lista retorna - 1


// console.log(`${procurarNumero}`);


if (procurarNumero != -1) {

    console.log(`O valor está na posição ${procurarNumero}`);

} else {

    console.log(`O valor ${procurarNumero} não foi encontrado!`);
};
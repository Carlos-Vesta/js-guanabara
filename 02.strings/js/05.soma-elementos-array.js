/**
 * 1 - Criar um array de números
 * 2 - Inicializar uma variável para armazenar a soma
 * 3 - Percorrer cada elemento do array usando um loop for
 * 4 - Adicionar o valor do elemento actual a soma
 * 5 - Exiba o resultado 
 */


const numeros = [20, 40, 60, 80, 100];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];

}

console.log(`A soma dos números ${numeros} é igual à ${soma}`);
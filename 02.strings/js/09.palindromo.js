/**
Escreva um programa que verifica se uma string é um palíndromo 
(ou seja, se pode ser lida da mesma forma de trás para frente).
Exemplo: "arara" → true.
 */

let texto = prompt("Digite uma palavra e veja se é um Palíndromo: "); // Recebe o texto

let textoInvertido = ""; // Armazena o texto invertido

// Faz a inversão do texto
for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

// Verifica se o texto é uma PALÍNDROMO ou não
if (texto.toLocaleLowerCase() === textoInvertido.toLocaleLowerCase()) {
    alert(`"${texto.toLocaleLowerCase()}" é igual à "${textoInvertido.toLocaleLowerCase()}". É um PALÍNDROMO.`);

} else {
    alert(`"${texto.toLocaleLowerCase()}" é diferente de "${textoInvertido.toLocaleLowerCase()}". NÃO É um PALÍNDROMO.`);
}

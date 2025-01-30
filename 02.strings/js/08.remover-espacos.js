/**
Escreva um programa que remove todos os espaços de uma string.
Exemplo: "Olá Mundo" → "OláMundo".
 */


let texto = prompt("Digite um texto para ser removido os espaços: ");


let dividirPalavras = texto.split(" ");
let removerEspacos = "";

for (let i = 0; i <= dividirPalavras.length - 1; i++) {
    removerEspacos += dividirPalavras[i];
}

alert(removerEspacos);
/**
 * Escreva um programa que conta quantas palavras existem em uma string fornecida pelo usuário.
Dica: Use o método split(" ") para dividir a string em palavras.
 */



let texto = prompt("Digite um texto qualquer para contarmos as palavras! "); // Recebe o texto
let contarPalavras = texto.split(" "); // Divide o texto em palavras apartir dos espaços 

alert(`O texto: << ${texto} >> tem ${contarPalavras.length} palavra(s).`); // Imprime a quantidade de palavras que tem o texto
/**
 * Escreva um programa que inverte uma string fornecida pelo
 * usuário.
 * Ex: "Olá"  ===>   "álO"
 */


let texto = prompt("Digite um texto qualquer para ser invertido: ");
let invertedText = ""; // Armazena os caracteres do texto na ordem invertida



for (let i = texto.length - 1; i <= texto.length; i--) {

    if (i >= 0) {
        invertedText += texto.charAt(i); // Retorna o caractere na posição "i"

    } else {
        break; // Interrompe o ciclo
    }

}

alert(invertedText); // Imprime o texto invertido
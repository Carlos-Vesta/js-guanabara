/*
    Criar um Script que pede o nome de um idividou e mostre na tela
    o nome e o número de letra que o nome tem, usando o document.write ou document.writeln

*/

var nome = window.prompt('Digite o seu nome completo: ');

document.write(`Olá ${nome.toLowerCase()}, o seu nome tem ${nome.length} letras.`)
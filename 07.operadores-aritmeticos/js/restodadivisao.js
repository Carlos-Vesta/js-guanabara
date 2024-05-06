// Faça um programa que leia dois números e mostre o resultado do Resto da Divisão

var numero1 = Number(prompt('Digite o primeiro número: '));
var numero2 = Number(prompt('Digite o segundo número: '));

var restoDivisao = numero1 % numero2;

alert(`A resto da divisão entre ${numero1} e ${numero2} é igual a ${restoDivisao}`);
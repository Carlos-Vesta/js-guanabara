// Faça um programa que leia dois números e mostre o resultado da sua Divisão

var numero1 = Number(prompt('Digite o primeiro número: '));
var numero2 = Number(prompt('Digite o segundo número: '));

var soma = numero1 / numero2;

alert(`A divisão de ${numero1} e ${numero2} é igual a ${soma.toFixed(2)}`);
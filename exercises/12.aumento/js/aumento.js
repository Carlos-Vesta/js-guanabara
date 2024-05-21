/*

Faça um algoritmo que leia o salário de um funcionário e 
mostre o seu novo salário, com 15% de aumento.

*/

var salario = Number(prompt('Digite o valor do salário: '))

var aumento = (salario * 15) / 100
var salarioAumento = salario + aumento

alert(`O salário de ${salario.toLocaleString('en-US')}MT, com aumento de 15% é igual a ${salarioAumento.toLocaleString('en-US')}MT`)
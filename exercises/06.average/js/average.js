/*

Desenvolva um programa que leia as duas notas de um aluno, 
calcule e mostre a sua média.

*/

var nota_1 = Number(prompt('Digite a primeira nota: '))
var nota_2 = Number(prompt('Digite a segunda nota: '))

var media = (nota_1 + nota_2) / 2

alert(`O aluno tem como notas: \n Nota 1 = ${nota_1}; <===> Nota 2 = ${nota_2}; \n A sua Média é ${media}`)
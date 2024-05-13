/*

Faça um programa que leia um número inteiro e mostre na tela 
o seu sucessor e seu antecessor.

*/

var numeroInteiro = Number.parseInt(prompt('Digite um número inteiro: '))

var successor = numeroInteiro + 1
var predecessor = numeroInteiro - 1

alert(`O número ${numeroInteiro}, tem como sucessor ${successor} e antecessor ${predecessor}`)
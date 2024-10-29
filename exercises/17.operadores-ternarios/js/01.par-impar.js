/**
 * 1 - Verificação de Par ou Ímpar
Crie um programa que leia um número inteiro pelo teclado, e verifique se o número fornecido é par ou ímpar.
 * 
 */

var numero = parseInt(prompt("Digite um numero inteiro: "))

var parImpar = numero % 2 == 0 ? "PAR" : "IMPAR" 

alert(`O número ${numero} é um número ${parImpar}.`)
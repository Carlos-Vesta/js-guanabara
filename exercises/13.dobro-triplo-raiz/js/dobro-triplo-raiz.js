/*

- Crie um algoritmo que leia um numero e mostre na tela o seu dobro, 
triplo e raiz quadrada.

*/

var numero = Number(prompt('Digite um número: '))

var dobro = Math.pow(numero, 2)
var triplo = Math.pow(numero, 3)
var raizQuadrada = Math.sqrt(numero)

alert(`O número ${numero}, tem como dobro ${dobro}, triplo ${triplo} e raiz quadrada ${raizQuadrada.toFixed(2)}`)
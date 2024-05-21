/*

Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, 
cosseno e tangente desse ângulo.

*/

var angulo = Number(prompt('Digite um ângulo qualquer: '))

var radiano = angulo * (Math.PI / 180)

var seno = Math.sin(radiano)
var cosseno = Math.cos(radiano)
var tangente = Math.tan(radiano)

alert(`O ângulo de ${angulo} graus, tem como Seno ${seno.toFixed(2)}, Cosseno ${cosseno.toFixed(2)} e Tangente ${tangente.toFixed(2)}`)
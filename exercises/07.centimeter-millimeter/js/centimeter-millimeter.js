/*

Escreva um programa que leia um valor em metros e o 
exiba convertido em centímetros e milímetros.

*/

var metro = Number(prompt('Digite um valor em metros: '))

var centimetro = metro * 100
var milimetro = metro * 1000

alert(`${metro} metros, correspondem a ${centimetro} cm e ${milimetro} mm`)
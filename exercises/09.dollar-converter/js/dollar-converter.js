/*

Crie um programa que leia quanto dinheiro uma pessoa tem na carteira, 
e mostre quantos Dólares ela pode comprar.

Considere: USD 1.00 = 63.00MT

*/

var dinheiroMetical = Number(prompt('Digite a quantidade de dinheiro que tem na carteira: '))

var dinheiroDolares = (dinheiroMetical * 1) / 63

alert(`${dinheiroMetical} Meticais, pode comprar ${dinheiroDolares.toFixed(2)} Dólares.`)
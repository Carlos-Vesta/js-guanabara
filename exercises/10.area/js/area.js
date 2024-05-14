/*

Faça um programa que leia a largura e a altura de uma parede em metros, 
calcule a sua Área e quantidade de tinta necessária para pinta-la, 
sabendo que cada litro de tinta, pinta uma área de dois metros ao quadrado (2m * m).

*/

var largura = Number(prompt('Digite o valor da largura em metros: '))
var altura = Number(prompt('Digite o valor da altura em metros: '))

var area = largura * altura
var quantidadeTinta = (area * 1) / 2

alert(`Uma parede com ${largura} metros de largura e ${altura} metros de altura, tem uma área de ${area.toLocaleString('en-US')} metros quadrados.\n
Para pintar uma parede com uma área de ${area.toLocaleString('en-US')} metros quadrados, são necessários ${quantidadeTinta.toLocaleString('en-US')} litros de tinta.`)
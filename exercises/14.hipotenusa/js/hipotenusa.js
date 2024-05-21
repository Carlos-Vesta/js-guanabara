/*

- Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente 
de um triângulo retângulo, calcule e mostre o comprimento da hipotenusa.

*/

var catetoOposto = Number(prompt('Digite o valor do cateto oposto em metros: '))
var catetoAdjacente = Number(prompt('Digite o valor do cateto adjacente em metros: '))

var hipotenusa = Math.sqrt((Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2)))

alert(`O nosso Triângulo Rectângulo tem como valor do Cateto Oposto ${catetoOposto} metros, 
e o Cateto Ajacente ${catetoAdjacente} metros. A sua Hipotenusa é igual a ${hipotenusa} metros.`)
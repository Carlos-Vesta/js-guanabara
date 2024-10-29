/**
 * 2 - Classificação de Idade
Escreva um código que classifique uma pessoa como "Adulto" ou "Menor de idade" com base em sua idade. 
Considere 18 anos como idade mínima para ser considerado um adulto.
 */


var idade = parseInt(prompt("Digite a sua idade: "))

var adultoMenor = idade >= 18 ? "MAIOR" : "MENOR"

alert(`Você tem ${idade} anos. Você é ${adultoMenor} de idade!`)
/**
 * 7 - Classificação de Nota
Desenvolva um programa que leia três (3) notas de um aluno, calcule a sua média e diga se ele foi Excluído, Admitido ou Dispensado. A classificação deve ser feita com base na seguinte escala:
• Dispensado: média maior ou igual a 13.5 valores
• Admitido: média entre 10 e 13.4 valores
• Excluído: média menor que 10 valores
 */

var nota_1 = Number(prompt("Digite a primeira nota: "))
var nota_2 = Number(prompt("Digite a segunda nota: "))
var nota_3 = Number(prompt("Digite a terceira nota: "))


var media = ((nota_1 + nota_2 + nota_3) / 3).toFixed(2)

var resultado = 
media >= 13.5 & media <= 20 ? ` Nota 1 = ${nota_1}\n Nota 2 = ${nota_2}\n Nota 3 = ${nota_3}\n Média = ${media} << DISPENSADO >>` :
media >= 10 & media <= 13.4 ? ` Nota 1 = ${nota_1}\n Nota 2 = ${nota_2}\n Nota 3 = ${nota_3}\n Média = ${media} << ADMITIDO >>` :
media <= 9.9 & media >= 0 ? ` Nota 1 = ${nota_1}\n Nota 2 = ${nota_2}\n Nota 3 = ${nota_3}\n Média = ${media} << EXCLUIDO >>` :
` Nota 1 = ${nota_1}\n Nota 2 = ${nota_2}\n Nota 3 = ${nota_3}\n Média = ${media} \n<< NÃO É POSSIVEL CALCULAR A MÉDIA COM ESSAS NOTAS! >>`

alert(resultado)
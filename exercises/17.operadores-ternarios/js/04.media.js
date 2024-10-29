/**
 * 4 – Cálculo da Média Semestral
Desenvolva um código que leia duas notas de um aluno, calcule a sua média e determine se um aluno foi aprovado ("Aprovado") 
ou reprovado ("Reprovado") com base em sua nota final (Média). 
A média deve ser maior ou igual a 10 para que o aluno seja aprovado.
 */

var nota_1 = Number(prompt("Digite a sua primeira nota: "))
var nota_2 = Number(prompt("Digite a sua segunda nota: "))

var media = (nota_1 + nota_2) / 2

var aprovadoReprovado = media >= 10 ? "APROVADO" : "REPROVADO"

alert(`Notas do aluno: \n Nota 1 = ${nota_1} \n Nota 2 = ${nota_2} \n
Média = ${media} <<${aprovadoReprovado}>>`)
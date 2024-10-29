/**
 * 5 - Cálculo de Desconto
Crie um programa que calcule o desconto aplicado ao preço de um produto, onde o desconto é de 10% se o preço for maior que 100MT.
Mostre o novo preço com desconto aplicado.
 */

var preco = Number(prompt("Digite o preço do produto: "))
/**
 * Esta fórmula também é valida
 * var descontoPercentual = ((preco * 10) / 10).toFixed(2)
 */

var descontoPercentual = (preco * 0.1).toFixed(2) //Fórmula abreviada
var precoComDesconto = preco - descontoPercentual

var valorTotal = preco > 100 ? `Tem desconte de 10% que corresponde à ${descontoPercentual}MT, e vai pagar ${precoComDesconto}MT.` :
`Não tem desconto.`

alert(`O produto custa ${preco}MT, assim sendo: ${valorTotal}`)